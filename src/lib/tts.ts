// Text-to-Speech utility using Web Speech API
// Fixed: proper voice loading, correct language matching

const LANGUAGE_CODES: Record<string, string> = {
  'English': 'en-IN',
  'Hindi': 'hi-IN',
  'Sanskrit': 'hi-IN',
  'Tamil': 'ta-IN',
  'Telugu': 'te-IN',
  'Bengali': 'bn-IN',
  'Gujarati': 'gu-IN',
  'Kannada': 'kn-IN',
  'Malayalam': 'ml-IN',
  'Marathi': 'mr-IN',
  'Odia': 'or-IN',
  'Punjabi': 'pa-IN',
};

const LANG_PREFIX: Record<string, string> = {
  'English': 'en', 'Hindi': 'hi', 'Sanskrit': 'hi',
  'Tamil': 'ta', 'Telugu': 'te', 'Bengali': 'bn',
  'Gujarati': 'gu', 'Kannada': 'kn', 'Malayalam': 'ml',
  'Marathi': 'mr', 'Odia': 'or', 'Punjabi': 'pa',
};

export function getLanguageCode(language: string): string {
  return LANGUAGE_CODES[language] || 'hi-IN';
}

let voicesLoaded = false;
let voicesPromise: Promise<SpeechSynthesisVoice[]> | null = null;

function loadVoices(): Promise<SpeechSynthesisVoice[]> {
  if (voicesLoaded) return Promise.resolve(window.speechSynthesis.getVoices());
  if (voicesPromise) return voicesPromise;

  voicesPromise = new Promise((resolve) => {
    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      voicesLoaded = true;
      resolve(voices);
      return;
    }
    window.speechSynthesis.onvoiceschanged = () => {
      voicesLoaded = true;
      resolve(window.speechSynthesis.getVoices());
    };
    setTimeout(() => {
      voicesLoaded = true;
      resolve(window.speechSynthesis.getVoices());
    }, 1000);
  });
  return voicesPromise;
}

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  loadVoices();
}

function findBestVoice(voices: SpeechSynthesisVoice[], language: string): SpeechSynthesisVoice | null {
  const exactCode = LANGUAGE_CODES[language];
  const prefix = LANG_PREFIX[language] || 'hi';

  let voice = voices.find(v => v.lang === exactCode);
  if (voice) return voice;

  voice = voices.find(v => v.lang.startsWith(prefix + '-'));
  if (voice) return voice;

  voice = voices.find(v => v.lang === prefix);
  if (voice) return voice;

  voice = voices.find(v => v.name.toLowerCase().includes(language.toLowerCase()));
  if (voice) return voice;

  if (language !== 'English') {
    voice = voices.find(v => v.lang.endsWith('-IN') && v.lang.startsWith(prefix));
    if (voice) return voice;
  }

  return null;
}

export async function speak(text: string, language: string, onEnd?: () => void): Promise<SpeechSynthesisUtterance | null> {
  if (!('speechSynthesis' in window)) {
    console.warn('TTS not supported');
    return null;
  }

  window.speechSynthesis.cancel();

  const voices = await loadVoices();
  const langCode = getLanguageCode(language);

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = langCode;
  utterance.rate = 0.9;
  utterance.pitch = 1;
  utterance.volume = 1;

  const bestVoice = findBestVoice(voices, language);
  if (bestVoice) {
    utterance.voice = bestVoice;
    utterance.lang = bestVoice.lang;
  }

  if (onEnd) utterance.onend = onEnd;
  utterance.onerror = (e) => {
    console.error('TTS error:', e);
    if (onEnd) onEnd();
  };

  let keepAlive: ReturnType<typeof setInterval> | null = null;
  utterance.onstart = () => {
    keepAlive = setInterval(() => {
      if (!window.speechSynthesis.speaking) {
        if (keepAlive) clearInterval(keepAlive);
        return;
      }
      window.speechSynthesis.pause();
      window.speechSynthesis.resume();
    }, 10000);
  };
  const origOnEnd = utterance.onend;
  utterance.onend = (e: SpeechSynthesisEvent) => {
    if (keepAlive) clearInterval(keepAlive);
    if (origOnEnd) origOnEnd.call(utterance, e);
  };

  window.speechSynthesis.speak(utterance);
  return utterance;
}

export function stopSpeaking(): void {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
}

export function pauseSpeaking(): void {
  if ('speechSynthesis' in window) window.speechSynthesis.pause();
}

export function resumeSpeaking(): void {
  if ('speechSynthesis' in window) window.speechSynthesis.resume();
}

export function isSpeaking(): boolean {
  return 'speechSynthesis' in window ? window.speechSynthesis.speaking : false;
}