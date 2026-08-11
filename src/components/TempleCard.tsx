import { useState, useEffect, startTransition } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { t } from '../lib/translations';
import { translateText } from '../lib/translate';
import AudioPlayer from './AudioPlayer';

interface Temple {
  id: number; name: string; hindi_name: string; type: string; state: string; city: string;
  latitude: number; longitude: number; description: string; significance: string; deity: string;
}

const TYPE_ACCENT: Record<string, string> = { 'Jyotirlinga': 'border-l-vermillion', 'Shakti Peetha': 'border-l-lotus', 'Char Dham': 'border-l-sage', 'Major Temple': 'border-l-turmeric' };
const TYPE_BADGE: Record<string, string> = { 'Jyotirlinga': 'bg-vermillion/8 text-vermillion', 'Shakti Peetha': 'bg-lotus/10 text-lotus', 'Char Dham': 'bg-sage/10 text-sage', 'Major Temple': 'bg-turmeric/10 text-turmeric-deep' };

export default function TempleCard({ temple, language, index }: { temple: Temple; language: string; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const [trDesc, setTrDesc] = useState('');
  const [trSig, setTrSig] = useState('');
  const [translating, setTranslating] = useState(false);

  useEffect(() => {
    if (!expanded) return;
    if (language === 'English') {
      startTransition(() => {
        setTrDesc(temple.description);
        setTrSig(temple.significance);
      });
      return;
    }
    startTransition(() => setTranslating(true));
    Promise.all([
      translateText(temple.description, language),
      translateText(temple.significance, language),
    ]).then(([d, s]) => {
      startTransition(() => { setTrDesc(d); setTrSig(s); });
    }).catch(() => {
      startTransition(() => { setTrDesc(temple.description); setTrSig(temple.significance); });
    }).finally(() => {
      startTransition(() => setTranslating(false));
    });
  }, [expanded, language, temple.id, temple.description, temple.significance]);

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: Math.min(index * 0.03, 0.5) }}
      className={`bg-surface border border-border rounded-lg overflow-hidden border-l-[3px] ${TYPE_ACCENT[temple.type] || 'border-l-border'}`}>
      <button onClick={() => setExpanded(!expanded)} className="w-full text-left px-4 py-3.5 flex items-start gap-3 hover:bg-parchment/50 transition-colors">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <h3 className="font-display text-base font-semibold text-ink">{temple.name}</h3>
            <span className="font-devanagari text-ink-faint text-[13px]">({temple.hindi_name})</span>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wide ${TYPE_BADGE[temple.type] || 'bg-parchment-warm text-ink-muted'}`}>{temple.type}</span>
            <span className="text-ink-faint text-[12px]">{temple.city}, {temple.state}</span>
            <span className="text-ink-faint text-[12px]">· {temple.deity}</span>
          </div>
        </div>
        <div className="flex-shrink-0 mt-1 text-ink-faint">{expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}</div>
      </button>
      <AnimatePresence>
        {expanded && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
            <div className="px-4 pb-4 space-y-3 border-t border-border-light pt-3">
              <AudioPlayer text={`${temple.name}. ${trDesc || temple.description}. ${trSig || temple.significance}`} language={language} title={`${temple.name} — ${t('audioGuide', language)}`} />
              {translating && (
                <div className="flex items-center gap-2 px-3 py-2 bg-vermillion/5 border border-vermillion/15 rounded-lg">
                  <div className="w-3 h-3 border-2 border-vermillion/30 border-t-vermillion rounded-full animate-spin" />
                  <p className="text-vermillion text-xs">Translating → {language}…</p>
                </div>
              )}
              <div><h4 className="text-[11px] font-semibold uppercase tracking-wider text-ink-faint mb-1">{t('historicalBg', language)}</h4><p className="text-[14px] text-ink-light leading-relaxed">{trDesc || temple.description}</p></div>
              <div><h4 className="text-[11px] font-semibold uppercase tracking-wider text-ink-faint mb-1">{t('significanceLegend', language)}</h4><p className="text-[14px] text-ink-light leading-relaxed">{trSig || temple.significance}</p></div>
              <div className="flex items-center gap-4 text-[11px] text-ink-faint pt-1">
                <span>{t('deity', language)}: <strong className="text-ink-muted">{temple.deity}</strong></span>
                <span>{t('location', language)}: {temple.latitude.toFixed(2)}°N, {temple.longitude.toFixed(2)}°E</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}