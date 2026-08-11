// Client-side translation helper
// Calls /api/translate which uses Google Translate + Supabase cache

const inFlightRequests = new Map<string, Promise<string>>();

export async function translateText(text: string, targetLang: string): Promise<string> {
  if (!text || targetLang === 'English') return text;
  
  // Deduplicate in-flight requests
  const cacheKey = `${text.substring(0, 100)}_${targetLang}`;
  const existing = inFlightRequests.get(cacheKey);
  if (existing) return existing;

  const promise = (async () => {
    try {
      const res = await fetch('/api/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, targetLang }),
      });
      
      if (!res.ok) return text;
      const data = await res.json();
      return data.translated || text;
    } catch {
      return text;
    } finally {
      // Clean up after a delay
      setTimeout(() => inFlightRequests.delete(cacheKey), 5000);
    }
  })();

  inFlightRequests.set(cacheKey, promise);
  return promise;
}
