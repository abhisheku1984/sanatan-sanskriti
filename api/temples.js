import supabase from './db-client.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  try {
    if (req.method === 'GET') {
      const { type } = req.query;
      let query = supabase.from('temples').select('*').order('id', { ascending: true });
      if (type && type !== 'All') {
        query = query.eq('type', type);
      }
      const { data, error } = await query;
      if (error) throw error;
      return res.status(200).json(data || []);
    }

    if (req.method === 'POST') {
      const temple = req.body;
      const { data, error } = await supabase
        .from('temples')
        .insert(temple)
        .select()
        .single();
      if (error) throw error;
      return res.status(201).json(data);
    }

    res.status(405).json({ error: 'Method not allowed' });
  } catch (err) {
    console.error('Temples API error:', err.message);
    // Return empty array so frontend doesn't crash
    res.status(200).json([]);
  }
}