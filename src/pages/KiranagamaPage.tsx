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

export default function KiranaAgamaPage({ language }: { language: string }) {
  const { pageContent, isReady, contentRef } = usePageContent();
  const [highlightedLine, setHighlightedLine] = useState<number>(-1);

  const toc = [
    { id: 'intro', label: 'Introduction & Provenance' },
    { id: 'mysticism', label: 'Mysticism & Yogic Practice' },
    { id: 'yoga', label: 'The Yoga System' },
    { id: 'kundalini', label: 'Kuṇḍalinī & The Subtle Body' },
    { id: 'upagamas', label: 'The Twelve Upāgamas' },
    { id: 'verses', label: 'Core Verses' },
    { id: 'conclusion', label: 'Conclusion' },
  ];

  return (
    <div className="pt-6 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <div className="flex justify-center mb-4"><DharmaWheel size={60} spinning={true} color="#C24D2B" /></div>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-ink">Kiraṇa Āgama</h1>
          <p className="font-devanagari text-2xl text-vermillion mt-2">किरणागम</p>
          <p className="text-ink-muted mt-2 text-lg">The Twenty-Seventh of the Twenty-Eight Primary Shaiva Āgamas</p>
          <p className="font-devanagari text-ink-faint text-sm mt-1">अष्टाविंशति शैवागमेषु सप्तविंशतितमः</p>
        </motion.div>

        <div className="mb-8">
          {isReady && pageContent ? (
            <AudioPlayer
              text={pageContent}
              language={language}
              title="किरणागम — Complete Page Audio Narration"
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
            <p>The <strong>Kiraṇa Āgama</strong> (किरणागम) occupies the <strong>twenty-seventh position</strong> among the twenty-eight primary Shaiva Āgamas. It belongs to the <strong>Rudrabheda</strong> group, sharing the dual-nondual philosophical orientation of Shaiva Siddhānta. The term "Kiraṇa" means "ray of light" or "beam" — signifying that this scripture radiates the illuminating wisdom of Shiva into the darkness of spiritual ignorance, much like the sun's rays dispel the night.</p>

            <p>In the Kāmikāgama's celebrated metaphor where each Āgama corresponds to a part of Shiva's divine form, the Kiraṇa Āgama is identified with the <strong>ornaments made of gems</strong> (maṇi-bhūṣaṇa) that adorn the Lord. Just as precious jewels catch and reflect light in myriad colors, this Āgama refracts the singular light of Shiva-consciousness into the many-hued practices and insights that guide the soul toward liberation.</p>

            <p>The Kiraṇa Āgama is distinguished by its profound emphasis on <strong>mysticism and yogic practices</strong>. While it acknowledges and respects the ritual dimension of Shaiva practice, its primary concern is the direct, experiential realization of Shiva through systematic inner discipline. It is therefore especially cherished by yogis and contemplatives who seek the path of inner transformation.</p>

            <Verse
              sanskrit="किरणं नाम तत् शास्त्रं योगमार्ग प्रदर्शकम् ।
शिवज्ञान प्रकाशाय मलानां हरणाय च ॥"
              transliteration="Kiraṇaṃ nāma tat śāstraṃ yoga-mārga pradarśakam |
Śiva-jñāna prakāśāya malānāṃ haraṇāya ca ||"
              meaning="The Kiraṇa is that scripture which reveals the path of yoga. It illuminates the knowledge of Shiva and removes the impurities."
            />
          </Section>

          <SectionDivider className="my-8" />

          <Section id="mysticism" title="2. Mysticism & The Awakening of Divine Consciousness" hindiTitle="२. रहस्यवाद एवं दिव्य चेतना प्रबोध">
            <p>The mysticism of the Kiraṇa Āgama is not speculative or abstract. It is a <strong>practical mysticism</strong> — a disciplined approach to expanding consciousness until the individual soul recognizes its identity with the universal Shiva-nature. The text teaches that Shiva is not a distant deity to be worshipped from afar, but the very essence of one's own being, temporarily obscured by the three malas (impurities).</p>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">The Threefold Process of Awakening</h4>
            <p>The Kiraṇa describes a threefold process through which divine consciousness is awakened:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Śuddhi</strong> (शुद्धि) — Purification: The systematic cleansing of the body, energy, and mind through ritual, breath control, and ethical discipline</li>
              <li><strong>Bodha</strong> (बोध) — Awakening: The dawning of recognition that one's true nature is Shiva, not the limited ego-personality</li>
              <li><strong>Sāyujya</strong> (सायुज्य) — Union: The stabilization of this recognition into a permanent state of Shiva-consciousness, where all distinctions between worshipper and worshipped dissolve</li>
            </ul>

            <p className="mt-4">This process is not instantaneous for most practitioners. It requires sustained effort (sādhana), guidance from a qualified teacher (guru), and above all, the grace (anugraha) of Shiva, which is the ultimate cause of liberation.</p>
          </Section>

          <SectionDivider className="my-8" />

          <Section id="yoga" title="3. The Yoga System of Kiraṇa Āgama" hindiTitle="३. किरणागमीय योग पद्धति">
            <p>The Kiraṇa Āgama presents a comprehensive system of yoga adapted to the Shaiva theological framework. While it shares terminology with Patañjali's classical Aṣṭāṅga Yoga, its interpretation and emphasis are distinctively Shaiva.</p>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">A. Aṣṭāṅga Yoga in Shaiva Context</h4>
            <ol className="list-decimal pl-6 space-y-2 mt-2">
              <li><strong>Yama</strong> — Ethical foundations including ahiṃsā (non-harm), satya (truth), asteya (non-stealing), brahmacarya (continence), and aparigraha (non-possessiveness), all oriented toward surrender to Shiva</li>
              <li><strong>Niyama</strong> — Observances including śauca (purity), saṃtoṣa (contentment), tapas (austerity), svādhyāya (study of scriptures), and īśvara-praṇidhāna (complete surrender to Shiva)</li>
              <li><strong>Āsana</strong> — Stable seated postures that allow the body to become a worthy vessel for divine presence</li>
              <li><strong>Prāṇāyāma</strong> — Breath control as a means of regulating the life-force (prāṇa) and preparing the subtle body for higher practices</li>
              <li><strong>Pratyāhāra</strong> — Withdrawal of the senses from external objects, turning the mind's attention inward toward the Self</li>
              <li><strong>Dhāraṇā</strong> — Concentration on a chosen divine form, mantra, or subtle center, gathering the scattered mind into one-pointed focus</li>
              <li><strong>Dhyāna</strong> — Sustained meditation where the distinction between meditator and object of meditation begins to thin</li>
              <li><strong>Samādhi</strong> — Perfect absorption in Shiva-consciousness, where all duality is transcended and only the One remains</li>
            </ol>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">B. The Role of Mantra</h4>
            <p>In the Kiraṇa Āgama, mantra is not merely a verbal formula but a <strong>condensed form of divine energy</strong>. The recitation (japa) and contemplation (manana) of mantras — particularly the Pañcākṣara (Oṃ Namaḥ Śivāya) and more esoteric Shaiva mantras — is considered a direct means of attuning individual consciousness to the frequency of Shiva.</p>

            <p>The text prescribes precise methods for mantra-śuddhi (purification of mantra), mantra-caitanya (awakening the consciousness within the mantra), and ultimately mantra-sāmarasya (merging with the mantra until the reciter, the recitation, and the deity become one).</p>
          </Section>

          <SectionDivider className="my-8" />

          <Section id="kundalini" title="4. Kuṇḍalinī & The Subtle Body" hindiTitle="४. कुण्डलिनी एवं सूक्ष्म शरीर">
            <p>The Kiraṇa Āgama provides detailed teachings on the <strong>subtle body (sūkṣma-śarīra)</strong> and the system of energy centers (cakras) through which kuṇḍalinī śakti rises. This aspect of the text has made it especially valuable to practitioners of Tantric yoga and hatha yoga traditions.</p>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">The Cakra System</h4>
            <div className="space-y-3 mt-2">
              <div className="border-l-4 border-vermillion pl-4">
                <p className="font-semibold text-ink">Mūlādhāra Cakra</p>
                <p className="text-ink-light text-sm">The root center at the base of the spine, where kuṇḍalinī lies dormant as a coiled serpent. Associated with earth element and the sense of smell.</p>
              </div>
              <div className="border-l-4 border-turmeric pl-4">
                <p className="font-semibold text-ink">Svādhiṣṭhāna Cakra</p>
                <p className="text-ink-light text-sm">The sacral center, associated with water element, taste, and the fluid dimensions of consciousness.</p>
              </div>
              <div className="border-l-4 border-sage pl-4">
                <p className="font-semibold text-ink">Maṇipūra Cakra</p>
                <p className="text-ink-light text-sm">The navel center, seat of fire element and digestive power. The hub of vital energy (tejas) and personal will.</p>
              </div>
              <div className="border-l-4 border-lotus pl-4">
                <p className="font-semibold text-ink">Anāhata Cakra</p>
                <p className="text-ink-light text-sm">The heart center, associated with air element and touch. The dwelling place of the individual soul (jīvātman) and the threshold of spiritual awakening.</p>
              </div>
              <div className="border-l-4 border-indigo pl-4">
                <p className="font-semibold text-ink">Viśuddha Cakra</p>
                <p className="text-ink-light text-sm">The throat center, associated with ether element and hearing. The center of purification where lower energies are transmuted.</p>
              </div>
              <div className="border-l-4 border-violet pl-4">
                <p className="font-semibold text-ink">Ājñā Cakra</p>
                <p className="text-ink-light text-sm">The brow center, the command center of consciousness. The meeting point of individual and universal mind, where duality begins to dissolve.</p>
              </div>
              <div className="border-l-4 border-rose pl-4">
                <p className="font-semibold text-ink">Sahasrāra Cakra</p>
                <p className="text-ink-light text-sm">The thousand-petaled lotus at the crown of the head. The seat of Śiva, where kuṇḍalinī unites with the Supreme, and full enlightenment dawns.</p>
              </div>
            </div>

            <p className="mt-4">The Kiraṇa teaches that as kuṇḍalinī rises through each cakra, the practitioner must be prepared through proper purification and guidance. Premature or forceful awakening without preparation can lead to imbalance. The text therefore emphasizes gradual, systematic practice under the guidance of an accomplished guru.</p>
          </Section>

          <SectionDivider className="my-8" />

          <Section id="upagamas" title="5. The Twelve Upāgamas of Kiraṇa" hindiTitle="५. किरणागमस्य द्वादश उपागमाः">
            <p>The Kiraṇa Āgama is supported by twelve Upāgamas that elaborate upon its mystical and yogic teachings:</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
              {[
                { name: 'Kiraṇa', hindi: 'किरण' },
                { name: 'Kiraṇottara', hindi: 'किरणोत्तर' },
                { name: 'Pādma', hindi: 'पाद्म' },
                { name: 'Pādmottara', hindi: 'पाद्मोत्तर' },
                { name: 'Niḥśvāsa', hindi: 'निःश्वास' },
                { name: 'Niḥśvāsottara', hindi: 'निःश्वासोत्तर' },
                { name: 'Mohana', hindi: 'मोहन' },
                { name: 'Mohanottara', hindi: 'मोहनोत्तर' },
                { name: 'Vimala', hindi: 'विमल' },
                { name: 'Vimalottara', hindi: 'विमलोत्तर' },
                { name: 'Siddha', hindi: 'सिद्ध' },
                { name: 'Siddhottara', hindi: 'सिद्धोत्तर' },
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
          </Section>

          <SectionDivider className="my-8" />

          <Section id="verses" title="6. Core Verses & Sacred Teachings" hindiTitle="६. मूल श्लोक">
            <Verse
              sanskrit="किरणं नाम तत् शास्त्रं योगमार्ग प्रदर्शकम् ।
शिवज्ञान प्रकाशाय मलानां हरणाय च ॥"
              transliteration="Kiraṇaṃ nāma tat śāstraṃ yoga-mārga pradarśakam |
Śiva-jñāna prakāśāya malānāṃ haraṇāya ca ||"
              meaning="The Kiraṇa is that scripture which reveals the path of yoga. It illuminates the knowledge of Shiva and removes the impurities."
            />

            <Verse
              sanskrit="कुण्डलिनीं बोधयित्वा सहस्रारे शिवं यजेत् ।
तदा समाधिः सिद्धिः स्यात् जीवन्मुक्तिः प्रजायते ॥"
              transliteration="Kuṇḍalinīṃ bodhayitvā sahasrāre śivaṃ yajet |
Tadā samādhiḥ siddhiḥ syāt jīvanmuktiḥ prajāyate ||"
              meaning="Having awakened the kuṇḍalinī, one should worship Shiva in the sahasrāra. Then samādhi is attained, and liberation while living is born."
            />

            <Verse
              sanskrit="मन्त्रः शिवस्य सङ्कल्पः जपेनैव प्रबुध्यते ।
मन्त्रिणः शुद्धचैतन्यं तस्मान्मन्त्रं सदा जपेत् ॥"
              transliteration="Mantraḥ śivasya saṅkalpaḥ japenaiva prabudhyate |
Mantriṇaḥ śuddha-caitanyaṃ tasmānmantraṃ sadā japet ||"
              meaning="The mantra is Shiva's will; it is awakened through japa. The pure consciousness of the mantra-practitioner — therefore one should always recite the mantra."
            />
          </Section>

          <SectionDivider className="my-8" />

          <Section id="conclusion" title="7. Conclusion" hindiTitle="७. समापन">
            <p>The Kiraṇa Āgama is a radiant scripture in the truest sense — a ray of divine light piercing through the veils of ignorance to reveal the Shiva-nature that is the birthright of every soul. Its teachings on yoga, kuṇḍalinī, and mysticism provide a complete technology for inner transformation.</p>

            <p>Unlike philosophies that remain confined to the intellect, the Kiraṇa demands practice. It is a manual for the laboratory of consciousness, where the practitioner becomes both scientist and subject, experimenter and experiment. Through its systematic disciplines, the limited, bound soul (paśu) gradually recognizes itself as the free, omnipresent Lord (Pati).</p>

            <p>May the light of the Kiraṇa Āgama dispel the darkness of spiritual ignorance and lead all beings to the luminous recognition of their true nature as Shiva.</p>

            <div className="mt-6 p-4 bg-vermillion/5 border border-vermillion/20 rounded-lg">
              <p className="font-devanagari text-center text-ink font-semibold">ॐ नमः शिवाय</p>
              <p className="text-center text-ink-muted italic mt-2">Om Namah Shivaya</p>
            </div>
          </Section>

        </div>
      </div>
    </div>
  );
}