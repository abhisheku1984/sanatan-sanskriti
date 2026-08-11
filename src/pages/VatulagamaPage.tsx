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

export default function VatulaAgamaPage({ language }: { language: string }) {
  const { pageContent, isReady, contentRef } = usePageContent();
  const [highlightedLine, setHighlightedLine] = useState<number>(-1);

  const toc = [
    { id: 'intro', label: 'Introduction & Provenance' },
    { id: 'isana', label: 'The Īśāna Revelation' },
    { id: 'yoga', label: 'Yoga & Enlightenment' },
    { id: 'virasaiva', label: 'Vīra Śaiva Connection' },
    { id: 'upagamas', label: 'The Twelve Upāgamas' },
    { id: 'verses', label: 'Core Verses' },
    { id: 'conclusion', label: 'Conclusion' },
  ];

  return (
    <div className="pt-6 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <div className="flex justify-center mb-4"><DharmaWheel size={60} spinning={true} color="#C24D2B" /></div>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-ink">Vātula Āgama</h1>
          <p className="font-devanagari text-2xl text-vermillion mt-2">वातुलागम</p>
          <p className="text-ink-muted mt-2 text-lg">The Twenty-Eighth & Final of the Twenty-Eight Primary Shaiva Āgamas</p>
          <p className="font-devanagari text-ink-faint text-sm mt-1">अष्टाविंशति शैवागमेषु अष्टाविंशतितमः — परहितः</p>
        </motion.div>

        <div className="mb-8">
          {isReady && pageContent ? (
            <AudioPlayer
              text={pageContent}
              language={language}
              title="वातुलागम — Complete Page Audio Narration"
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
            <p>The <strong>Vātula Āgama</strong> (वातुलागम), also known as <strong>Parahita</strong> (परहित), occupies the <strong>twenty-eighth and final position</strong> among the twenty-eight primary Shaiva Āgamas. It belongs to the <strong>Rudrabheda</strong> group, sharing the dual-nondual philosophical orientation. As the culminating scripture of the Siddhānta Āgama corpus, it carries a special significance — it represents the completion of Shiva's revelation, the final garment of divine wisdom that clothes the Lord's complete form.</p>

            <p>In the Kāmikāgama's celebrated metaphor where each Āgama corresponds to a part of Shiva's divine body, the Vātula Āgama is identified with the <strong>attire</strong> (vastra) of the Lord. Just as clothing both covers and reveals the body, this Āgama encompasses the complete teaching while simultaneously pointing beyond itself to the direct, unmediated experience of Shiva. It is the outermost layer that both protects and displays the inner treasure.</p>

            <p>The name "Vātula" carries rich connotations. It connects to the idea of one who is "mad" or "intoxicated" with divine love — a state in which conventional rationality is transcended by the overwhelming bliss of Shiva-consciousness. The Vātula is the divine madman who wanders free from social constraints, living directly in the truth that this Āgama reveals.</p>

            <p>The alternative name "Parahita" — "Supreme Benefit" or "Highest Good" — indicates the ultimate purpose of this scripture: the complete welfare and liberation of all beings. It is the Āgama that brings the seeker to the final destination of the spiritual journey.</p>

            <Verse
              sanskrit="वातुलं नाम तत् शास्त्रं परहितं परमं पदम् ।
योगेन ज्ञानेन मोक्षं ददाति शिवभावितम् ॥"
              transliteration="Vātulaṃ nāma tat śāstraṃ parahitaṃ paramaṃ padam |
Yogena jñānena mokṣaṃ dadāti śiva-bhāvitam ||"
              meaning="The Vātula, known as Parahita, is the scripture of the supreme state. Through yoga and knowledge, it grants liberation infused with Shiva-consciousness."
            />
          </Section>

          <SectionDivider className="my-8" />

          <Section id="isana" title="2. The Īśāna Revelation" hindiTitle="२. ईशान मुख प्रकटन">
            <p>The Vātula Āgama holds the distinction of having been revealed to the world through the <strong>Īśāna face</strong> of Lord Shiva. In Shaiva cosmology, Shiva manifests five faces (pañca-mukha), each representing a different dimension of divine activity and each presiding over a specific group of Āgamas:</p>

            <div className="space-y-3 mt-2">
              <div className="border-l-4 border-vermillion pl-4">
                <p className="font-semibold text-ink">Sadyojāta — The Western Face</p>
                <p className="text-ink-light text-sm">Presiding over creation (sṛṣṭi), associated with the earth element. Revealed Āgamas focused on ritual and temple construction.</p>
              </div>
              <div className="border-l-4 border-turmeric pl-4">
                <p className="font-semibold text-ink">Vāmadeva — The Northern Face</p>
                <p className="text-ink-light text-sm">Presiding over preservation (sthiti), associated with the water element. Revealed Āgamas focused on ethical conduct and community.</p>
              </div>
              <div className="border-l-4 border-sage pl-4">
                <p className="font-semibold text-ink">Aghora — The Southern Face</p>
                <p className="text-ink-light text-sm">Presiding over dissolution (saṃhāra), associated with the fire element. Revealed Āgamas focused on transformation and purification.</p>
              </div>
              <div className="border-l-4 border-lotus pl-4">
                <p className="font-semibold text-ink">Tatpuruṣa — The Eastern Face</p>
                <p className="text-ink-light text-sm">Presiding over concealment (tirobhāva), associated with the air element. Revealed Āgamas focused on the mysteries of māyā and bondage.</p>
              </div>
              <div className="border-l-4 border-indigo pl-4">
                <p className="font-semibold text-ink">Īśāna — The Upper Face</p>
                <p className="text-ink-light text-sm">Presiding over grace (anugraha), associated with the ether element. Revealed Āgamas focused on liberation, yoga, and the highest knowledge. The Vātula is among the eight Āgamas proclaimed by this face.</p>
              </div>
            </div>

            <p className="mt-4">The Īśāna face is the face of grace — the dimension of Shiva that actively bestows liberation upon souls. That the Vātula Āgama was revealed through this face indicates its paramount concern with the final attainment of mokṣa. It is not a scripture for beginners in the conventional sense, but for those who are ripe for the highest teaching.</p>
          </Section>

          <SectionDivider className="my-8" />

          <Section id="yoga" title="3. Yoga & The Path to Enlightenment" hindiTitle="३. योग एवं बोध मार्ग">
            <p>The Vātula Āgama is preeminently a scripture of <strong>yoga and enlightenment</strong>. While it respects the ritual and devotional dimensions of Shaiva practice, its ultimate concern is the direct realization of Shiva through systematic inner discipline. It presents yoga not as physical exercise but as a complete science of consciousness transformation.</p>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">A. The Fourfold Path (Chatuṣpāda) in Vātula</h4>
            <p>Like all primary Āgamas, the Vātula is structured around the four pādas, but with a distinctive emphasis:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Kriyā Pāda</strong> — Ritual action is taught as a means of purifying the body-mind complex and creating a receptive vessel for higher practices</li>
              <li><strong>Caryā Pāda</strong> — Daily conduct is presented as continuous yoga, where every action becomes an offering to Shiva</li>
              <li><strong>Yoga Pāda</strong> — The heart of the text, presenting advanced meditation techniques, breath control, and the awakening of kuṇḍalinī</li>
              <li><strong>Jñāna Pāda</strong> — The philosophical crown, revealing the non-dual truth that the individual soul is none other than Shiva</li>
            </ul>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">B. The Yoga of Spanda</h4>
            <p>The Vātula Āgama gives special emphasis to the doctrine of <strong>Spanda</strong> — the primordial vibration or pulsation that is the dynamic aspect of Shiva-consciousness. Spanda is not physical vibration but the subtle throb of pure awareness by which the apparently static Shiva becomes manifest as the universe.</p>

            <p>The yogi who learns to perceive this spanda in meditation discovers that the entire cosmos is a continuous vibration of consciousness. The distinction between subject and object, between self and world, dissolves into the recognition of a single, pulsating reality. This is the essence of Shaiva yoga as taught in the Vātula.</p>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">C. The Direct Path (Sadyo-mārga)</h4>
            <p>While acknowledging gradual paths of purification, the Vātula also teaches a <strong>direct path</strong> for advanced practitioners. This path bypasses elaborate preliminary practices and goes straight to the recognition of one's own Shiva-nature. The text warns that this path is not for the unprepared — it requires a mind that has been ripened by previous practice and a heart that has been softened by devotion.</p>

            <p>The direct path consists essentially of <strong>viveka</strong> (discrimination between the real and the unreal) and <strong>vairāgya</strong> (dispassion toward the fleeting phenomena of the world). When these are perfected, the soul turns spontaneously toward Shiva, and liberation occurs as naturally as a river flows to the ocean.</p>
          </Section>

          <SectionDivider className="my-8" />

          <Section id="virasaiva" title="4. The Vīra Śaiva Connection" hindiTitle="४. वीरशैव सम्प्रदाय सम्बन्ध">
            <p>The Vātula Āgama holds a place of special honor in the <strong>Vīra Śaiva</strong> (or Liṅgāyata) tradition, a major Shaiva movement that originated in Karnataka and continues to flourish today. Vīra Śaivites especially refer to the Vātula and Vīra Āgamas as their primary scriptural authorities.</p>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">A. The Liṅga as Living Presence</h4>
            <p>In the Vīra Śaiva interpretation of the Vātula, the <strong>īṣṭa-liṅga</strong> (personal liṅga received at initiation) is not merely a symbol but a living presence of Shiva. The practitioner wears this liṅga on the body as a constant reminder of their divine identity. The Vātula's teachings on yoga and enlightenment are thus practiced in intimate relationship with this personal deity.</p>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">B. Aṣṭāvaraṇa — The Eightfold Shield</h4>
            <p>The Vīra Śaiva tradition, drawing upon the Vātula and related Āgamas, developed the practice of <strong>Aṣṭāvaraṇa</strong> — the eightfold shield that protects the devotee's spiritual life:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Guru</strong> — Obedience to the spiritual teacher who transmits the liṅga</li>
              <li><strong>Liṅga</strong> — Worship of the personal liṅga as the living Shiva</li>
              <li><strong>Jaṅgama</strong> — Reverence for wandering ascetics as embodiments of Shiva</li>
              <li><strong>Pādodaka</strong> — Drinking the sanctified water from the guru's or jaṅgama's feet</li>
              <li><strong>Prasāda</strong> — Partaking of sacred food offerings</li>
              <li><strong>Bhasma</strong> — Application of sacred ash as a sign of renunciation</li>
              <li><strong>Rudrākṣa</strong> — Wearing the sacred beads as protection and blessing</li>
              <li><strong>Mantra</strong> — Constant recitation of the Pañcākṣara mantra</li>
            </ul>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">C. The Equality of All Beholders</h4>
            <p>A revolutionary teaching that emerges from the Vātula-influenced Vīra Śaiva tradition is the <strong>fundamental equality of all devotees</strong> regardless of caste, gender, or social status. Since all are equally Shiva, no external distinction can determine spiritual worth. This social vision, rooted in metaphysical non-dualism, has made Vīra Śaivism a powerful force for social reform and spiritual democracy.</p>
          </Section>

          <SectionDivider className="my-8" />

          <Section id="upagamas" title="5. The Twelve Upāgamas of Vātula" hindiTitle="५. वातुलागमस्य द्वादश उपागमाः">
            <p>The Vātula Āgama is accompanied by twelve Upāgamas that expand upon its yogic and philosophical teachings. Among these, the <strong>Kalottāra</strong> is particularly significant and is often studied as an independent text on liberation:</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
              {[
                { name: 'Vātula', hindi: 'वातुल' },
                { name: 'Vātulottara', hindi: 'वातुलोत्तर' },
                { name: 'Kālajñāna', hindi: 'कालज्ञान' },
                { name: 'Prarohita', hindi: 'प्ररोहित' },
                { name: 'Sarva', hindi: 'सर्व' },
                { name: 'Dharmātmaka', hindi: 'धर्मात्मक' },
                { name: 'Śreṣṭha', hindi: 'श्रेष्ठ' },
                { name: 'Nitya', hindi: 'नित्य' },
                { name: 'Śuddha', hindi: 'शुद्ध' },
                { name: 'Mahānana', hindi: 'महानन' },
                { name: 'Viśva', hindi: 'विश्व' },
                { name: 'Viśvātmaka', hindi: 'विश्वात्मक' },
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

            <p>The <strong>Kalottāra</strong> (कालोत्तर), in particular, is renowned for its concise yet profound exposition of the nature of time (kāla), death, and liberation. It teaches that the fear of death arises only from identification with the perishable body-mind; when one recognizes oneself as the timeless Shiva, death becomes a doorway rather than an ending.</p>
          </Section>

          <SectionDivider className="my-8" />

          <Section id="verses" title="6. Core Verses & Sacred Teachings" hindiTitle="६. मूल श्लोक">
            <Verse
              sanskrit="वातुलं नाम तत् शास्त्रं परहितं परमं पदम् ।
योगेन ज्ञानेन मोक्षं ददाति शिवभावितम् ॥"
              transliteration="Vātulaṃ nāma tat śāstraṃ parahitaṃ paramaṃ padam |
Yogena jñānena mokṣaṃ dadāti śiva-bhāvitam ||"
              meaning="The Vātula, known as Parahita, is the scripture of the supreme state. Through yoga and knowledge, it grants liberation infused with Shiva-consciousness."
            />

            <Verse
              sanskrit="ईशानमुखात् प्रकटितं वातुलं शिवशासनम् ।
अनुग्रहाय भक्तानां मोक्षमार्ग प्रदर्शकम् ॥"
              transliteration="Īśāna-mukhāt prakaṭitaṃ vātulaṃ śiva-śāsanam |
Anugrahāya bhaktānāṃ mokṣa-mārga pradarśakam ||"
              meaning="The Vātula scripture was revealed from the Īśāna face for the grace of devotees, showing the path to liberation."
            />

            <Verse
              sanskrit="स्पन्द एव परं तत्त्वं यस्मिन् विश्वं प्रतिष्ठितम् ।
तं स्पन्दं योगिनो वेद्यं वातुलाज्ञानुसारतः ॥"
              transliteration="Spanda eva paraṃ tattvaṃ yasmin viśvaṃ pratiṣṭhitam |
Taṃ spandaṃ yogino vedyaṃ vātulājñānusārataḥ ||"
              meaning="Spanda alone is the supreme reality in which the universe is established. That spanda is to be known by yogis following the instruction of the Vātula."
            />

            <Verse
              sanskrit="वीरशैवः सदा भक्त्या लिङ्गं ध्यायेत् परात्परम् ।
कायक्लेशैर्निराकारः शिव एव न संशयः ॥"
              transliteration="Vīraśaivaḥ sadā bhaktyā liṅgaṃ dhyāyet parātparam |
Kāyakleśair nirākāraḥ śiva eva na saṃśayaḥ ||"
              meaning="The Vīra Śaiva should always meditate on the supreme liṅga with devotion. Free from bodily afflictions, he is Shiva alone — of this there is no doubt."
            />
          </Section>

          <SectionDivider className="my-8" />

          <Section id="conclusion" title="7. Conclusion" hindiTitle="७. समापन">
            <p>The Vātula Āgama, as the final scripture of the twenty-eight Siddhānta Āgamas, brings the revelation of Shiva to its glorious completion. It is the attire that both adorns and protects the complete body of Shaiva wisdom — the outer covering that points inward to the naked truth of Shiva-consciousness.</p>

            <p>Through its teachings on yoga, spanda, and direct realization, the Vātula offers the mature seeker a path that is both profound and practical. It does not ask us to reject the world but to recognize it as the vibration of our own deepest Self. It does not demand that we become something other than what we are, but only that we remove the veils of ignorance that hide our eternal Shiva-nature.</p>

            <p>For the Vīra Śaiva community and for all sincere seekers, the Vātula remains a living scripture — not a relic of the past but a present source of grace, guidance, and illumination. May its wisdom continue to awaken hearts to the recognition that we are, and have always been, none other than Shiva.</p>

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