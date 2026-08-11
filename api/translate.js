import supabase from './db-client.js';
import crypto from 'crypto';

// Free translation using Google Translate's informal API
// Results are cached in Supabase to avoid repeated calls

const LANG_CODES = {
  'English': 'en', 'Hindi': 'hi', 'Sanskrit': 'sa',
  'Tamil': 'ta', 'Telugu': 'te', 'Bengali': 'bn',
  'Gujarati': 'gu', 'Kannada': 'kn', 'Malayalam': 'ml',
  'Marathi': 'mr', 'Odia': 'or', 'Punjabi': 'pa',
};

function hashText(text) {
  return crypto.createHash('md5').update(text.substring(0, 500)).digest('hex');
}

async function translateText(text, targetLang) {
  const langCode = LANG_CODES[targetLang] || 'hi';
  
  // Split into chunks of ~4000 chars to stay within limits
  const chunks = [];
  const maxLen = 4000;
  let remaining = text;
  while (remaining.length > 0) {
    if (remaining.length <= maxLen) {
      chunks.push(remaining);
      break;
    }
    // Find a good break point
    let breakPoint = remaining.lastIndexOf('.', maxLen);
    if (breakPoint < maxLen * 0.5) breakPoint = remaining.lastIndexOf(' ', maxLen);
    if (breakPoint < maxLen * 0.5) breakPoint = maxLen;
    chunks.push(remaining.substring(0, breakPoint + 1));
    remaining = remaining.substring(breakPoint + 1);
  }

  const translatedChunks = [];
  for (const chunk of chunks) {
    try {
      const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${langCode}&dt=t&q=${encodeURIComponent(chunk)}`;
      const res = await fetch(url, {
        headers: { 'User-Agent': 'Mozilla/5.0' },
      });
      
      if (!res.ok) {
        translatedChunks.push(chunk); // fallback to original
        continue;
      }
      
      const data = await res.json();
      // Google returns [[['translated', 'original', ...], ...], ...]
      if (data && data[0]) {
        const translated = data[0].map(item => item[0]).join('');
        translatedChunks.push(translated);
      } else {
        translatedChunks.push(chunk);
      }
    } catch (err) {
      console.error('Translation chunk error:', err.message);
      translatedChunks.push(chunk);
    }
  }

  return translatedChunks.join('');
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { text, targetLang } = req.body;
    
    if (!text || !targetLang) {
      return res.status(400).json({ error: 'text and targetLang are required' });
    }

    // If target is English and text is likely already English, skip
    if (targetLang === 'English') {
      return res.status(200).json({ translated: text, cached: false });
    }

    const sourceHash = hashText(text);
    const langCode = LANG_CODES[targetLang] || 'hi';

    // Check cache first
    const { data: cached } = await supabase
      .from('translations_cache')
      .select('translated_text')
      .eq('source_hash', sourceHash)
      .eq('target_lang', langCode)
      .limit(1)
      .single();

    if (cached) {
      return res.status(200).json({ translated: cached.translated_text, cached: true });
    }

    // Translate
    const translated = await translateText(text, targetLang);

    // Cache the result (don't await, fire-and-forget)
    supabase
      .from('translations_cache')
      .insert({
        source_hash: sourceHash,
        target_lang: langCode,
        source_text: text.substring(0, 10000), // limit stored source
        translated_text: translated,
      })
      .then(() => {})
      .catch(() => {});

    return res.status(200).json({ translated, cached: false });
  } catch (err) {
    console.error('Translate API error:', err);
    res.status(500).json({ error: err.message });
  }
}
