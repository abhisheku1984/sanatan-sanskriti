import { motion } from 'framer-motion';
import { useState } from 'react';
import AudioPlayer from '../components/AudioPlayer';
import SectionDivider from '../components/SectionDivider';
import DharmaWheel from '../components/DharmaWheel';
import { usePageContent } from '../lib/usePageContent';

function Section({ id, title, hindiTitle, children }: { id: string; title: string; hindiTitle: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-10">
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink mb-1">{title}</h2>
        <p className="font-devanagari text-vermillion text-base mb-4">{hindiTitle}</p>
        <div className="space-y-4 text-ink-light text-[15px] leading-relaxed">{children}</div>
      </motion.div>
    </section>
  );
}

function Verse({ sanskrit, transliteration, meaning }: { sanskrit: string; transliteration: string; meaning: string }) {
  return (
    <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
      <p className="font-devanagari text-ink text-base leading-relaxed mb-2">{sanskrit}</p>
      <p className="text-ink-muted text-sm italic mb-2">{transliteration}</p>
      <p className="text-ink-light text-sm">{meaning}</p>
    </div>
  );
}

export default function ParameshwaraAgamaPage({ language }: { language: string }) {
  const { pageContent, isReady, contentRef } = usePageContent();
  const [highlightedLine, setHighlightedLine] = useState<number>(-1);

  const toc = [
    { id: 'intro', label: 'Introduction & Provenance' },
    { id: 'cosmology', label: 'Cosmology & Creation' },
    { id: 'tattvas', label: 'The Tattva Doctrine' },
    { id: 'upagamas', label: 'The Twelve Upāgamas' },
    { id: 'ritual', label: 'Ritual Framework' },
    { id: 'verses', label: 'Core Verses' },
    { id: 'conclusion', label: 'Conclusion' },
  ];

  return (
    <div className="pt-6 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <div className="flex justify-center mb-4"><DharmaWheel size={60} spinning={true} color="#C24D2B" /></div>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-ink">Parameśvara Āgama</h1>
          <p className="font-devanagari text-2xl text-vermillion mt-2">परमेश्वरागम</p>
          <p className="text-ink-muted mt-2 text-lg">The Twenty-Sixth of the Twenty-Eight Primary Shaiva Āgamas</p>
          <p className="font-devanagari text-ink-faint text-sm mt-1">अष्टाविंशति शैवागमेषु षड्विंशतितमः</p>
        </motion.div>

        <div className="mb-8">
          {isReady && pageContent ? (
            <AudioPlayer
              text={pageContent}
              language={language}
              title="परमेश्वरागम — Complete Page Audio Narration"
              onLineRead={(lineIndex, text) => {
                setHighlightedLine(lineIndex);
              }}
            />
          ) : (
            <div className="text-center py-4 text-ink-muted">
              Preparing audio content...
            </div>
          )}
        </div>

        <div className="bg-surface border border-border rounded-xl p-5 mb-10">
          <h3 className="font-display text-sm font-semibold text-ink-faint uppercase tracking-wider mb-3">विषय-सूची — Table of Contents</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
            {toc.map((item, i) => (
              <a key={item.id} href={`#${item.id}`} className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm text-ink-muted hover:text-vermillion hover:bg-vermillion/5 transition-colors">
                <span className="text-vermillion/50 text-xs">{i + 1}.</span> {item.label}
              </a>
            ))}
          </div>
        </div>

        <div ref={contentRef}>

          <Section id="intro" title="1. Introduction & Scriptural Provenance" hindiTitle="१. प्रस्तावना एवं शास्त्रीय उत्पत्ति">
            <p>The <strong>Parameśvara Āgama</strong> (परमेश्वरागम) holds the <strong>twenty-sixth position</strong> among the twenty-eight primary Shaiva Āgamas. It belongs to the <strong>Rudrabheda</strong> group, which represents the dual-nondual (bhedābheda) philosophical orientation within Shaiva Siddhānta. The name "Parameśvara" signifies the Supreme Lord — the absolute, transcendent, yet immanent reality that is the source, sustenance, and dissolution of all cosmic manifestation.</p>

            <p>In the sacred metaphor of the Kāmikāgama, where each of the twenty-eight Āgamas is identified with a part of Lord Shiva's divine body, the Parameśvara Āgama is described as the <strong>ornamental chain</strong> (hāra) that adorns His form. This imagery conveys that this scripture is not merely an accessory but a vital, beautifying, and connecting element in the complete revelation of Shaiva wisdom.</p>

            <p>The Parameśvara Āgama is primarily concerned with <strong>creation (sṛṣṭi)</strong> and <strong>cosmology</strong>. It presents a systematic account of how the Supreme Shiva, through His sovereign will and divine power (Śakti), brings forth the entire universe from the unmanifest state into manifold manifestation. It is therefore indispensable for understanding the metaphysical architecture of Shaiva cosmology.</p>

            <Verse
              sanskrit="परमेश्वर उवाचेदं शास्त्रं सृष्टि विधायकम् ।
शिवतत्त्वात् प्रभवति विश्वं सर्वं चराचरम् ॥"
              transliteration="Parameśvara uvācedaṃ śāstraṃ sṛṣṭi vidhāyakam |
Śivatattvāt prabhavati viśvaṃ sarvaṃ carācaram ||"
              meaning="The Supreme Lord declared this scripture as the guide to creation. From the Shiva-tattva arises the entire universe, all that moves and does not move."
            />
          </Section>

          <SectionDivider className="my-8" />

          <Section id="cosmology" title="2. Cosmology & The Process of Creation" hindiTitle="२. सृष्टि विज्ञान एवं ब्रह्माण्ड विज्ञान">
            <p>The cosmological vision of the Parameśvara Āgama is both profound and systematic. It describes creation not as an act of fabrication from pre-existing material, but as a <strong>self-projection (ābhāsa)</strong> of consciousness — the Supreme Lord manifesting within Himself the entire panorama of existence without ever diminishing His own absolute nature.</p>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">A. The Five Acts of Shiva (Pañca-kṛtya)</h4>
            <p>The text elaborates upon the fivefold divine activity that constitutes the dynamic nature of Shiva:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Sṛṣṭi</strong> (सृष्टि) — Creation: The projection of the universe from the unmanifest source</li>
              <li><strong>Sthiti</strong> (स्थिति) — Preservation: The maintenance and sustenance of cosmic order</li>
              <li><strong>Saṃhāra</strong> (संहार) — Dissolution: The withdrawal of manifestation back into the source</li>
              <li><strong>Tirobhāva</strong> (तिरोभाव) — Concealment: The veiling of the soul's true nature through mala</li>
              <li><strong>Anugraha</strong> (अनुग्रह) — Grace: The revelation and bestowal of liberation through divine compassion</li>
            </ul>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">B. The Cosmic Evolution</h4>
            <p>The Parameśvara Āgama provides detailed descriptions of the sequential emanation of the tattvas. From the pure, undifferentiated Shiva-tattva, there proceeds the gradual unfolding of Śakti, Sadāśiva, Īśvara, and the subsequent categories of existence, culminating in the material elements (mahābhūtas) that constitute the physical universe.</p>

            <p>This cosmological scheme is not merely theoretical speculation. It serves as a <strong>contemplative map</strong> through which the practitioner can trace the path of return from manifestation to the source — a reverse journey of involution (saṃhāra) that mirrors the outward journey of evolution (sṛṣṭi).</p>
          </Section>

          <SectionDivider className="my-8" />

          <Section id="tattvas" title="3. The Tattva Doctrine in Parameśvara" hindiTitle="३. परमेश्वरागमे तत्त्व सिद्धान्तः">
            <p>While all Shaiva Āgamas acknowledge the thirty-six tattvas, the Parameśvara Āgama gives particular emphasis to the <strong>upper, pure tattvas (śuddha-tattvas)</strong> — those categories that lie above māyā and represent the divine, liberated dimensions of reality.</p>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">The Pure Tattvas (Śuddha-tattvas)</h4>
            <div className="space-y-3 mt-2">
              <div className="border-l-4 border-vermillion pl-4">
                <p className="font-semibold text-ink">Śiva-tattva</p>
                <p className="text-ink-light text-sm">The absolutely pure consciousness, the ground of all being, transcendent and without limitation. The source from which all subsequent manifestation flows.</p>
              </div>
              <div className="border-l-4 border-turmeric pl-4">
                <p className="font-semibold text-ink">Śakti-tattva</p>
                <p className="text-ink-light text-sm">The dynamic power of Shiva, identical in essence yet distinguished as the energy of manifestation. The creative pulsation (spanda) that makes appearance possible.</p>
              </div>
              <div className="border-l-4 border-sage pl-4">
                <p className="font-semibold text-ink">Sadāśiva-tattva</p>
                <p className="text-ink-light text-sm">The first vibration of I-consciousness (aham), where the distinction between subject and object first becomes potential yet remains undifferentiated.</p>
              </div>
              <div className="border-l-4 border-lotus pl-4">
                <p className="font-semibold text-ink">Īśvara-tattva</p>
                <p className="text-ink-light text-sm">The sovereign Lordship, where the "I am this" (aham idam) experience becomes fully articulated. The cosmic architect who holds the blueprint of creation.</p>
              </div>
              <div className="border-l-4 border-indigo pl-4">
                <p className="font-semibold text-ink">Śuddha-vidyā-tattva</p>
                <p className="text-ink-light text-sm">Pure knowledge, where the distinction between subject and object is fully manifest yet both are experienced as one with Shiva. The threshold between pure and impure creation.</p>
              </div>
            </div>

            <p className="mt-4">The Parameśvara Āgama teaches that true knowledge consists in recognizing these pure tattvas as one's own essential nature, beyond the coverings of māyā and the three malas.</p>
          </Section>

          <SectionDivider className="my-8" />

          <Section id="upagamas" title="4. The Twelve Upāgamas of Parameśvara" hindiTitle="४. परमेश्वरागमस्य द्वादश उपागमाः">
            <p>Like many of the primary Āgamas, the Parameśvara has twelve subsidiary texts known as <strong>Upāgamas</strong>. These expand upon specific themes introduced in the parent text and provide more detailed instructions for ritual practice, meditation, and philosophical contemplation.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
              {[
                { name: 'Parameśvara', hindi: 'परमेश्वर' },
                { name: 'Parameśvarottara', hindi: 'परमेश्वरोत्तर' },
                { name: 'Raurava', hindi: 'रौरव' },
                { name: 'Rauravottara', hindi: 'रौरवोत्तर' },
                { name: 'Kāla', hindi: 'काल' },
                { name: 'Kalottara', hindi: 'कालोत्तर' },
                { name: 'Sukṣma', hindi: 'सूक्ष्म' },
                { name: 'Sukṣmottara', hindi: 'सूक्ष्मोत्तर' },
                { name: 'Vāma', hindi: 'वाम' },
                { name: 'Vāmottara', hindi: 'वामोत्तर' },
                { name: 'Bīja', hindi: 'बीज' },
                { name: 'Bījottara', hindi: 'बीजोत्तर' },
              ].map((p, i) => (
                <div key={p.name} className="bg-surface border border-border rounded-lg p-3 flex items-center gap-3">
                  <span className="text-vermillion/50 text-xs font-mono w-5">{i + 1}.</span>
                  <div>
                    <p className="font-display font-semibold text-sm text-ink">{p.name}</p>
                    <p className="font-devanagari text-xs text-ink-muted">{p.hindi}</p>
                  </div>
                </div>
              ))}
            </div>

            <p>These Upāgamas collectively ensure that no aspect of Shaiva practice — from the construction of temples to the most subtle meditative states — remains without authoritative guidance.</p>
          </Section>

          <SectionDivider className="my-8" />

          <Section id="ritual" title="5. Ritual Framework & Temple Architecture" hindiTitle="५. क्रिया-कलाप एवं देवालय विज्ञान">
            <p>The Parameśvara Āgama, despite its primary focus on cosmology, contains substantial sections on ritual practice. It teaches that ritual is not mere external performance but a <strong>participation in the cosmic creative process</strong>. When the devotee performs worship (pūjā), they are re-enacting, in microcosm, the same creative unfolding that Shiva performs at the cosmic level.</p>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">Key Ritual Elements</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Maṇḍala-nyāsa</strong> — The placement of divine energies within the sacred geometric diagram, establishing the cosmos in miniature</li>
              <li><strong>Mūrti-lakṣaṇa</strong> — Detailed specifications for the creation of divine images, ensuring they become fit vessels for divine presence</li>
              <li><strong>Prāṇa-pratiṣṭhā</strong> — The ceremony of life-installation, awakening the deity's presence within the consecrated image</li>
              <li><strong>Homavidhi</strong> — The science of sacred fire offerings, mediating between human aspiration and divine grace</li>
            </ul>

            <p className="mt-4">The text emphasizes that every ritual act must be performed with <strong>complete mental presence (sādhāraṇa-bhāva)</strong> and <strong>devotional attitude (bhakti)</strong>. Without internal participation, external action remains incomplete.</p>
          </Section>

          <SectionDivider className="my-8" />

          <Section id="verses" title="6. Core Verses & Sacred Teachings" hindiTitle="६. मूल श्लोक">
            <Verse
              sanskrit="परमेश्वर उवाचेदं शास्त्रं सृष्टि विधायकम् ।
शिवतत्त्वात् प्रभवति विश्वं सर्वं चराचरम् ॥"
              transliteration="Parameśvara uvācedaṃ śāstraṃ sṛṣṭi vidhāyakam |
Śivatattvāt prabhavati viśvaṃ sarvaṃ carācaram ||"
              meaning="The Supreme Lord declared this scripture as the guide to creation. From the Shiva-tattva arises the entire universe, all that moves and does not move."
            />

            <Verse
              sanskrit="पञ्चकृत्यं शिवस्यैतत् सृष्टिस्थितिलयादिकम् ।
तिरोभावानुग्रहेण सह सृष्टिः प्रवर्तते ॥"
              transliteration="Pañcakṛtyaṃ śivasyaitat sṛṣṭisthiti-layādikam |
Tirobhāvānugraheṇa saha sṛṣṭiḥ pravartate ||"
              meaning="These five acts of Shiva — creation, preservation, dissolution, concealment, and grace — together constitute the continuous flow of cosmic manifestation."
            />

            <Verse
              sanskrit="शुद्धतत्त्वे स्थितो योगी मलत्रय विनिर्मुकः ।
परमेश्वर सायुज्यं प्राप्नोति नात्र संशयः ॥"
              transliteration="Śuddhatattve sthito yogī malatraya vinirmukaḥ |
Parameśvara sāyujyaṃ prāpnoti nātra saṃśayaḥ ||"
              meaning="The yogi who abides in the pure tattvas, freed from the three impurities, attains union with the Supreme Lord — of this there is no doubt."
            />
          </Section>

          <SectionDivider className="my-8" />

          <Section id="conclusion" title="7. Conclusion" hindiTitle="७. समापन">
            <p>The Parameśvara Āgama stands as a majestic testament to the Shaiva vision of creation — a vision in which the universe is not a fallen realm to be escaped, but a divine manifestation to be understood, honored, and ultimately recognized as none other than Shiva Himself.</p>

            <p>By studying this Āgama, the seeker gains not only intellectual understanding of cosmological principles but also a practical path for aligning individual consciousness with the cosmic creative process. The ritual, meditation, and philosophical contemplation prescribed herein are all oriented toward a single goal: the recognition that the individual soul (paśu) is, in its essence, none other than the Supreme Lord (Pati).</p>

            <p>May the wisdom of the Parameśvara Āgama illuminate the path of all sincere seekers toward the realization of their true nature as Parameśvara — the Supreme Lord of all.</p>

            <div className="mt-6 p-4 bg-vermillion/5 border border-vermillion/20 rounded-lg">
              <p className="font-devanagari text-center text-ink font-semibold">ॐ नमः परमेश्वराय</p>
              <p className="text-center text-ink-muted italic mt-2">Om Namah Parameśvarāya</p>
            </div>
          </Section>

        </div>
      </div>
    </div>
  );
}