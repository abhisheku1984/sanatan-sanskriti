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

export default function NetraAgamaPage({ language }: { language: string }) {
  const { pageContent, isReady, contentRef } = usePageContent();
  const [highlightedLine, setHighlightedLine] = useState<number>(-1);

  const toc = [
    { id: 'intro', label: 'Introduction & Provenance' },
    { id: 'divine-vision', label: 'Divine Vision & The Eye' },
    { id: 'netra-mantra', label: 'The Netra Mantra' },
    { id: 'eye-opening', label: 'Netra-unmīlana — The Eye-Opening Ritual' },
    { id: 'jnana', label: 'The Eye of Knowledge' },
    { id: 'verses', label: 'Core Verses' },
    { id: 'conclusion', label: 'Conclusion' },
  ];

  return (
    <div className="pt-6 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <div className="flex justify-center mb-4"><DharmaWheel size={60} spinning={true} color="#C24D2B" /></div>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-ink">Netra Āgama</h1>
          <p className="font-devanagari text-2xl text-vermillion mt-2">नेत्रागम</p>
          <p className="text-ink-muted mt-2 text-lg">The Twenty-Eighth of the Twenty-Eight Primary Shaiva Āgamas</p>
          <p className="font-devanagari text-ink-faint text-sm mt-1">अष्टाविंशति शैवागमेषु अष्टाविंशतितमः</p>
        </motion.div>

        <div className="mb-8">
          {isReady && pageContent ? (
            <AudioPlayer
              text={pageContent}
              language={language}
              title="नेत्रागम — Complete Page Audio Narration"
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
            <p>The <strong>Netra Āgama</strong> (नेत्रागम) holds the <strong>twenty-eighth and final position</strong> among the twenty-eight primary Shaiva Āgamas. The name "Netra" means "Eye" — but this is no ordinary eye. It signifies the <strong>divine eye of Shiva</strong>, the all-seeing consciousness that perceives all worlds, all times, and all beings simultaneously. It is the eye of omniscience, the eye of grace, and ultimately, the eye of liberation through which the soul recognizes its own true nature.</p>

            <p>As the concluding scripture of the Siddhānta Āgama corpus, the Netra Āgama carries a special significance. Where the Kāmikāgama opened the revelation with the theme of desire fulfilled (Kāmika — "That Which Fulfills Wishes"), the Netra brings it to completion with the theme of perfect vision. The spiritual journey that began with longing ends with seeing — not with physical eyes, but with the single, non-dual eye of Shiva-consciousness.</p>

            <p>The Netra Āgama was revealed through the <strong>Īśāna face</strong> of Sadāśiva — the upper face that presides over grace, liberation, and the highest knowledge. This face looks upward, beyond all manifestation, toward the absolute reality that transcends even the purest tattvas. The Netra is therefore the Āgama of transcendence — the scripture that points beyond itself to the direct, unmediated experience of Shiva.</p>

            <Verse
              sanskrit="नेत्रं नाम तत् शास्त्रं ज्ञानचक्षुः प्रदायकम् ।
शिवदृष्ट्या यदा पश्येत् तदा मुक्तिः प्रजायते ॥"
              transliteration="Netraṃ nāma tat śāstraṃ jñāna-cakṣuḥ pradāyakam |
Śiva-dṛṣṭyā yadā paśyet tadā muktiḥ prajāyate ||"
              meaning="The Netra is that scripture which grants the eye of knowledge. When one sees through Shiva's vision, then liberation is born."
            />
          </Section>

          <SectionDivider className="my-8" />

          <Section id="divine-vision" title="2. Divine Vision & The Eye of Shiva" hindiTitle="२. दिव्य दृष्टिः एवं शिवनेत्रम्">
            <p>The central teaching of the Netra Āgama is that <strong>true vision is not perception but recognition</strong>. The physical eyes see forms and distinctions; the divine eye sees the formless unity that underlies all forms. The physical eyes move outward toward objects; the divine eye turns inward and discovers that the perceiver and the perceived are one.</p>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">A. The Three Eyes of Shiva</h4>
            <p>The Netra Āgama elaborates upon the symbolism of Shiva's three eyes:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>The Sun Eye (Sūrya-cakṣuḥ)</strong> — The right eye, representing the power of action (kriyā-śakti) and the principle of creation. It sees the manifest world in all its diversity and brings forth new forms.</li>
              <li><strong>The Moon Eye (Candra-cakṣuḥ)</strong> — The left eye, representing the power of knowledge (jñāna-śakti) and the principle of preservation. It sees the subtle, underlying patterns that sustain manifestation.</li>
              <li><strong>The Fire Eye (Agni-cakṣuḥ)</strong> — The third eye in the forehead, representing the power of will (icchā-śakti) and the principle of dissolution. When opened, it burns away all illusion and reveals the absolute truth.</li>
            </ul>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">B. The Eye as Consciousness Itself</h4>
            <p>In the Netra Āgama, the eye is not merely an organ of perception but a metaphor for <strong>consciousness itself</strong>. Just as the eye sees without being seen, consciousness knows without being known as an object. Just as the eye illumines all colors while remaining colorless, consciousness reveals all phenomena while remaining itself pure and unmodified. The realization of this identity between the individual consciousness and the universal Shiva-consciousness is the essence of the Netra's teaching.</p>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">C. The Netra as Grace</h4>
            <p>The text teaches that the opening of the divine eye is not achieved through effort but through <strong>grace (anugraha)</strong>. The soul cannot open its own third eye any more than a seed can sprout without water. Shiva's grace is the sunlight that germinates the seed of spiritual potential. When grace descends, the eye opens spontaneously, and the soul sees what it has always been but never recognized.</p>
          </Section>

          <SectionDivider className="my-8" />

          <Section id="netra-mantra" title="3. The Netra Mantra — The Power of All-Knowing" hindiTitle="३. नेत्रमन्त्रः — सर्वज्ञ शक्तिः">
            <p>The Netra Āgama gives central importance to the <strong>Netra Mantra</strong> — one of the six aṅga-mantras that constitute the body of Shiva's worship. Each aṅga-mantra corresponds to a specific divine power and a specific part of the body:</p>

            <div className="space-y-3 mt-2">
              <div className="border-l-4 border-vermillion pl-4">
                <p className="font-semibold text-ink">Hṛdaya Mantra</p>
                <p className="text-ink-light text-sm">Denotes Shiva's ever-existing ability and essential nature — identified with the heart.</p>
              </div>
              <div className="border-l-4 border-turmeric pl-4">
                <p className="font-semibold text-ink">Śiras Mantra</p>
                <p className="text-ink-light text-sm">Denotes His supremacy and sovereignty — identified with the head.</p>
              </div>
              <div className="border-l-4 border-sage pl-4">
                <p className="font-semibold text-ink">Śikhā Mantra</p>
                <p className="text-ink-light text-sm">Denotes His state of absolute independence — identified with the crown of the head.</p>
              </div>
              <div className="border-l-4 border-lotus pl-4">
                <p className="font-semibold text-ink">Kavaca Mantra</p>
                <p className="text-ink-light text-sm">Denotes His protecting and shielding power — identified with the torso/armor.</p>
              </div>
              <div className="border-l-4 border-indigo pl-4">
                <p className="font-semibold text-ink">Astra Mantra</p>
                <p className="text-ink-light text-sm">Denotes His power to drive away inimical and obstructing forces — identified with the hands/weapons.</p>
              </div>
              <div className="border-l-4 border-rose pl-4">
                <p className="font-semibold text-ink">Netra Mantra</p>
                <p className="text-ink-light text-sm">Denotes His power of all-knowing (sarvajña-śakti) which makes evident the existence of all objects — identified with the eyes. The Netra Mantra is with the brightness of a luminous shaft and is worshipped at the center of the lotus.</p>
              </div>
            </div>

            <p className="mt-4">The Netra Āgama teaches that these six mantras are not merely verbal formulae but <strong>condensed forms of divine power</strong>. When properly awakened through initiation (dīkṣā) and practice (sādhana), they transform the practitioner's own body into the body of Shiva. The Netra Mantra, in particular, awakens the power of divine perception — the ability to see the Shiva-nature in all beings and all things.</p>
          </Section>

          <SectionDivider className="my-8" />

          <Section id="eye-opening" title="4. Netra-unmīlana — The Eye-Opening Ritual" hindiTitle="४. नेत्रोन्मीलनम् — नेत्रोद्घाटन संस्कार">
            <p>The Netra Āgama is the primary scriptural authority for the <strong>Netra-unmīlana</strong> (नेत्रोन्मीलन) ceremony — the sacred ritual of "opening the eyes" of a newly created divine image (mūrti) during its installation (pratiṣṭhā). This ritual is one of the most profound and visually striking ceremonies in the entire range of Shaiva temple practice.</p>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">A. The Significance of the Ritual</h4>
            <p>The eye-opening ritual is not merely a symbolic gesture. It represents the moment when the divine image transitions from being a piece of stone, metal, or wood to becoming a living presence of Shiva. Before the ritual, the image is śilpa — a work of art. After the ritual, it becomes mūrti — a vessel of divine consciousness. The eyes are the windows of this transformation, for it is through the eyes that the deity "sees" the devotees and the devotees "see" the deity.</p>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">B. The Procedure</h4>
            <p>The Netra Āgama prescribes an elaborate procedure for this ritual:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>The ritual should be performed on an auspicious day when the lunar mansion is in conjunction with "two eyes" (a specific astrological configuration)</li>
              <li>A protected pavilion should be constructed, concealed from the view of outsiders, with interior ground smeared with diluted cow-dung and decorated with beautifying materials</li>
              <li>The Ācārya (chief priest) designs a raised platform (sthaṇḍila) with eight dronas of paddy grains, sesame, unhusked rice, and parched paddy</li>
              <li>The image is placed at the center, facing east</li>
              <li>With gentle strokes of a needle made of gold and reciting the netra mantra, the Ācārya draws the right eye first, then the left eye, and finally the third eye in the forehead</li>
              <li>First the lines defining the eyelids are drawn, then the circles defining the eyeballs, and finally the luminous spots are drawn to "unfold" the eyes of the image</li>
            </ul>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">C. The Inner Eye-Opening</h4>
            <p>The Netra Āgama teaches that the external ritual of Netra-unmīlana has a corresponding <strong>internal practice</strong> for the yogi. Just as the Ācārya opens the eyes of the divine image, the guru opens the inner eye of the disciple through initiation. This "opening" is the awakening of the ājñā cakra (the brow center), where the individual mind meets the universal mind. When this inner eye opens, the yogi perceives the Shiva-nature that pervades all existence — not as a philosophical concept but as a direct, living reality.</p>
          </Section>

          <SectionDivider className="my-8" />

          <Section id="jnana" title="5. The Eye of Knowledge — Jñāna-cakṣuḥ" hindiTitle="५. ज्ञानचक्षुः — ज्ञाननेत्रम्">
            <p>The ultimate teaching of the Netra Āgama is the attainment of <strong>Jñāna-cakṣuḥ</strong> — the Eye of Knowledge. This is not intellectual knowledge but a mode of perception so pure that it sees reality as it is, without the distortions of māyā, mala, and ego. The Eye of Knowledge does not acquire information; it recognizes truth.</p>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">A. The Obstacles to True Vision</h4>
            <p>The text enumerates the factors that obscure the natural clarity of consciousness:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Māyā-mala</strong> — The veiling power that makes the many appear separate from the One</li>
              <li><strong>Karma-mala</strong> — The accumulated impressions that color perception with past experiences</li>
              <li><strong>Āṇava-mala</strong> — The root sense of limitation and separation that is the foundation of ego</li>
              <li><strong>Vāsanās</strong> — The subtle tendencies and preferences that filter experience through conditioned patterns</li>
              <li><strong>Abhiniveśa</strong> — The fear of death and clinging to identity that prevents openness to truth</li>
            </ul>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">B. The Purification of Perception</h4>
            <p>The Netra Āgama prescribes a systematic path for purifying perception:</p>
            <ol className="list-decimal pl-6 space-y-2 mt-2">
              <li><strong>Śuddhi</strong> — External and internal purification through ritual, ethical conduct, and physical discipline</li>
              <li><strong>Sādhana</strong> — Sustained practice of meditation, mantra recitation, and breath control</li>
              <li><strong>Samāpatti</strong> — Progressive absorption in the object of meditation until subject-object duality thins</li>
              <li><strong>Sākṣātkāra</strong> — Direct, unmediated recognition of Shiva-nature as one's own essence</li>
            </ol>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">C. The Vision of Unity</h4>
            <p>When the Eye of Knowledge is fully opened, the yogi sees what the Netra Āgama calls <strong>Śiva-maya-darśana</strong> — the vision of the world as pervaded by Shiva. This is not a mystical hallucination but the natural perception of a purified mind. The same world that previously appeared as a collection of separate, competing objects now reveals itself as a single, continuous field of Shiva-consciousness. The distinction between sacred and profane, between self and other, between God and world — all dissolve into the recognition of non-dual unity.</p>
          </Section>

          <SectionDivider className="my-8" />

          <Section id="verses" title="6. Core Verses & Sacred Teachings" hindiTitle="६. मूल श्लोक">
            <Verse
              sanskrit="नेत्रं नाम तत् शास्त्रं ज्ञानचक्षुः प्रदायकम् ।
शिवदृष्ट्या यदा पश्येत् तदा मुक्तिः प्रजायते ॥"
              transliteration="Netraṃ nāma tat śāstraṃ jñāna-cakṣuḥ pradāyakam |
Śiva-dṛṣṭyā yadā paśyet tadā muktiḥ prajāyate ||"
              meaning="The Netra is that scripture which grants the eye of knowledge. When one sees through Shiva's vision, then liberation is born."
            />

            <Verse
              sanskrit="नेत्रमन्त्रेण संयुक्तः सुवर्णसूचिना ततः ।
दक्षिणं नेत्रमुद्घाट्य वामं नेत्रं तथैव च ॥"
              transliteration="Netra-mantreṇa saṃyuktaḥ suvarṇa-sūcinā tataḥ |
Dakṣiṇaṃ netram udghāṭya vāmaṃ netraṃ tathaiva ca ||"
              meaning="United with the netra mantra, with a golden needle, one should open the right eye and then the left eye."
            />

            <Verse
              sanskrit="त्रयः नेत्राः शिवस्यैते सृष्टिस्थितिलयात्मकाः ।
ज्ञानचक्षुः समुद्घाट्य पश्येत् सर्वं शिवात्मकम् ॥"
              transliteration="Trayāḥ netrāḥ śivasyete sṛṣṭi-sthiti-layātmakāḥ |
Jñāna-cakṣuḥ samudghāṭya paśyet sarvaṃ śivātmakam ||"
              meaning="These three eyes of Shiva are of the nature of creation, preservation, and dissolution. Opening the eye of knowledge, one sees all as Shiva-nature."
            />
          </Section>

          <SectionDivider className="my-8" />

          <Section id="conclusion" title="7. Conclusion" hindiTitle="७. समापन">
            <p>The Netra Āgama, as the final scripture of the twenty-eight Siddhānta Āgamas, brings the revelation of Shiva to its luminous completion. It began with Kāmika — the fulfillment of desire — and it ends with Netra — the perfection of vision. The journey from longing to seeing, from seeking to finding, from bondage to liberation — this is the arc of the entire Āgamic revelation, and the Netra stands at its culminating point.</p>

            <p>This Āgama teaches us that the ultimate spiritual attainment is not a new acquisition but a recognition. We do not become Shiva; we realize that we have always been Shiva. The eye of knowledge does not create this truth; it simply removes the veils that hide it. Like a person who has been wearing dark glasses indoors and suddenly removes them, the yogi who opens the divine eye discovers that the light was always present — it was only the glasses of ignorance that made it seem absent.</p>

            <p>May the grace of the Netra Āgama open the divine eye in all beings, revealing the truth that there is only Shiva, that there has always been only Shiva, and that all apparent multiplicity is but the playful sport of His own consciousness.</p>

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