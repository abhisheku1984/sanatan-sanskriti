import { useState, useEffect, useCallback, useRef, startTransition } from 'react';
import { Play, Pause, Square, Volume2 } from 'lucide-react';
import { speak, stopSpeaking, pauseSpeaking, resumeSpeaking } from '../lib/tts';
import { translateText } from '../lib/translate';
import { t } from '../lib/translations';
import DharmaWheel from './DharmaWheel';

interface AudioPlayerProps {
  text: string;
  language: string;
  title?: string;
  compact?: boolean;
  onLineRead?: (lineIndex: number, text: string) => void;  // Callback for highlighting
}

// Module-level constant to avoid impure function during render
const BAR_HEIGHTS = [1, 2, 3, 4, 5].map(() => 4 + Math.random() * 16);

// Split text into readable chunks (sentences/lines)
function splitTextIntoLines(text: string): string[] {
  if (!text) return [];

  // First split by double newlines (paragraphs)
  const paragraphs = text.split('\n\n').filter(p => p.trim().length > 0);
  const lines: string[] = [];

  paragraphs.forEach(para => {
    // Split each paragraph into sentences
    // Handles English, Sanskrit, and Hindi punctuation
    const sentences = para
      .split(/(?<=[.!?।])\s+(?=[A-Z\u0900-\u097F0-9])/g)
      .filter(s => s.trim().length > 0);

    if (sentences.length > 0) {
      lines.push(...sentences);
    } else if (para.trim().length > 0) {
      lines.push(para.trim());
    }
  });

  return lines;
}

export default function AudioPlayer({
  text,
  language,
  title,
  compact = false,
  onLineRead
}: AudioPlayerProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'playing' | 'paused'>('idle');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const translatedRef = useRef<string>('');
  const linesRef = useRef<string[]>([]);
  const currentLineRef = useRef(0);

  // Prepare lines whenever text changes
  useEffect(() => {
    const lines = splitTextIntoLines(text);
    linesRef.current = lines;
    setCurrentLineIndex(0);
    currentLineRef.current = 0;
    setProgress(0);
  }, [text]);

  useEffect(() => {
    return () => { stopSpeaking(); };
  }, []);

  useEffect(() => {
    stopSpeaking();
    translatedRef.current = '';
    currentLineRef.current = 0;
    startTransition(() => setStatus('idle'));
  }, [text, language]);

  const handlePlay = useCallback(async () => {
    if (status === 'paused') {
      resumeSpeaking();
      setStatus('playing');
      return;
    }

    setStatus('loading');

    let textToSpeak = text;
    try {
      if (language !== 'English') {
        if (translatedRef.current) {
          textToSpeak = translatedRef.current;
        } else {
          const translated = await translateText(text, language);
          translatedRef.current = translated;
          textToSpeak = translated;
        }
      }
    } catch {
      // If translation fails, speak original text
    }

    // Read text with line-by-line callback
    await readLineByLine(textToSpeak, language);
    setStatus('playing');
  }, [status, text, language]);

  const readLineByLine = async (fullText: string, lang: string) => {
    const lines = splitTextIntoLines(fullText);
    const totalLines = lines.length;

    for (let i = currentLineRef.current; i < totalLines; i++) {
      const line = lines[i];

      // Update progress
      currentLineRef.current = i;
      setCurrentLineIndex(i);
      setProgress((i / totalLines) * 100);

      // Call callback for highlighting (parent component can highlight this line)
      if (onLineRead) {
        onLineRead(i, line);
      }

      // Speak the line
      await new Promise<void>((resolve) => {
        speak(line, lang, () => {
          resolve();
        });
      });

      // Small pause between lines for readability
      await new Promise(resolve => setTimeout(resolve, 200));
    }

    // Reset on completion
    setStatus('idle');
    currentLineRef.current = 0;
    setCurrentLineIndex(0);
    setProgress(0);
  };

  const handlePause = useCallback(() => {
    pauseSpeaking();
    setStatus('paused');
  }, []);

  const handleStop = useCallback(() => {
    stopSpeaking();
    setStatus('idle');
    currentLineRef.current = 0;
    setCurrentLineIndex(0);
    setProgress(0);
  }, []);

  if (compact) {
    return (
      <button
        onClick={status === 'playing' ? handlePause : handlePlay}
        disabled={status === 'loading'}
        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-vermillion/30 text-vermillion text-[12px] font-medium hover:bg-vermillion/5 transition-colors disabled:opacity-50"
        title={`${t('listen', language)} - ${language}`}>
        {status === 'loading' ? (
          <div className="w-3 h-3 border-2 border-vermillion/30 border-t-vermillion rounded-full animate-spin" />
        ) : (
          <DharmaWheel size={16} spinning={status === 'playing'} />
        )}
        {status === 'loading' ? '...' : status === 'playing' ? t('pause', language) : t('listen', language)}
      </button>
    );
  }

  const totalLines = linesRef.current.length;

  return (
    <div className="flex flex-col gap-3 bg-surface-warm border border-border rounded-lg px-4 py-3">
      {/* Main controls */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5">
          <button
            onClick={status === 'playing' ? handlePause : handlePlay}
            disabled={status === 'loading'}
            className="w-9 h-9 rounded-full bg-vermillion text-white flex items-center justify-center hover:bg-vermillion-deep transition-colors disabled:opacity-60">
            {status === 'loading' ? (
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : status === 'playing' ? <Pause size={15} /> : <Play size={15} className="ml-0.5" />}
          </button>
          {(status === 'playing' || status === 'paused') && (
            <button
              onClick={handleStop}
              className="w-7 h-7 rounded-full border border-border text-ink-muted flex items-center justify-center hover:bg-parchment-warm transition-colors">
              <Square size={11} />
            </button>
          )}
        </div>

        <div className="flex-shrink-0">
          <DharmaWheel size={36} spinning={status === 'playing'} />
        </div>

        <div className="flex-1 min-w-0">
          {title && <p className="text-[13px] font-medium text-ink truncate">{title}</p>}
          <p className="text-[11px] text-ink-faint">
            {status === 'loading' ? `${t('playingIn', language)} ${language}…`
              : status === 'playing' ? `${t('playingIn', language)} ${language}… (${currentLineIndex + 1}/${totalLines})`
              : status === 'paused' ? t('paused', language)
              : `${t('audioNarration', language)} · ${language} · ${totalLines} ${totalLines === 1 ? 'line' : 'lines'}`}
          </p>
          {status === 'playing' && (
            <p className="text-[10px] font-devanagari text-vermillion/80 mt-0.5 italic samay-fade">॥ मैं समय हूँ — I am Time ॥</p>
          )}
        </div>

        {status === 'playing' && (
          <div className="flex items-end gap-[3px] h-5">
            {BAR_HEIGHTS.map((h, i) => (
              <div
                key={i}
                className="w-[3px] bg-vermillion rounded-full animate-pulse-soft"
                style={{ height: `${h}px`, animationDelay: `${i * 0.12}s` }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Progress bar */}
      {status !== 'idle' && (
        <div className="w-full h-1.5 bg-border rounded-full overflow-hidden">
          <div
            className="h-full bg-vermillion transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {/* Current line display (optional - shows what's being read) */}
      {status === 'playing' && currentLineIndex < linesRef.current.length && (
        <div className="text-[12px] text-ink-light bg-white/30 rounded p-2 max-h-16 overflow-y-auto">
          <p className="italic text-ink-muted text-[10px] mb-1">Now reading:</p>
          <p>{linesRef.current[currentLineIndex]}</p>
        </div>
      )}
    </div>
  );
}