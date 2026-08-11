import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, ScrollText, Navigation, Globe, ChevronDown, Flame, Music, Feather } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { LANGUAGES } from '../lib/languages';
import { t } from '../lib/translations';
import ShlokaTicker from './ShlokaTicker';

interface NavbarProps {
  language: string;
  onLanguageChange: (lang: string) => void;
}

interface AgamaItem {
  to: string;
  label: string;
  englishLabel: string;
  hasPage: boolean;
}

interface AgamaGroup {
  title: string;
  subtitle: string;
  colorClass: string;
  agamas: AgamaItem[];
}

const agamaGroups: AgamaGroup[] = [
  {
    title: 'सद्योजात',
    subtitle: 'Creation (1–5)',
    colorClass: 'text-vermillion',
    agamas: [
      { to: '/kamikagama', label: 'कामिक आगम', englishLabel: 'Kamika Agama', hasPage: true },
      { to: '/yogajagama', label: 'योगज आगम', englishLabel: 'Yogaja Agama', hasPage: true },
      { to: '/chintyagama', label: 'चिन्त्य आगम', englishLabel: 'Chintya Agama', hasPage: true },
      { to: '/karanagama', label: 'कारण आगम', englishLabel: 'Karana Agama', hasPage: true },
      { to: '/ajitagama', label: 'अजित आगम', englishLabel: 'Ajita Agama', hasPage: true },
    ],
  },
  {
    title: 'वामदेव',
    subtitle: 'Preservation (6–10)',
    colorClass: 'text-turmeric-deep',
    agamas: [
      { to: '/diptagama', label: 'दीप्त आगम', englishLabel: 'Dipta Agama', hasPage: true },
      { to: '/sukshmagama', label: 'सूक्ष्म आगम', englishLabel: 'Sukshma Agama', hasPage: true },
      { to: '/sahasragama', label: 'सहस्र आगम', englishLabel: 'Sahasra Agama', hasPage: true },
      { to: '/amsumadagama', label: 'अंशुमद् आगम', englishLabel: 'Amsumada Agama', hasPage: true },
      { to: '/suprabhedagama', label: 'सुप्रभेद आगम', englishLabel: 'Suprabheda Agama', hasPage: true },
    ],
  },
  {
    title: 'अघोर',
    subtitle: 'Dissolution (11–15)',
    colorClass: 'text-sage',
    agamas: [
      { to: '/vijayagama', label: 'विजय आगम', englishLabel: 'Vijaya Agama', hasPage: true },
      { to: '/nishvasagama', label: 'निश्वास आगम', englishLabel: 'Nishvasa Agama', hasPage: true },
      { to: '/svayambhuvagama', label: 'स्वायम्भुव आगम', englishLabel: 'Svayambhuva Agama', hasPage: true },
      { to: '/analagama', label: 'अनल आगम', englishLabel: 'Anala Agama', hasPage: true },
      { to: '/viragama', label: 'वीर आगम', englishLabel: 'Vira Agama', hasPage: true },
    ],
  },
  {
    title: 'तत्पुरुष',
    subtitle: 'Concealment (16–20)',
    colorClass: 'text-lotus',
    agamas: [
      { to: '/rauravagama', label: 'रौरव आगम', englishLabel: 'Raurava Agama', hasPage: true },
      { to: '/makutagama', label: 'मकुट आगम', englishLabel: 'Makuta Agama', hasPage: true },
      { to: '/vimalagama', label: 'विमल आगम', englishLabel: 'Vimala Agama', hasPage: true },
      { to: '/candrajnanagama', label: 'चन्द्रज्ञान आगम', englishLabel: 'Candrajnana Agama', hasPage: true },
      { to: '/bimbagama', label: 'मुखबिम्ब आगम', englishLabel: 'Mukhabimba Agama', hasPage: true },
    ],
  },
  {
    title: 'ईशान',
    subtitle: 'Grace (21–28)',
    colorClass: 'text-ink-faint',
    agamas: [
      { to: '/matangagama', label: 'मातङ्ग आगम', englishLabel: 'Matanga Agama', hasPage: true },
      { to: '/parameshvaragama', label: 'परमेश्वर आगम', englishLabel: 'Parameshvara Agama', hasPage: true },
      { to: '/kiranagama', label: 'किरण आगम', englishLabel: 'Kirana Agama', hasPage: true },
      { to: '/vatulagama', label: 'वातुल आगम', englishLabel: 'Vatula Agama', hasPage: true },
      { to: '/kalottaragama', label: 'कालोत्तर आगम', englishLabel: 'Kalottara Agama', hasPage: true },
      { to: '/kalagnirudragama', label: 'कालाग्निरुद्र आगम', englishLabel: 'Kalagnirudra Agama', hasPage: true },
      { to: '/mrigendragama', label: 'मृगेन्द्र आगम', englishLabel: 'Mrigendra Agama', hasPage: true },
      { to: '/netragama', label: 'नेत्र आगम', englishLabel: 'Netra Agama', hasPage: true },
    ],
  },
];

// Flatten for mobile and active check
const allAgamas = agamaGroups.flatMap(g => g.agamas);

export default function Navbar({ language, onLanguageChange }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [agamasOpen, setAgamasOpen] = useState(false);
  const agamaRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const links = [
    { to: '/', label: t('home', language), icon: ScrollText },
    { to: '/editorial', label: 'Editorial', icon: Feather },
    { to: '/library', label: t('sacredLibrary', language), icon: BookOpen },
    { to: '/heritage', label: t('heritageDirectory', language), icon: ScrollText },
    { to: '/encyclopedia', label: 'ग्रन्थ सूची', icon: BookOpen },
    { to: '/travel', label: t('travelPlanner', language), icon: Navigation },
    { to: '/live-temples', label: 'Live दर्शन', icon: Flame },
    { to: '/puja-mantra', label: 'पूजा मंत्र', icon: Music },
  ];

  const currentLang = LANGUAGES.find(l => l.name === language);
  const isAgamaActive = allAgamas.some(a => location.pathname === a.to && a.hasPage);

  // Close agama dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (agamaRef.current && !agamaRef.current.contains(event.target as Node)) {
        setAgamasOpen(false);
      }
    }
    if (agamasOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [agamasOpen]);

  return (
    <div className="sticky top-0 z-50">
      <ShlokaTicker />
      <nav className="bg-surface/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14">
            <Link to="/" className="flex items-center gap-2.5 group">
              <span className="text-xl font-display font-bold text-vermillion">ॐ</span>
              <div className="hidden sm:block">
                <h1 className="font-display text-ink font-semibold text-base leading-none tracking-tight">{t('sanatanSanskriti', language)}</h1>
                <p className="text-ink-faint text-[9px] tracking-[0.2em] uppercase mt-0.5">{t('sanatanSanskritiSub', language)}</p>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-0.5">
              {/* Main Links */}
              {links.map(link => {
                const active = location.pathname === link.to;
                return (
                  <Link key={link.to} to={link.to}
                    className={`px-3 py-1.5 rounded-md text-[13px] font-medium transition-colors ${active ? 'bg-vermillion/8 text-vermillion' : 'text-ink-muted hover:text-ink hover:bg-parchment-warm'}`}
                  >{link.label}</Link>
                );
              })}

              {/* Agamas Dropdown */}
              <div className="relative" ref={agamaRef}>
                <button
                  onClick={() => setAgamasOpen(!agamasOpen)}
                  className={`px-3 py-1.5 rounded-md text-[13px] font-medium transition-colors flex items-center gap-1.5 ${isAgamaActive ? 'bg-vermillion/8 text-vermillion' : 'text-ink-muted hover:text-ink hover:bg-parchment-warm'}`}
                >
                  शैव आगम
                  <ChevronDown size={12} className={`transition-transform ${agamasOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {agamasOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -6, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -6, scale: 0.97 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 mt-1.5 w-80 bg-surface border border-border rounded-xl shadow-xl shadow-black/10 overflow-hidden z-50 max-h-[70vh] overflow-y-auto"
                    >
                      {/* Header */}
                      <div className="px-4 py-3 border-b border-border bg-parchment-warm/30">
                        <p className="text-xs font-semibold text-ink-faint uppercase tracking-wider">अष्टाविंशति शैवागम</p>
                        <p className="text-[11px] text-ink-muted">28 Primary Shaiva Agamas</p>
                      </div>

                      {/* Groups */}
                      {agamaGroups.map((group, gi) => (
                        <div key={group.title}>
                          <div className="px-4 py-1.5 bg-surface/80 border-t border-border">
                            <p className={`text-[10px] font-bold uppercase tracking-wider ${group.colorClass}`}>
                              {group.title} — {group.subtitle}
                            </p>
                          </div>
                          {group.agamas.map((agama, ai) => {
                            const globalIndex = agamaGroups.slice(0, gi).reduce((acc, g) => acc + g.agamas.length, 0) + ai + 1;
                            const active = location.pathname === agama.to;

                            if (agama.hasPage) {
                              return (
                                <Link
                                  key={agama.to}
                                  to={agama.to}
                                  onClick={() => setAgamasOpen(false)}
                                  className={`flex items-center gap-3 px-4 py-2.5 hover:bg-vermillion/5 transition-colors group ${active ? 'bg-vermillion/8' : ''}`}
                                >
                                  <span className={`w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center shrink-0 ${active ? 'bg-vermillion text-white' : 'bg-vermillion/10 text-vermillion'}`}>
                                    {globalIndex}
                                  </span>
                                  <div className="min-w-0">
                                    <p className={`text-[13px] font-medium truncate ${active ? 'text-vermillion' : 'text-ink group-hover:text-vermillion'} transition-colors`}>
                                      {agama.label}
                                    </p>
                                    <p className="text-[11px] text-ink-faint truncate">{agama.englishLabel}</p>
                                  </div>
                                </Link>
                              );
                            }

                            return (
                              <div
                                key={agama.to}
                                className="flex items-center gap-3 px-4 py-2.5 opacity-50 cursor-not-allowed"
                              >
                                <span className="w-5 h-5 rounded-full bg-ink-faint/10 text-ink-faint text-[10px] font-bold flex items-center justify-center shrink-0">
                                  {globalIndex}
                                </span>
                                <div className="min-w-0">
                                  <p className="text-[13px] font-medium text-ink-muted truncate">{agama.label}</p>
                                  <p className="text-[11px] text-ink-faint truncate">{agama.englishLabel} — Coming Soon</p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="relative">
                <button onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-border text-[12px] font-medium text-ink-muted hover:border-ink-faint transition-colors">
                  <Globe size={13} />
                  <span className="hidden sm:inline">{currentLang?.nativeName}</span>
                  <span className="sm:hidden">{currentLang?.code?.toUpperCase()}</span>
                  <ChevronDown size={11} className={`transition-transform ${langOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {langOpen && (
                    <>
                      <div className="fixed inset-0 z-40" onClick={() => setLangOpen(false)} />
                      <motion.div initial={{ opacity: 0, y: -6, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -6, scale: 0.97 }} transition={{ duration: 0.15 }}
                        className="absolute right-0 mt-1.5 w-52 bg-surface border border-border rounded-lg shadow-lg overflow-hidden z-50">
                        <div className="max-h-72 overflow-y-auto py-1">
                          {LANGUAGES.map(lang => (
                            <button key={lang.code} onClick={() => { onLanguageChange(lang.name); setLangOpen(false); }}
                              className={`w-full text-left px-3 py-2 text-[13px] flex items-center justify-between hover:bg-parchment-warm transition-colors ${language === lang.name ? 'bg-vermillion/6 text-vermillion font-medium' : 'text-ink'}`}>
                              <span>{lang.name}</span>
                              <span className="text-ink-faint text-[11px]">{lang.nativeName}</span>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
              <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-1.5 rounded-md hover:bg-parchment-warm transition-colors">
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-t border-border overflow-hidden bg-surface">
              <div className="px-4 py-2 space-y-0.5 max-h-[80vh] overflow-y-auto">
                {/* Main Links */}
                {links.map(link => {
                  const Icon = link.icon;
                  const active = location.pathname === link.to;
                  return (
                    <Link key={link.to} to={link.to} onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-2.5 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${active ? 'bg-vermillion/8 text-vermillion' : 'text-ink-muted hover:text-ink hover:bg-parchment-warm'}`}>
                      <Icon size={16} />{link.label}
                    </Link>
                  );
                })}

                {/* Mobile Agamas Section */}
                <div className="mt-2 pt-2 border-t border-border">
                  <p className="px-3 py-2 text-[12px] font-medium text-ink-faint uppercase tracking-wider">अष्टाविंशति शैवागम — 28 Agamas</p>
                  {agamaGroups.map((group, gi) => (
                    <div key={group.title}>
                      <div className="px-3 py-1.5 bg-parchment-warm/30">
                        <p className={`text-[10px] font-bold uppercase tracking-wider ${group.colorClass}`}>
                          {group.title} — {group.subtitle}
                        </p>
                      </div>
                      {group.agamas.map((agama, ai) => {
                        const globalIndex = agamaGroups.slice(0, gi).reduce((acc, g) => acc + g.agamas.length, 0) + ai + 1;
                        const active = location.pathname === agama.to;

                        if (agama.hasPage) {
                          return (
                            <Link
                              key={agama.to}
                              to={agama.to}
                              onClick={() => setMobileOpen(false)}
                              className={`flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors ${active ? 'bg-vermillion/8 text-vermillion' : 'text-ink-muted hover:text-ink hover:bg-parchment-warm'}`}
                            >
                              <span className={`w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center shrink-0 ${active ? 'bg-vermillion text-white' : 'bg-vermillion/10 text-vermillion'}`}>
                                {globalIndex}
                              </span>
                              <div className="min-w-0">
                                <p className="font-devanagari text-sm font-medium truncate">{agama.label}</p>
                                <p className="text-[11px] text-ink-faint truncate">{agama.englishLabel}</p>
                              </div>
                            </Link>
                          );
                        }

                        return (
                          <div
                            key={agama.to}
                            className="flex items-center gap-3 px-3 py-2.5 opacity-50"
                          >
                            <span className="w-5 h-5 rounded-full bg-ink-faint/10 text-ink-faint text-[10px] font-bold flex items-center justify-center shrink-0">
                              {globalIndex}
                            </span>
                            <div className="min-w-0">
                              <p className="font-devanagari text-sm font-medium text-ink-muted truncate">{agama.label}</p>
                              <p className="text-[11px] text-ink-faint truncate">{agama.englishLabel} — Coming Soon</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}