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

export default function MrigendraAgamaPage({ language }: { language: string }) {
  const { pageContent, isReady, contentRef } = usePageContent();
  const [highlightedLine, setHighlightedLine] = useState<number>(-1);

  const toc = [
    { id: 'intro', label: 'Introduction & Provenance' },
    { id: 'four-padas', label: 'The Four Pādas' },
    { id: 'cosmology', label: 'Cosmology & The Worlds' },
    { id: 'soul', label: 'The Soul & Its Journey' },
    { id: 'karma', label: 'Karma & Its Resolution' },
    { id: 'verses', label: 'Core Verses' },
    { id: 'conclusion', label: 'Conclusion' },
  ];

  return (
    <div className="pt-6 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <div className="flex justify-center mb-4"><DharmaWheel size={60} spinning={true} color="#C24D2B" /></div>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-ink">Mṛgendra Āgama</h1>
          <p className="font-devanagari text-2xl text-vermillion mt-2">मृगेन्द्रागम</p>
          <p className="text-ink-muted mt-2 text-lg">The Twenty-Seventh of the Twenty-Eight Primary Shaiva Āgamas</p>
          <p className="font-devanagari text-ink-faint text-sm mt-1">अष्टाविंशति शैवागमेषु सप्तविंशतितमः</p>
        </motion.div>

        <div className="mb-8">
          {isReady && pageContent ? (
            <AudioPlayer
              text={pageContent}
              language={language}
              title="मृगेन्द्रागम — Complete Page Audio Narration"
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
            <p>The <strong>Mṛgendra Āgama</strong> (मृगेन्द्रागम) occupies the <strong>twenty-seventh position</strong> among the twenty-eight primary Shaiva Āgamas. The name "Mṛgendra" literally means "Lord of the Deer" or "Lion" — an epithet of Shiva as the supreme hunter who captures the wandering mind (represented as a deer) and brings it under control. This imagery captures the essential function of this Āgama: to tame the restless, wandering consciousness of the soul and direct it toward its true abode in Shiva.</p>

            <p>The Mṛgendra Āgama holds a place of extraordinary importance in the Shaiva Siddhānta tradition. Unlike many Āgamas where certain pādas (sections) are lost or incomplete, the Mṛgendra is one of the rare texts that preserves <strong>all four pādas</strong> in their entirety — Kriyā, Caryā, Yoga, and Jñāna. This makes it an indispensable resource for understanding the complete, integrated path of Shaiva practice and philosophy.</p>

            <p>Traditionally, the Mṛgendra was revealed by the <strong>Aghora face</strong> of Sadāśiva — the southern face associated with dissolution, transformation, and the fire of purification. Its teachings are therefore characterized by both depth and intensity, combining profound metaphysical insight with rigorous practical discipline.</p>

            <Verse
              sanskrit="मृगेन्द्र उवाच तत् शास्त्रं चतुष्पाद समन्वितम् ।
पशोः पाश विनिर्मुक्तिं करोति शिवभावनात् ॥"
              transliteration="Mṛgendra uvāca tat śāstraṃ catuṣpāda samanvitam |
Paśoḥ pāśa vinirmuktiṃ karoti śiva-bhāvanāt ||"
              meaning="The Lord of the Deer declared this scripture endowed with four sections. It liberates the bound soul from its fetters through contemplation of Shiva."
            />
          </Section>

          <SectionDivider className="my-8" />

          <Section id="four-padas" title="2. The Four Pādas — A Complete Scripture" hindiTitle="२. चतुष्पादः — सम्पूर्ण शास्त्र">
            <p>The Mṛgendra Āgama is unique among the surviving Āgamas in that it contains all four pādas in substantial and well-preserved form. This completeness makes it a veritable encyclopedia of Shaiva Siddhānta, covering every dimension of the spiritual life from external ritual to the highest philosophical realization.</p>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">A. Kriyā Pāda — The Path of Sacred Action</h4>
            <p>The Kriyā Pāda of the Mṛgendra provides detailed instructions for temple construction, image installation (pratiṣṭhā), daily worship (nityārcana), and festival observances. It describes the precise measurements for temple architecture, the rituals for consecrating divine images, and the protocols for maintaining the sacred space. Unlike some Āgamas that treat ritual as mere external performance, the Mṛgendra emphasizes that every ritual act is a <strong>microcosmic re-enactment of cosmic creation</strong> — the practitioner, through proper performance, becomes a participant in Shiva's own creative activity.</p>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">B. Caryā Pāda — The Path of Conduct</h4>
            <p>The Caryā Pāda establishes the ethical and behavioral framework for the Shaiva devotee. It prescribes daily routines from waking to sleeping, dietary regulations, social interactions, and the observance of sacred days. The text teaches that spirituality is not confined to temple worship but must permeate every aspect of life. Even the most mundane activities — eating, bathing, working, resting — become opportunities for spiritual growth when performed with awareness of Shiva's presence.</p>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">C. Yoga Pāda — The Path of Inner Union</h4>
            <p>The Yoga Pāda presents a systematic program of meditation, breath control, and subtle body practices. It describes the awakening of kuṇḍalinī śakti, the purification of the nāḍīs (energy channels), and the progressive ascent through the cakras. The Mṛgendra's yoga is not merely physical exercise but a complete science of consciousness transformation, culminating in the direct experience of Shiva-nature.</p>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">D. Jñāna Pāda — The Path of Wisdom</h4>
            <p>The Jñāna Pāda is the philosophical crown of the Mṛgendra. It presents the complete metaphysical framework of Shaiva Siddhānta: the three eternal realities (Pati, Paśu, Pāśa), the thirty-six tattvas, the nature of mala (impurities), and the mechanics of liberation through grace. This section has been particularly influential in the development of Tamil Shaiva theology and continues to be studied by scholars and practitioners alike.</p>
          </Section>

          <SectionDivider className="my-8" />

          <Section id="cosmology" title="3. Cosmology & The Worlds of Existence" hindiTitle="३. ब्रह्माण्ड विज्ञान एवं भुवनाध्वा">
            <p>The Mṛgendra Āgama contains one of the most detailed cosmological descriptions in the entire Shaiva corpus. It describes not only the material universe but the multiple planes of existence (bhuvanas) that constitute the complete range of manifestation — from the highest, pure realms of Śiva-consciousness down to the dense material worlds.</p>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">A. The Bhuvana-adhvan — The Path of Worlds</h4>
            <p>The text describes the <strong>Bhuvana-adhvan</strong> — the dimensional path of worlds through which consciousness descends and ascends. Each world (bhuvana) is presided over by a specific deity, governed by particular tattvas, and inhabited by beings of corresponding consciousness. The soul, in its journey through saṃsāra, traverses these worlds according to its karma and level of spiritual development.</p>

            <p>The Mṛgendra enumerates 224 bhuvanas arranged in hierarchical order. The higher worlds are characterized by greater light, knowledge, and freedom; the lower worlds by greater density, ignorance, and bondage. Yet even the lowest world is not outside Shiva's presence — it is merely Shiva experienced through thicker veils of māyā.</p>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">B. The Process of Cosmic Dissolution and Re-creation</h4>
            <p>A distinctive feature of the Mṛgendra's cosmology is its detailed account of what happens during <strong>pralaya</strong> (cosmic dissolution). The text explains that at the time of intermediate dissolution, karmic impulses are absorbed into the prakṛti-tattva. Since buddhi-tattva is the support (ādhāra) of karmic impulses, when buddhi is absorbed into prakṛti, the karma is said to be in prakṛti in a secondary sense. This subtle philosophical point has important implications for understanding how karma persists across cosmic cycles.</p>

            <p>The text further explains that prakṛti is absorbed into kāla-tattva, kāla into māyā-tattva, and māyā exists in its own plane without engaging in the evolutionary process. During this period, all cosmic Lords whose authority is connected with māyā remain in their locations, free from cosmic activities, until the time of the next creation.</p>
          </Section>

          <SectionDivider className="my-8" />

          <Section id="soul" title="4. The Soul & Its Journey Toward Liberation" hindiTitle="४. जीवः एवं मोक्ष मार्ग">
            <p>The Mṛgendra Āgama presents a profound and nuanced understanding of the individual soul (paśu or jīva). The soul is not a temporary phenomenon but an <strong>eternal reality</strong> — distinct from Shiva yet dependent upon Him, conscious yet obscured by impurities, capable of infinite knowledge yet currently experiencing limitation.</p>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">A. The Three Classes of Souls</h4>
            <p>The text classifies souls into three categories based on their degree of bondage and spiritual advancement:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Sakala</strong> — Souls carrying all three malas (āṇava, karma, and māyā). These are ordinary beings engaged in worldly existence, bound by body, senses, and mind.</li>
              <li><strong>Pralayākala</strong> — Souls existing during cosmic dissolution, free from māyā-mala but still carrying āṇava and karma. They remain in a latent state until the next creation.</li>
              <li><strong>Vijñānākala</strong> — Souls who have risen above karma and māyā through spiritual discipline and are bound only by āṇava-mala, the root impurity. These advanced souls are on the threshold of liberation.</li>
            </ul>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">B. The Soul as Sadasat</h4>
            <p>The Mṛgendra describes the soul's ontological status as <strong>Sadasat</strong> — simultaneously real (sat) and subject to change (asat). When the soul identifies with the body and material world, it is asat. When it recognizes its own nature as pure consciousness (cetanā), it is sat. Only Pati (Shiva) is purely and unchangingly sat; only Pāśa (māyā in its aspect of producing change) is asat. The soul stands between these two poles, capable of moving toward either identification.</p>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">C. The Role of Grace</h4>
            <p>Central to the Mṛgendra's soteriology is the doctrine of <strong>divine grace (anugraha)</strong>. No amount of individual effort alone can remove the root impurity of āṇava-mala. When the soul's mala becomes ripe for removal, the Lord's grace descends upon it (śaktipāta), and the impurity is destroyed. The intensity of this descent varies according to the soul's readiness — slow, less slow, intense, or very intense — each corresponding to progressively deeper levels of purification and wisdom.</p>
          </Section>

          <SectionDivider className="my-8" />

          <Section id="karma" title="5. Karma & Its Resolution" hindiTitle="५. कर्म एवं तस्य समाधान">
            <p>The Mṛgendra Āgama offers one of the most sophisticated treatments of <strong>karma</strong> in the entire Shaiva tradition. Karma is not merely a moral accounting system but a subtle mechanism that binds the soul to the cycle of birth and death through the accumulation of saṃskāras (latent impressions).</p>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">A. The Nature of Karmic Impulses</h4>
            <p>The text explains that karmic impulses are qualities (guṇas) belonging to the buddhi-tattva (intellect). Since a quality never separates from its possessor, karma remains associated with buddhi even when buddhi is absorbed into prakṛti during dissolution. This explains how karma persists across cosmic cycles and lifetimes — it is not a separate entity but a modification of the soul's cognitive apparatus.</p>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">B. The Three Types of Karma</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Sañcita-karma</strong> — The accumulated karma of countless past lives, stored in latent form</li>
              <li><strong>Prārabdha-karma</strong> — The portion of sañcita-karma that has ripened and is currently being experienced in this lifetime</li>
              <li><strong>Āgāmi-karma</strong> — The new karma being generated by present actions</li>
            </ul>

            <h4 className="font-display font-semibold text-ink mt-4 mb-2">C. Liberation from Karma</h4>
            <p>The Mṛgendra teaches that karma is resolved through a combination of ritual action (which burns accumulated karma), yogic practice (which prevents the generation of new karma), and philosophical knowledge (which reveals that the soul was never truly the doer of actions). Ultimately, however, even these practices are insufficient without Shiva's grace, which alone can destroy the root tendency toward egoic action.</p>
          </Section>

          <SectionDivider className="my-8" />

          <Section id="verses" title="6. Core Verses & Sacred Teachings" hindiTitle="६. मूल श्लोक">
            <Verse
              sanskrit="मृगेन्द्र उवाच तत् शास्त्रं चतुष्पाद समन्वितम् ।
पशोः पाश विनिर्मुक्तिं करोति शिवभावनात् ॥"
              transliteration="Mṛgendra uvāca tat śāstraṃ catuṣpāda samanvitam |
Paśoḥ pāśa vinirmuktiṃ karoti śiva-bhāvanāt ||"
              meaning="The Lord of the Deer declared this scripture endowed with four sections. It liberates the bound soul from its fetters through contemplation of Shiva."
            />

            <Verse
              sanskrit="भुवनानि शतं द्वे च चतुर्विंशतिरेव च ।
तेषु जीवः परिभ्रमन् कर्मबन्धेन बध्यते ॥"
              transliteration="Bhuvanāni śataṃ dve ca caturviṃśatireva ca |
Teṣu jīvaḥ paribhraman karma-bandhena badhyate ||"
              meaning="Two hundred and twenty-four worlds there are. Wandering through them, the soul is bound by the fetters of karma."
            />

            <Verse
              sanskrit="मलत्रय विनिर्मुक्तः शिवसायुज्यमाप्नुयात् ।
मृगेन्द्रागम वचनात् सत्यं सत्यं न संशयः ॥"
              transliteration="Malatraya vinirmuktaḥ śiva-sāyujyam āpnuyāt |
Mṛgendrāgama vacanāt satyaṃ satyaṃ na saṃśayaḥ ||"
              meaning="Freed from the three impurities, one attains union with Shiva. By the words of the Mṛgendra Āgama — this is true, this is true; there is no doubt."
            />
          </Section>

          <SectionDivider className="my-8" />

          <Section id="conclusion" title="7. Conclusion" hindiTitle="७. समापन">
            <p>The Mṛgendra Āgama stands as a monument to the completeness and integration of Shaiva Siddhānta. By preserving all four pādas — ritual, conduct, yoga, and wisdom — it offers the seeker a path that is both comprehensive and coherent. From the construction of temples to the construction of consciousness, from the ethics of daily life to the metaphysics of eternal liberation, this Āgama leaves no dimension of the spiritual journey unexplored.</p>

            <p>Its teachings on cosmology, the nature of the soul, and the mechanics of karma have profoundly influenced not only Shaiva theology but the broader landscape of Indian philosophy. The text reminds us that spirituality is not a matter of partial commitment but of total transformation — every aspect of life must be brought into alignment with the recognition of Shiva's presence.</p>

            <p>May the wisdom of the Mṛgendra Āgama guide all beings toward the recognition of their true nature as eternal, conscious, blissful souls — ever free, ever one with Shiva.</p>

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