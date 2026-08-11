import supabase from './db-client.js';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();

  try {
    if (req.method === 'POST') {
      // Upload zip to Supabase storage (called once to seed)
      const possiblePaths = [
        join(process.cwd(), 'public', 'sanatan-sanskriti-source.zip'),
        join(process.cwd(), 'dist', 'sanatan-sanskriti-source.zip'),
      ];

      let filePath = null;
      for (const p of possiblePaths) {
        if (existsSync(p)) { filePath = p; break; }
      }

      if (!filePath) {
        return res.status(404).json({ error: 'ZIP not found on server' });
      }

      const fileBuffer = readFileSync(filePath);
      
      const { data, error } = await supabase.storage
        .from('downloads')
        .upload('sanatan-sanskriti-source.zip', fileBuffer, {
          contentType: 'application/zip',
          upsert: true,
        });

      if (error) throw error;

      const { data: urlData } = supabase.storage
        .from('downloads')
        .getPublicUrl('sanatan-sanskriti-source.zip');

      return res.status(200).json({ 
        ok: true, 
        url: urlData.publicUrl,
        size: fileBuffer.length,
      });
    }

    if (req.method === 'GET') {
      // Return the public URL for the zip
      const { data: urlData } = supabase.storage
        .from('downloads')
        .getPublicUrl('sanatan-sanskriti-source.zip');

      // Redirect to the Supabase storage URL
      res.setHeader('Location', urlData.publicUrl);
      return res.status(302).end();
    }

    res.status(405).json({ error: 'Method not allowed' });
  } catch (err) {
    console.error('Download API error:', err);
    res.status(500).json({ error: err.message });
  }
}
