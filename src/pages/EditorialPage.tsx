import { motion } from 'framer-motion';
import DharmaWheel from '../components/DharmaWheel';
import { t } from '../lib/translations';

export default function EditorialPage({ language = 'English' }: { language?: string }) {
  return (
    <div className="min-h-screen">
      {/* HERO — Cosmic Wheel Video Background */}
      <section className="relative w-full overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster=""
          >
            <source src="/videos/cosmic-wheel.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-cosmic-dark/75" />
          {/* Gradient fade at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cosmic-dark to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 py-20 md:py-28">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="flex justify-center mb-6"
            >
              <DharmaWheel size={100} spinning={true} color="#C9A84C" />
            </motion.div>
            <p className="text-cosmic-gold/60 text-[11px] tracking-[0.3em] uppercase font-medium mb-4">
              Editorial — Sanatan Heritage
            </p>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-cosmic-glow leading-snug mb-4">
              Bridging Ancient Roots with Modern Code
            </h1>
            <p className="text-cosmic-gold/70 text-lg md:text-xl mb-6">
              Why Every Child of Bharat Should Know Our Eternal Heritage
            </p>
            <div className="flex items-center justify-center gap-2 text-cosmic-glow/50 text-sm">
              <span className="w-7 h-7 rounded-full bg-cosmic-gold/20 flex items-center justify-center text-cosmic-gold font-bold text-xs">
                S
              </span>
              <span>
                By <strong className="text-cosmic-glow/70">Sanvi</strong> (Age 10)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SANVI VIDEO SECTION */}
      <section className="py-8 bg-surface-warm border-b border-border">
        <div className="max-w-3xl mx-auto px-4">
          <div className="rounded-xl overflow-hidden border border-border bg-surface shadow-sm">
            <video controls className="w-full block" poster="">
              <source src="/videos/sanvi-editorial.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-center text-ink-faint text-xs py-3 italic">
              Sanvi — A young devotee at the temple of knowledge
            </p>
          </div>
        </div>
      </section>

      {/* EDITORIAL CONTENT */}
      <section className="py-12 md:py-16 px-4 bg-parchment">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="font-devanagari text-2xl font-medium text-ink mb-6">Namaste!</p>

            <p className="text-ink leading-relaxed mb-5 text-[15px]">
              I am Sanvi, a 10-year-old student and technology enthusiast. Like many kids my age, I love exploring what computers, artificial intelligence, and digital tools can do. But my greatest inspiration comes from something far more ancient and profound —{' '}
              <strong className="text-vermillion">Sanatan Sanskriti</strong>.
            </p>

            <p className="text-ink leading-relaxed mb-5 text-[15px]">
              I wanted to do my part in preserving this infinite ocean of knowledge. Using modern AI and digital infrastructure, I've been working on gathering and organizing as much information as possible about Hindu Dharma and our heritage — bringing thousands of books, billions of shlokas, and multi-language wisdom into one accessible place.
            </p>
          </motion.div>

          <div className="text-center my-8 text-cosmic-gold/40 text-xl tracking-[0.3em]">ॐ</div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-xl font-semibold text-ink mb-4 pb-2 border-b-2 border-border flex items-center gap-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-vermillion"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
              My Greatest Inspiration: Adi Guru Shankaracharya
            </h2>

            <p className="text-ink leading-relaxed mb-5 text-[15px]">
              My deepest motivation comes from the life and works of{' '}
              <strong className="text-vermillion">Adi Guru Shankaracharya</strong>. His unmatched intellect, his profound philosophies, and his sacred creations (like the <em>Soundarya Lahari</em> and <em>Nirvana Shatakam</em>) have transformed how humanity understands consciousness.
            </p>

            <div className="my-6 p-5 border-l-4 border-vermillion bg-surface rounded-r-lg italic text-ink-muted text-[15px] leading-relaxed">
              I truly believe that every single person should read at least once in their life about Adi Guru Shankaracharya and explore the sacred texts written by him. They are an experience that awakens the soul.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-xl font-semibold text-ink mb-4 pb-2 border-b-2 border-border flex items-center gap-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-vermillion"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
              What Our Culture Teaches Us
            </h2>

            <p className="text-ink leading-relaxed mb-5 text-[15px]">
              Our culture doesn't just teach us prayers; it teaches us how to live in complete harmony with the universe. It teaches us to protect nature, to respect every living being, and to see divinity everywhere — because even a small piece of stone can be seen as <em>Shankar</em>, and every single being carries the spark of Lord Vishnu.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-xl font-semibold text-ink mb-4 pb-2 border-b-2 border-border flex items-center gap-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-vermillion"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              A Note on Open Source and Gratitude
            </h2>

            <p className="text-ink leading-relaxed mb-5 text-[15px]">
              Before you explore this platform, I want to share a humble note. All the data available on this site is compiled from what is openly available on the internet and open-source networks. It is created purely out of a desire to learn, organize, and spread the knowledge of Sanatan Sanskriti — with absolutely no intention to hurt anyone's sentiments or claim credit for other people's work.
            </p>

            <p className="text-ink leading-relaxed mb-5 text-[15px]">
              To ensure credit goes where it is truly due, all YouTube videos featured on this site link directly to the original content creators' pages. We are merely students trying to learn and share.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="py-12 px-4 bg-surface-warm border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-ink-muted italic text-[15px] mb-6 leading-relaxed">
              Thank you for standing at the crossroads of ancient eternity and digital progress to keep our heritage alive.
            </p>

            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="px-4 py-1.5 rounded-full bg-surface border border-border text-ink-muted text-[13px] font-medium">
                🇮🇳 Bharat Mata ki Jai!
              </span>
              <span className="px-4 py-1.5 rounded-full bg-surface border border-border text-ink-muted text-[13px] font-medium">
                Vande Mataram!
              </span>
              <span className="px-4 py-1.5 rounded-full bg-surface border border-border text-ink-muted text-[13px] font-medium">
                Adi Guru Shankaracharya ki Jai!
              </span>
              <span className="px-4 py-1.5 rounded-full bg-surface border border-border text-ink-muted text-[13px] font-medium">
                Sadhu Santo ki Jai!
              </span>
            </div>

            <p className="text-ink-faint text-sm leading-relaxed max-w-xl mx-auto">
              May universal consciousness awaken in every living heart, may unconditional love ignite our actions, and may we possess the fierce clarity to elevate our society, protect our nature, and build a greater nation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative bg-cosmic-dark text-cosmic-glow/70 py-12 px-4">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <DharmaWheel size={32} spinning={true} color="#C9A84C" />
          </div>
          <p className="font-display text-cosmic-glow text-lg font-semibold">
            {t('sanatanSanskriti', language)}
          </p>
          <p className="text-cosmic-glow/50 text-sm mt-1">
            {t('footerTagline', language)}
          </p>
          <p className="font-devanagari text-cosmic-gold/50 text-xs mt-2">
            ॥ मैं समय हूँ — कालोऽस्मि लोकक्षयकृत्प्रवृद्धोहम् ॥
          </p>
          <div className="my-4 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-cosmic-gold/20" />
            <span className="text-cosmic-gold/40 text-xs">✦</span>
            <div className="h-px w-16 bg-cosmic-gold/20" />
          </div>
          <p className="text-cosmic-gold/40 text-xs font-devanagari">
            {t('footerShloka', language)}
          </p>
          <p className="text-cosmic-glow/30 text-[11px] mt-2 italic">
            {t('footerShlokaEn', language)}
          </p>
        </div>
      </footer>
    </div>
  );
}