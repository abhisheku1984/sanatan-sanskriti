import './api/load-env.js'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { parse } from 'url'
import { resolve } from 'path'
import { pathToFileURL } from 'url'

// Vite plugin that serves Vercel-style API routes during local development
function apiRoutesPlugin() {
  return {
    name: 'api-routes',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const parsed = parse(req.url || '', true)
        const pathname = parsed.pathname || ''

        if (!pathname.startsWith('/api/')) return next()

        const routeName = pathname.replace('/api/', '').split('/')[0]
        const routeFile = resolve(`./api/${routeName}.js`)

        // Build mock request object
        const mockReq = Object.create(req)
        mockReq.query = parsed.query
        mockReq.url = req.url

        // Parse JSON body for POST/PUT
        if (req.method === 'POST' || req.method === 'PUT') {
          const chunks = []
          for await (const chunk of req) chunks.push(chunk)
          const body = Buffer.concat(chunks).toString()
          try {
            mockReq.body = body ? JSON.parse(body) : {}
          } catch {
            mockReq.body = {}
          }
        }

        // Build mock response object
        const mockRes = {
          _status: 200,
          _headers: {} as Record<string, string>,
          _ended: false,
          setHeader(key, value) {
            this._headers[key] = value
            res.setHeader(key, value)
            return this
          },
          status(code) {
            this._status = code
            res.statusCode = code
            return this
          },
          json(data) {
            if (this._ended) return this
            this._ended = true
            if (!res.headersSent) res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify(data))
            return this
          },
          end(data) {
            if (this._ended) return
            this._ended = true
            res.end(data)
          },
        }

        try {
          // Windows fix: convert absolute path to file:// URL for ESM import
          const fileUrl = pathToFileURL(routeFile).href + '?t=' + Date.now()
          const module = await import(fileUrl)
          const handler = module.default
          if (typeof handler === 'function') {
            await handler(mockReq, mockRes)
            if (!mockRes._ended) mockRes.end()
          } else {
            res.statusCode = 404
            res.end(JSON.stringify({ error: 'API route not found' }))
          }
        } catch (err) {
          console.error(`[API Error] ${routeName}:`, err.message)
          if (!mockRes._ended) {
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: err.message }))
          }
        }
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig(async ({ mode }) => {
  const plugins = [react(), tailwindcss()]

  if (mode === 'development') {
    plugins.push(apiRoutesPlugin())
  }

  try {
    // @ts-expect-error optional local plugin may not exist
    const m = await import('./.vite-source-tags.js')
    plugins.push(m.sourceTags())
  } catch {
    /* intentionally empty: optional plugin may not exist */
  }

  const env = loadEnv(mode, process.cwd(), ['VITE_', 'NEXT_PUBLIC_'])
  const processEnvDefines: Record<string, string> = {}
  for (const [key, value] of Object.entries(env)) {
    processEnvDefines[`process.env.${key}`] = JSON.stringify(value)
  }

  return {
    plugins,
    envPrefix: ['VITE_', 'NEXT_PUBLIC_'],
    define: processEnvDefines,
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom', 'react-router-dom'],
            'motion': ['framer-motion'],
            'ui': ['lucide-react'],
          },
        },
      },
      chunkSizeWarningLimit: 500,
    },
  }
})