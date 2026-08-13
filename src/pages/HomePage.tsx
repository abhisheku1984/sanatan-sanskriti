import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ScrollText, Navigation, ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionDivider from '../components/SectionDivider';
import DharmaWheel from '../components/DharmaWheel';
import { t } from '../lib/translations';

// Generate stars once at module level to avoid impure function during render
const STARS = Array.from({ length: 40 }).map(() => ({
  size: 1 + Math.random() * 2,
  top: Math.random() * 100,
  left: Math.random() * 100,
}));

export default function HomePage({ language = 'English' }: { language?: string }) {
  const [stats, setStats] = useState({ books: 0, temples: 0, chapters: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch('/api/books').then(r => r.json()),
      fetch('/api/temples').then(r => r.json()),
    ])
      .then(([books, temples]) => {
        const safeBooks = Array.isArray(books) ? books : [];
        const safeTemples = Array.isArray(temples) ? temples : [];
        setStats({
          books: safeBooks.length,
          temples: safeTemples.length,
          chapters: safeBooks.reduce((s: number, b: { total_chapters?: number }) => s + (b.total_chapters || 0), 0),
        });
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const features = [
    { icon: BookOpen, title: t('libTitle', language), desc: t('libDesc', language), link: '/library', cta: t('libCta', language) },
    { icon: ScrollText, title: t('herTitle', language), desc: t('herDesc', language), link: '/heritage', cta: t('herCta', language) },
    { icon: Navigation, title: t('trvTitle', language), desc: t('trvDesc', language), link: '/travel', cta: t('trvCta', language) },
  ];

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative w-full overflow-hidden bg-cosmic-dark">
        <div className="relative">
          <img src="/hero-banner-6ca23dd6.png" alt="Sanatan Sanskriti" className="w-full h-auto block" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cosmic-dark to-transparent" />
        </div>
      </section>

      {/* KAAL CHAKRA */}
      <section className="relative bg-cosmic-dark py-16 md:py-24 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-cosmic-gold/[0.04] blur-[100px]" />
        <div className="absolute inset-0 overflow-hidden">{STARS.map((star, i) => (<div key={i} className="absolute rounded-full bg-cosmic-glow/30" style={{ width: `${star.size}px`, height: `${star.size}px`, top: `${star.top}%`, left: `${star.left}%` }} />))}</div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }} viewport={{ once: true }} className="flex justify-center mb-8">
            <DharmaWheel size={140} spinning={true} color="#C9A84C" />
          </motion.div>
          <div className="min-h-[120px] flex flex-col items-center justify-center">
            <h2 className="font-devanagari text-5xl md:text-7xl font-bold text-cosmic-glow tracking-wide samay-breathe">{t('mainSamay', language)}</h2>
            <p className="font-display text-xl md:text-2xl text-cosmic-gold/80 italic mt-2 samay-breathe-delayed">{t('iAmTime', language)}</p>
          </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }} viewport={{ once: true }} className="mt-6">
            <p className="font-devanagari text-cosmic-gold/50 text-sm"> </p>
            <p className="text-cosmic-glow/35 text-xs mt-1">{t('gitaRef', language)}</p>
            <p className="text-cosmic-glow/40 text-sm max-w-lg mx-auto leading-relaxed mt-4">{t('kaalDesc', language)}</p>
          </motion.div>
        </div>
      </section>

      {/* TEMPLE TAGLINE */}
      <section className="relative bg-gradient-to-r from-cosmic-dark via-cosmic-navy to-cosmic-dark py-6 md:py-8 overflow-hidden border-t border-cosmic-gold/10">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            <p className="text-cosmic-gold/60 text-[11px] tracking-[0.3em] uppercase font-medium mb-3">{t('templeTributeLabel', language)}</p>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-cosmic-glow leading-snug mb-3">{t('templeTributeTitle', language)}</h2>
            <p className="font-devanagari text-cosmic-gold/70 text-base md:text-lg mb-4">{t('templeTributeSub', language)}</p>
            <p className="text-cosmic-glow/50 text-sm max-w-2xl mx-auto leading-relaxed">{t('templeTributeDesc', language)}</p>
            <div className="flex items-center justify-center gap-3 mt-6">
              <Link to="/heritage" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cosmic-gold/15 border border-cosmic-gold/30 text-cosmic-glow text-sm font-medium hover:bg-cosmic-gold/25 transition-colors"><ScrollText size={15} /> {t('exploreAllTemples', language)}</Link>
              <Link to="/travel" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-cosmic-glow/20 text-cosmic-glow/70 text-sm font-medium hover:border-cosmic-glow/40 hover:text-cosmic-glow transition-colors"><Navigation size={15} /> {t('planPilgrimage', language)}</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-8 border-b border-border bg-surface-warm">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-3 gap-6">
          {[{ num: stats.books, label: t('sacredTexts', language) }, { num: stats.temples, label: t('sacredSites', language) }, { num: 12, label: t('languages', language) }].map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-vermillion">{loading ? 'â€”' : stat.num}</p>
              <p className="text-ink-faint text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <SectionDivider className="my-12" />

      {/* FEATURES */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">{t('coreFeatures', language)}</h2>
            <p className="text-ink-muted mt-2">{t('coreFeaturesDesc', language)}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {features.map((f, i) => { const Icon = f.icon; return (
              <motion.div key={f.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                <Link to={f.link} className="block bg-surface border border-border rounded-xl p-6 hover:border-vermillion/30 hover:shadow-sm transition-all group h-full">
                  <div className="w-10 h-10 rounded-lg bg-vermillion/8 flex items-center justify-center mb-4"><Icon size={20} className="text-vermillion" /></div>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2 group-hover:text-vermillion transition-colors">{f.title}</h3>
                  <p className="text-ink-muted text-sm leading-relaxed mb-4">{f.desc}</p>
                  <span className="text-vermillion text-sm font-medium flex items-center gap-1">{f.cta} <ArrowRight size={13} /></span>
                </Link>
              </motion.div>
            ); })}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative bg-cosmic-dark text-cosmic-glow/70 py-12 px-4 mt-8">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-4"><DharmaWheel size={32} spinning={true} color="#C9A84C" /></div>
          <p className="font-display text-cosmic-glow text-lg font-semibold">{t('sanatanSanskriti', language)}</p>
          <p className="text-cosmic-glow/50 text-sm mt-1">{t('footerTagline', language)}</p>
          <p className="font-devanagari text-cosmic-gold/50 text-xs mt-2 samay-fade">à¥¥ à¤®à¥ˆà¤‚ à¤¸à¤®à¤¯ à¤¹à¥‚à¤ â€” à¤•à¤¾à¤²à¥‹à¤½à¤¸à¥à¤®à¤¿ à¤²à¥‹à¤•à¤•à¥à¤·à¤¯à¤•à¥ƒà¤¤à¥à¤ªà¥à¤°à¤µà¥ƒà¤¦à¥à¤§à¥‹à¤½à¤¹à¤®à¥ à¥¥</p>
          <div className="my-4 flex items-center justify-center gap-3"><div className="h-px w-16 bg-cosmic-gold/20" /><span className="text-cosmic-gold/40 text-xs">âœ¦</span><div className="h-px w-16 bg-cosmic-gold/20" /></div>
          <p className="text-cosmic-gold/40 text-xs font-devanagari">{t('footerShloka', language)}</p>
          <p className="text-cosmic-glow/30 text-[11px] mt-2 italic">{t('footerShlokaEn', language)}</p>
        </div>
      </footer>
    </div>
  );
}
