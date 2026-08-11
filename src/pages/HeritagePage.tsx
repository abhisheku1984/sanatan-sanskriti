import { useState, useEffect } from 'react';
import { Search, MapPin, Filter, ChevronDown, ChevronUp, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AudioPlayer from '../components/AudioPlayer';
import LoadingSpinner from '../components/LoadingSpinner';
import { t } from '../lib/translations';


interface Temple {
  id: number; name: string; hindi_name: string; type: string; state: string; city: string;
  latitude: number; longitude: number; description: string; significance: string; deity: string;
}

const TYPE_ORDER = ['Jyotirlinga', 'Shakti Peetha', 'Char Dham', 'Major Temple'];
const TYPE_COLORS: Record<string, string> = {
  'Jyotirlinga': 'bg-vermillion/10 text-vermillion border-vermillion/30',
  'Shakti Peetha': 'bg-lotus/10 text-lotus border-lotus/30',
  'Char Dham': 'bg-sage/10 text-sage border-sage/30',
  'Major Temple': 'bg-turmeric/10 text-turmeric-deep border-turmeric/30',
};

export default function HeritagePage({ language }: { language: string }) {
  const [temples, setTemples] = useState<Temple[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [activeType, setActiveType] = useState<string>('All');
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [stateFilter, setStateFilter] = useState<string>('All');

  useEffect(() => {
    fetch('/api/temples')
      .then(async r => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          setTemples(data);
        } else {
          setTemples([]);
          setError('Unable to load temples.');
        }
      })
      .catch(err => {
        console.error(err);
        setError('Unable to load temples.');
      })
      .finally(() => setLoading(false));
  }, []);

  const states = useState(() => {
    const s = new Set(temples.map(t => t.state));
    return ['All', ...Array.from(s).sort()];
  })[0];

  const filtered = temples.filter(t => {
    const matchSearch = !search || t.name.toLowerCase().includes(search.toLowerCase()) || t.city.toLowerCase().includes(search.toLowerCase()) || t.state.toLowerCase().includes(search.toLowerCase());
    const matchType = activeType === 'All' || t.type === activeType;
    const matchState = stateFilter === 'All' || t.state === stateFilter;
    return matchSearch && matchType && matchState;
  });

  const grouped = filtered.reduce((acc, t) => {
    if (!acc[t.type]) acc[t.type] = [];
    acc[t.type].push(t);
    return acc;
  }, {} as Record<string, Temple[]>);

  const sortedTypes = TYPE_ORDER.filter(t => grouped[t]);

  if (loading) return <div className="pt-6 pb-12 px-4"><LoadingSpinner /></div>;

  return (
    <div className="pt-6 pb-12 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-ink">Heritage Directory</h1>
          <p className="text-ink-muted mt-1">Sacred temples of Sanatan Dharma across Bharat and beyond</p>
          <p className="font-devanagari text-vermillion/60 text-sm mt-2">॥ यत्र योगेश्वरः कृष्णो यत्र पार्धो धनुर्धरः ॥</p>
        </motion.div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm text-center">{error}</div>
        )}

        {/* Filters */}
        <div className="bg-surface border border-border rounded-xl p-4 mb-6 space-y-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-faint" />
              <input type="text" placeholder="Search temples, cities, states..." value={search} onChange={e => setSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 bg-parchment border border-border rounded-lg text-sm text-ink placeholder:text-ink-faint/50 focus:outline-none focus:border-vermillion/40" />
            </div>
            <select value={stateFilter} onChange={e => setStateFilter(e.target.value)} className="px-3 py-2.5 bg-parchment border border-border rounded-lg text-sm text-ink focus:outline-none focus:border-vermillion/40">
              {states.map(s => <option key={s} value={s}>{s === 'All' ? 'All States' : s}</option>)}
            </select>
          </div>
          <div className="flex flex-wrap gap-2">
            <button onClick={() => setActiveType('All')} className={`px-3 py-1.5 rounded-full text-[12px] font-medium border transition-colors ${activeType === 'All' ? 'bg-vermillion text-white border-vermillion' : 'bg-parchment text-ink-muted border-border hover:border-vermillion/30'}`}>All Types</button>
            {TYPE_ORDER.map(type => (
              <button key={type} onClick={() => setActiveType(type)} className={`px-3 py-1.5 rounded-full text-[12px] font-medium border transition-colors ${activeType === type ? 'bg-vermillion text-white border-vermillion' : 'bg-parchment text-ink-muted border-border hover:border-vermillion/30'}`}>
                {type} {grouped[type] && `(${grouped[type].length})`}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-ink-faint text-sm">{filtered.length} temple{filtered.length !== 1 ? 's' : ''} found</p>
        </div>

        {/* Temple List by Category */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-ink-faint">
            <MapPin size={36} className="mx-auto mb-3 opacity-40" />
            <p>No temples found matching your criteria.</p>
          </div>
        ) : (
          <div className="space-y-8">
            {sortedTypes.map(type => (
              <div key={type}>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider border ${TYPE_COLORS[type] || 'bg-parchment-warm text-ink-muted border-border'}`}>{type}</span>
                  <div className="flex-1 h-px bg-border" />
                  <span className="text-ink-faint text-[12px]">{grouped[type].length}</span>
                </div>
                <div className="space-y-2">
                  {grouped[type].map((temple, idx) => (
                    <motion.div key={temple.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: Math.min(idx * 0.02, 0.3) }}
                      className={`bg-surface border rounded-lg overflow-hidden transition-all ${TYPE_COLORS[type]?.split(' ')[2] || 'border-border'}`}>
                      <button onClick={() => setExpandedId(expandedId === temple.id ? null : temple.id)}
                        className="w-full text-left px-4 py-3.5 flex items-start gap-3 hover:bg-parchment/30 transition-colors">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap mb-0.5">
                            <h3 className="font-display text-base font-semibold text-ink">{temple.name}</h3>
                            <span className="font-devanagari text-ink-faint text-[13px]">({temple.hindi_name})</span>
                          </div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-ink-faint text-[12px]">{temple.city}, {temple.state}</span>
                            <span className="text-ink-faint text-[12px]">· {temple.deity}</span>
                          </div>
                        </div>
                        <div className="flex-shrink-0 mt-1 text-ink-faint">
                          {expandedId === temple.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </div>
                      </button>
                      <AnimatePresence>
                        {expandedId === temple.id && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                            <div className="px-4 pb-4 space-y-3 border-t border-border-light pt-3">
                              <AudioPlayer text={`${temple.name}. ${temple.city}, ${temple.state}. ${temple.description}`} language={language} title={`${temple.name} — Audio Guide`} />
                              <div>
                                <h4 className="text-[11px] font-semibold uppercase tracking-wider text-ink-faint mb-1">Description</h4>
                                <p className="text-[14px] text-ink-light leading-relaxed">{temple.description}</p>
                              </div>
                              <div>
                                <h4 className="text-[11px] font-semibold uppercase tracking-wider text-ink-faint mb-1">Significance</h4>
                                <p className="text-[14px] text-ink-light leading-relaxed">{temple.significance}</p>
                              </div>
                              <div className="flex items-center gap-4 text-[11px] text-ink-faint pt-1">
                                <span>Deity: <strong className="text-ink-muted">{temple.deity}</strong></span>
                                <span>Location: {temple.latitude.toFixed(2)}°N, {temple.longitude.toFixed(2)}°E</span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}