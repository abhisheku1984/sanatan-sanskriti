import './api/load-env.js';
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { parse } from 'url';

// Get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(resolve(__dirname, 'dist')));

// API Routes Handler
app.all('/api/*', async (req, res) => {
  try {
    const routeName = req.path.replace('/api/', '').split('/')[0];
    const apiPath = resolve(__dirname, `api/${routeName}.js`);

    // Import the API handler
    const handler = (await import(apiPath + '?t=' + Date.now())).default;

    // Prepare request object
    const mockReq = {
      method: req.method,
      url: req.originalUrl,
      query: req.query,
      body: req.body,
      headers: req.headers,
    };

    // Prepare response object
    const mockRes = {
      _status: 200,
      _headers: {},
      setHeader(key, value) {
        this._headers[key] = value;
        res.setHeader(key, value);
        return this;
      },
      status(code) {
        this._status = code;
        res.status(code);
        return this;
      },
      json(data) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(data));
      },
      end(data) {
        if (data) res.send(data);
        else res.end();
      },
    };

    // Call handler
    await handler(mockReq, mockRes);
  } catch (err) {
    console.error('[API Error]', err.message);
    res.status(500).json({ error: err.message });
  }
});

// Serve index.html for client-side routing
app.get('*', (req, res) => {
  res.sendFile(resolve(__dirname, 'dist/index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log(`📍 API routes available at http://localhost:${PORT}/api/*`);
});