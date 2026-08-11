import { motion } from 'framer-motion';
import { useState } from 'react';
import AudioPlayer from '../components/AudioPlayer';
import SectionDivider from '../components/SectionDivider';
import DharmaWheel from '../components/DharmaWheel';
import TattvaTable from '../components/TattvaTable';
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

export default function MatangagamaPage({ language }: { language: string }) {
  const { pageContent, isReady, contentRef } = usePageContent();
  const [highlightedLine, setHighlightedLine] = useState<number>(-1);

  const toc = [
    { id: 'intro', label: 'Introduction & Provenance' },
    { id: 'chatushpada', label: 'The Fourfold Path' },
    { id: 'kriya', label: '— Kriya Pada' },
    { id: 'charya', label: '— Charya Pada' },
    { id: 'yoga', label: '— Yoga Pada' },
    { id: 'jnana', label: '— Jnana / Vidya Pada' },
    { id: 'verses', label: 'Core Verses' },
    { id: 'tattvas', label: 'The 36 Tattvas' },
    { id: 'conclusion', label: 'Conclusion & Access' },
  ];

  return (
    <div className="pt-6 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <div className="flex justify-center mb-4"><DharmaWheel size={60} spinning={true} color="#C24D2B" /></div>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-ink">Matangagama</h1>
          <p className="font-devanagari text-2xl text-vermillion mt-2">मातङ्गागम</p>
          <p className="text-ink-muted mt-2 text-lg">The 21st of the Twenty-Eight Primary Shaiva Agamas</p>
          <p className="font-devanagari text-ink-faint text-sm mt-1">अष्टाविंशति शैवागमेषु २१तमः — अनुग्रह, प्रकाशन और मुक्ति की शक्ति</p>
        </motion.div>

        <div className="mb-8">
          {isReady && pageContent ? (
            <AudioPlayer
              text={pageContent}
              language={language}
              title="मातङ्गागम — Complete Page Audio Narration"
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
            <p>The <strong>Matanga Agama</strong> (मातङ्ग आगम) occupies the <strong>21st position</strong> among the twenty-eight primary Shaiva Agamas. It belongs to the <strong>Anugraha</strong> (अनुग्रह) group — the grace-bestowing category of scriptures. The Matanga Agama is renowned as the foundational text for the Siddhanta school of Shaivism. It presents the most systematic exposition of the 36 Tattvas and establishes the theological framework that became the bedrock of temple ritual and priestly training across South India.</p>

            <Verse
              sanskrit="मातङ्गादनुग्रहः स्यान्मातङ्गाज्ज्ञानमाप्नुयात् ।
मातङ्गागमसम्प्रोक्तं मुक्तिदं परमं पदम् ॥"
              transliteration="Mātaṅgād anugrahaḥ syān mātaṅgāj jñānam āpnuyāt |
Mātaṅgāgamasamproktaṃ muktidaṃ paramaṃ padam ||"
              meaning="From Matanga comes grace, from Matanga one attains knowledge. The Matanga Agama proclaims the supreme state that grants liberation."
            />

            <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">Origin from the Ishana Face</h3>
            <p>The Matanga Agama emanates from <strong>Ishana</strong> (ईशान), the zenith-facing aspect of Sadashiva, representing <strong>grace, revelation, and the power of liberation</strong>. Associated with the element of <strong>Ether (आकाश)</strong>, the color <strong>crystal-white</strong>, and the grace-bestowing function.</p>

            <p>The original scope is <strong>one lakh (1,00,000) shlokas</strong>.</p>

            <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">Cosmic Symbolism: Placement at the Hands (हस्त)</h3>
            <p>In the cosmic body of Sadashiva, the Matanga Agama is assigned to the <strong>Hands (हस्त)</strong>:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Center of Anugraha:</strong> The hands represent the focal point from which the power of अनुग्रह radiates throughout the cosmos.</li>
              <li><strong>Divine Connection:</strong> This placement signifies the intimate connection between the 21th Agama and the grace-bestowing energy of Shiva.</li>
              <li><strong>Sacred Function:</strong> Through the hands, the practitioner learns to channel the ether-element wisdom that leads to spiritual grace-bestowing realization.</li>
            </ul>

            <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">The Ten Upagamas (उपागम)</h3>
            <div className="overflow-x-auto"><table className="w-full text-sm border-collapse mt-2">
              <thead><tr className="border-b-2 border-border"><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">#</th><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">Upagama</th><th className="text-left py-2 pr-3 text-ink-faint text-[10px] uppercase tracking-wider">Sanskrit</th><th className="text-left py-2 text-ink-faint text-[10px] uppercase tracking-wider">Primary Focus</th></tr></thead>
              <tbody>
                <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">1</td><td className="py-2 pr-3 font-medium">Matanga-tara</td><td className="py-2 pr-3 font-devanagari text-ink-muted">मातङ्गतर</td><td className="py-2 text-ink-light">Transcendence of Matanga; surpassing grace</td></tr>
                <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">2</td><td className="py-2 pr-3 font-medium">Matanga-sara</td><td className="py-2 pr-3 font-devanagari text-ink-muted">मातङ्गसार</td><td className="py-2 text-ink-light">Essence of Matanga; condensed grace theology</td></tr>
                <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">3</td><td className="py-2 pr-3 font-medium">Maha-matanga</td><td className="py-2 pr-3 font-devanagari text-ink-muted">महामातङ्ग</td><td className="py-2 text-ink-light">Great Matanga; expanded ritual protocols</td></tr>
                <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">4</td><td className="py-2 pr-3 font-medium">Matanga-bheda</td><td className="py-2 pr-3 font-devanagari text-ink-muted">मातङ्गभेद</td><td className="py-2 text-ink-light">Distinctions within Matanga doctrine</td></tr>
                <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">5</td><td className="py-2 pr-3 font-medium">Matanga-prakasha</td><td className="py-2 pr-3 font-devanagari text-ink-muted">मातङ्गप्रकाश</td><td className="py-2 text-ink-light">Illumination through Matanga wisdom</td></tr>
                <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">6</td><td className="py-2 pr-3 font-medium">Matanga-vimarsha</td><td className="py-2 pr-3 font-devanagari text-ink-muted">मातङ्गविमर्श</td><td className="py-2 text-ink-light">Reflective contemplation on grace</td></tr>
                <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">7</td><td className="py-2 pr-3 font-medium">Matanga-nanda</td><td className="py-2 pr-3 font-devanagari text-ink-muted">मातङ्गनन्द</td><td className="py-2 text-ink-light">Bliss-awakening through Matanga devotion</td></tr>
                <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">8</td><td className="py-2 pr-3 font-medium">Matanga-moksha</td><td className="py-2 pr-3 font-devanagari text-ink-muted">मातङ्गमोक्ष</td><td className="py-2 text-ink-light">Liberation pathway through Matanga realization</td></tr>
                <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">9</td><td className="py-2 pr-3 font-medium">Matanga-tattva</td><td className="py-2 pr-3 font-devanagari text-ink-muted">मातङ्गतत्त्व</td><td className="py-2 text-ink-light">Tattva exposition according to Matanga</td></tr>
                <tr className="border-b border-border-light"><td className="py-2 pr-3 text-vermillion font-bold">10</td><td className="py-2 pr-3 font-medium">Matanga-samhita</td><td className="py-2 pr-3 font-devanagari text-ink-muted">मातङ्गसंहिता</td><td className="py-2 text-ink-light">Compendium of Matanga ritual law</td></tr>
              </tbody>
            </table></div>
          </Section>

          <SectionDivider className="my-8" />

          <Section id="chatushpada" title="2. The Fourfold Path (Chatuṣpāda System)" hindiTitle="२. चतुष्पाद प्रणाली — चार मार्गों का विस्तृत विवेचन">
            <p>The Matanga Agama is structured around the <strong>Chatuṣpāda</strong> (चतुष्पाद):</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-4">
              {[
                { name: 'Kriyā Pāda', hindi: 'क्रिया पाद', desc: 'Ritual Action', color: 'bg-vermillion/8 text-vermillion' },
                { name: 'Caryā Pāda', hindi: 'चर्या पाद', desc: 'Daily Conduct', color: 'bg-turmeric/8 text-turmeric-deep' },
                { name: 'Yoga Pāda', hindi: 'योग पाद', desc: 'Yogic Practice', color: 'bg-sage/8 text-sage' },
                { name: 'Jñāna Pāda', hindi: 'ज्ञान पाद', desc: 'Knowledge', color: 'bg-lotus/8 text-lotus' },
              ].map(p => (
                <div key={p.name} className={`rounded-lg p-3 text-center ${p.color}`}>
                  <p className="font-display font-bold text-sm">{p.name}</p>
                  <p className="font-devanagari text-xs mt-0.5">{p.hindi}</p>
                  <p className="text-[11px] mt-1 opacity-70">{p.desc}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section id="kriya" title="2.1 Kriyā Pāda — The Path of Sacred Action" hindiTitle="२.१ क्रिया पाद — पवित्र कर्म का मार्ग">
            <p>The Kriyā Pāda of the Matanga Agama is the most authoritative source for Shaiva temple architecture (ālaya-nirmāṇa) and priestly ritual (ācārya-lakṣaṇa). It establishes the rules for daily worship (nitya-pūjā), festival ceremonies (utsava), and consecration rituals (prāṇa-pratiṣṭhā).</p>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">A. Ritual Worship (Pūjā)</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Matanga-Pūjā</strong> — Worship methodology specific to the 21th Agama</li>
              <li><strong>Ishana-nyāsa</strong> — Placement of divine energies associated with the Ishana face upon the body</li>
              <li><strong>आकाश-tattva-arcana</strong> — Worship through the element of Ether</li>
              <li><strong>अनुग्रह-homa</strong> — Fire sacrifice aligned with the Anugraha function</li>
            </ul>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">B. Temple Architecture (Ālaya-Nirmāṇa)</h4>
            <p>Temples designed according to the Matanga Agama incorporate architectural principles that reflect the hands placement and the ईशान face orientation. The vimāna rises in configurations that symbolize the descent of अनुग्रह energy from the Ishana face.</p>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">C. Iconography</h4>
            <p>The Matanga Agama prescribes sacred icons that embody the अनुग्रह power of Shiva. The deity is depicted with attributes that signify the grace-bestowing function — gestures of blessing, weapons of ignorance-removal, and ornaments of divine sovereignty.</p>
          </Section>

          <Section id="charya" title="2.2 Caryā Pāda — The Path of Disciplined Conduct" hindiTitle="२.२ चर्या पाद — अनुशासित आचरण का मार्ग">
            <p>The Caryā Pada emphasizes the conduct of the Śaiva ācārya (preceptor). It prescribes the guru-śiṣya relationship, the transmission of mantra, and the ethical obligations of those who minister to the divine.</p>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">Daily Worship Protocol (Matanga-Nitya-Krama)</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Brāhma Muhūrta</strong> — Rising before sunrise; meditation on the Ishana aspect</li>
              <li><strong>अनुग्रह-smaraṇa</strong> — Constant remembrance of Shiva's grace-bestowing power</li>
              <li><strong>Tri-sandhyā Pūjā</strong> — Twilight prayers oriented toward the Ishana direction</li>
              <li><strong>Matanga-praṇāma</strong> — Prostration in recognition of the 21th Agama's grace</li>
            </ul>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">Vrata & Festival Calendar</h4>
            <p>The Matanga Agama prescribes special observances during auspicious conjunctions and festivals honoring Shiva's anugraha aspect.</p>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">Anugraha-sevā (Universal Service)</h4>
            <p>Service to all beings as service to Shiva — recognizing every creature as a recipient of divine grace-bestowing energy.</p>
          </Section>

          <Section id="yoga" title="2.3 Yoga Pāda — The Path of Inner Union" hindiTitle="२.३ योग पाद — आन्तरिक एकत्व का मार्ग">
            <p>The Yoga Pada presents Kuṇḍalinī-oriented practices that awaken the grace (śaktipāta) latent in the soul. It describes the ascent of divine energy through the six cakras, culminating in the thousand-petaled sahasrāra.</p>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">Aṣṭāṅga Yoga (Matanga Emphasis)</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Yama-Niyama</strong> — Ethical foundations specific to the Anugraha path</li>
              <li><strong>Āsana</strong> — Postures that awaken the hands energy center</li>
              <li><strong>Prāṇāyāma</strong> — Breath control harmonized with the ether element</li>
              <li><strong>Pratyāhāra-Dhāraṇā-Dhyāna-Samādhi</strong> — Progressive interiorization leading to अनुग्रह realization</li>
            </ul>

            <Verse
              sanskrit="मातङ्गादनुग्रहः स्यान्मातङ्गाज्ज्ञानमाप्नुयात् ।
मातङ्गागमसम्प्रोक्तं मुक्तिदं परमं पदम् ॥"
              transliteration="Mātaṅgād anugrahaḥ syān mātaṅgāj jñānam āpnuyāt |
Mātaṅgāgamasamproktaṃ muktidaṃ paramaṃ padam ||"
              meaning="From Matanga comes grace, from Matanga one attains knowledge. The Matanga Agama proclaims the supreme state that grants liberation."
            />
          </Section>

          <Section id="jnana" title="2.4 Jñāna / Vidyā Pāda — The Path of Liberating Knowledge" hindiTitle="२.४ ज्ञान / विद्या पाद — मुक्तिदायक ज्ञान का मार्ग">
            <p>The Jñāna Pada presents the complete 36-Tattva metaphysics, from Śiva-tattva down to pṛthivī-tattva, establishing the ontological map of creation that all subsequent Siddhānta texts reference.</p>

            <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
              <h5 className="font-display font-bold text-vermillion mb-2">I. Pati (पति) — The अनुग्रह Lord</h5>
              <p className="text-ink-light text-sm">Shiva as the supreme अनुग्रह-mūrti — the Lord whose grace-bestowing power operates through the Ishana face. His oneness encompasses all functions, yet He manifests distinctly as the Anugraha aspect for the benefit of souls.</p>
            </div>

            <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
              <h5 className="font-display font-bold text-turmeric-deep mb-2">II. Paśu (पशु) — The Soul in अनुग्रह</h5>
              <p className="text-ink-light text-sm">The individual soul's journey through the Anugraha phase of cosmic existence. The soul, though bound by mala, is inherently capable of receiving grace and awakening to its true nature as Shiva.</p>
            </div>

            <div className="bg-parchment-warm border border-border rounded-xl p-5 my-4">
              <h5 className="font-display font-bold text-sage mb-2">III. Pāśa (पाश) — The Bonds of अनुग्रह</h5>
              <ul className="list-disc pl-6 space-y-2 text-ink-light text-sm">
                <li><strong>Āṇava Mala</strong> — The causal ignorance specific to the Anugraha condition; the feeling of separation from grace</li>
                <li><strong>Māyā Mala</strong> — The substance of limitation through ether element; the illusion that grace is distant</li>
                <li><strong>Kārma Mala</strong> — The residue of action binding the soul to grace-bestowing cycles; actions performed without awareness of grace</li>
              </ul>
            </div>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">Liberation: Matanga-sāyujya</h4>
            <p>The Matanga Agama describes liberation as <strong>Matanga-sāyujya</strong> — union with the अनुग्रह aspect of Shiva. The liberated soul becomes a vessel of grace, radiating the same divine light it has received.</p>
          </Section>

          <SectionDivider className="my-8" />

          <Section id="verses" title="3. Core Verses & Philosophical Highlights" hindiTitle="३. मुख्य श्लोक एवं दार्शनिक विशेषताएँ">
            <Verse
              sanskrit="मातङ्गादनुग्रहः स्यान्मातङ्गाज्ज्ञानमाप्नुयात् ।
मातङ्गागमसम्प्रोक्तं मुक्तिदं परमं पदम् ॥"
              transliteration="Mātaṅgād anugrahaḥ syān mātaṅgāj jñānam āpnuyāt |
Mātaṅgāgamasamproktaṃ muktidaṃ paramaṃ padam ||"
              meaning="From Matanga comes grace, from Matanga one attains knowledge. The Matanga Agama proclaims the supreme state that grants liberation."
            />

            <Verse
              sanskrit="हस्तस्थं मातङ्गमाख्यातं मातङ्गज्ञानदायकम् ।
मातङ्गेन विना मोक्षो न सिद्ध्यति कथञ्चन ॥"
              transliteration="Hastasthaṃ mātaṅgam ākhyātaṃ mātaṅgajñāna dāyakam |
Mātaṅgena vinā mokṣo na siddhyati kathañcana ||"
              meaning="The Matanga, proclaimed as established at the hands, grants Matanga-knowledge. Without Matanga, liberation is in no way accomplished."
            />
          </Section>

          <SectionDivider className="my-8" />

          <Section id="tattvas" title="4. The 36 Tattvas According to Matanga Agama" hindiTitle="४. मातङ्गागम के अनुसार ३६ तत्त्व">
            <p>The Matanga Agama presents the <strong>Ṣaṭtriṃśat Tattva</strong> as expressions of Shiva's अनुग्रह power. Each Tattva is understood through the lens of ether element and Ishana face wisdom. The descent from Śiva-tattva to Pṛthivī-tattva is viewed as the progressive veiling of grace, and the ascent as its revelation.</p>
            <TattvaTable />
          </Section>

          <SectionDivider className="my-8" />

          <Section id="conclusion" title="5. Conclusion & Accessibility" hindiTitle="५. उपसंहार एवं पहुँच">
            <h4 className="font-display font-semibold text-ink mt-2 mb-2">The Spirit of Matanga Agama</h4>
            <p>The Matanga Agama occupies a foundational position among the twenty-eight Shaiva Agamas. Its systematic exposition of the 36 Tattvas, detailed ritual protocols, and emphasis on guru-śiṣya transmission make it the cornerstone of Siddhānta Shaivism. Temples from Kashmir to Kanyakumari follow its architectural and ritual prescriptions.</p>

            <h4 className="font-display font-semibold text-ink mt-6 mb-2">Where to Access Primary Sources</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
              {[
                { name: 'French Institute of Indology (IFP), Pondicherry', desc: 'Houses critical editions and manuscript fragments of the Matanga Agama.', url: 'https://www.ifpindia.org' },
                { name: 'IGNCA (Indira Gandhi National Centre for the Arts)', desc: 'Digital repository with manuscript scans.', url: 'https://ignca.gov.in' },
                { name: 'Shaiva Agama Research Centre, Chennai', desc: 'References to Matanga Agama principles in priest training materials.', url: 'https://shaivam.org' },
                { name: 'Muktabodha Indological Research Institute', desc: 'Searchable database includes Matanga Agama-related manuscripts.', url: 'https://muktabodha.org' },
              ].map(s => (
                <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="block p-4 bg-surface border border-border rounded-lg hover:border-vermillion/30 transition-colors">
                  <p className="font-display font-semibold text-ink text-sm">{s.name}</p>
                  <p className="text-ink-faint text-[12px] mt-1 leading-relaxed">{s.desc}</p>
                </a>
              ))}
            </div>

            <Verse
              sanskrit="ॐ नमः शिवाय ।
मातङ्गागममाश्रित्य मातङ्गं ज्ञानमाप्नुयात् ।
पशुपाशविमुक्त्यर्थं शिवसायुज्यसिद्धये ॥"
              transliteration="Oṃ Namaḥ Śivāya | Mātaṅgāgamam āśritya mātaṅgaṃ jñānam āpnuyāt | Paśupāśavimuktyarthaṃ śivasāyujyasiddhaye ||"
              meaning="Om Namah Shivaya. Taking refuge in the Matanga Agama, one attains Matanga-knowledge — for liberation from the bonds of the Paśu, for the attainment of union with Shiva."
            />
          </Section>
        </div>
      </div>
    </div>
  );
}