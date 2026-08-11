import { useState, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoadingSpinner from './components/LoadingSpinner';

// Static pages
const HomePage = lazy(() => import('./pages/HomePage'));
const LibraryPage = lazy(() => import('./pages/LibraryPage'));
const HeritagePage = lazy(() => import('./pages/HeritagePage'));
const TravelPage = lazy(() => import('./pages/TravelPage'));
const GranthSuchiPage = lazy(() => import('./pages/GranthSuchiPage'));
const EditorialPage = lazy(() => import('./pages/EditorialPage'));

// NEW PAGES
const PujaMantraPage = lazy(() => import('./pages/PujaMantraPage'));
const LiveTempleAartiPage = lazy(() => import('./pages/LiveTempleAartiPage'));

// Agamas 1-7 — Srishti (Creation)
const ChintyagamaPage = lazy(() => import('./pages/ChintyagamaPage'));
const KamikagamaPage = lazy(() => import('./pages/KamikagamaPage'));
const YogajagamaPage = lazy(() => import('./pages/YogajagamaPage'));
const SukshmagamaPage = lazy(() => import('./pages/SukshmagamaPage'));
const DiptagamaPage = lazy(() => import('./pages/DiptagamaPage'));
const AjitagamaPage = lazy(() => import('./pages/AjitagamaPage'));
const KaranagamaPage = lazy(() => import('./pages/KaranagamaPage'));

// Agamas 8-10 — Sthiti (Preservation)
const SahasragamaPage = lazy(() => import('./pages/SahasragamaPage'));
const AmsumadagamaPage = lazy(() => import('./pages/AmsumadagamaPage'));
const SuprabhedagamaPage = lazy(() => import('./pages/SuprabhedagamaPage'));

// Agamas 11-15 — Samhara (Dissolution)
const VijayagamaPage = lazy(() => import('./pages/VijayagamaPage'));
const NishvasagamaPage = lazy(() => import('./pages/NishvasagamaPage'));
const SvayambhuvagamaPage = lazy(() => import('./pages/SvayambhuvagamaPage'));
const AnalagamaPage = lazy(() => import('./pages/AnalagamaPage'));
const ViragamaPage = lazy(() => import('./pages/ViragamaPage'));

// Agamas 16-20 — Tirodhana (Concealment)
const RauravagamaPage = lazy(() => import('./pages/RauravagamaPage'));
const MakutagamaPage = lazy(() => import('./pages/MakutagamaPage'));
const VimalagamaPage = lazy(() => import('./pages/VimalagamaPage'));
const CandrajnanagamaPage = lazy(() => import('./pages/CandrajnanagamaPage'));
const BimbagamaPage = lazy(() => import('./pages/BimbagamaPage'));

// Agamas 21-28 — Anugraha (Grace)
const MatangagamaPage = lazy(() => import('./pages/MatangagamaPage'));
const ParameshvaragamaPage = lazy(() => import('./pages/ParameshvaragamaPage'));
const KiranagamaPage = lazy(() => import('./pages/KiranagamaPage'));
const VatulagamaPage = lazy(() => import('./pages/VatulagamaPage'));
const KalottaragamaPage = lazy(() => import('./pages/KalottaragamaPage'));
const KalagnirudragamaPage = lazy(() => import('./pages/KalagnirudragamaPage'));
const MrigendragamaPage = lazy(() => import('./pages/MrigendragamaPage'));
const NetragamaPage = lazy(() => import('./pages/NetragamaPage'));

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <LoadingSpinner />
    </div>
  );
}

export default function App() {
  const [language, setLanguage] = useState('English');

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-parchment text-ink">
        <Navbar language={language} onLanguageChange={setLanguage} />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage language={language} />} />
            <Route path="/library" element={<LibraryPage language={language} />} />
            <Route path="/heritage" element={<HeritagePage language={language} />} />
            <Route path="/editorial" element={<EditorialPage language={language} />} />
            <Route path="/encyclopedia" element={<GranthSuchiPage language={language} />} />
            <Route path="/travel" element={<TravelPage language={language} />} />

            {/* NEW ROUTES */}
            <Route path="/puja-mantra" element={<PujaMantraPage language={language} />} />
            <Route path="/live-temples" element={<LiveTempleAartiPage language={language} />} />

            {/* Agamas 1-7 — Srishti (Creation) */}
            <Route path="/chintyagama" element={<ChintyagamaPage language={language} />} />
            <Route path="/kamikagama" element={<KamikagamaPage language={language} />} />
            <Route path="/yogajagama" element={<YogajagamaPage language={language} />} />
            <Route path="/sukshmagama" element={<SukshmagamaPage language={language} />} />
            <Route path="/diptagama" element={<DiptagamaPage language={language} />} />
            <Route path="/ajitagama" element={<AjitagamaPage language={language} />} />
            <Route path="/karanagama" element={<KaranagamaPage language={language} />} />

            {/* Agamas 8-10 — Sthiti (Preservation) */}
            <Route path="/sahasragama" element={<SahasragamaPage language={language} />} />
            <Route path="/amsumadagama" element={<AmsumadagamaPage language={language} />} />
            <Route path="/suprabhedagama" element={<SuprabhedagamaPage language={language} />} />

            {/* Agamas 11-15 — Samhara (Dissolution) */}
            <Route path="/vijayagama" element={<VijayagamaPage language={language} />} />
            <Route path="/nishvasagama" element={<NishvasagamaPage language={language} />} />
            <Route path="/svayambhuvagama" element={<SvayambhuvagamaPage language={language} />} />
            <Route path="/analagama" element={<AnalagamaPage language={language} />} />
            <Route path="/viragama" element={<ViragamaPage language={language} />} />

            {/* Agamas 16-20 — Tirodhana (Concealment) */}
            <Route path="/rauravagama" element={<RauravagamaPage language={language} />} />
            <Route path="/makutagama" element={<MakutagamaPage language={language} />} />
            <Route path="/vimalagama" element={<VimalagamaPage language={language} />} />
            <Route path="/chandrajnanagama" element={<CandrajnanagamaPage language={language} />} />
            <Route path="/bimbagama" element={<BimbagamaPage language={language} />} />

            {/* Agamas 21-28 — Anugraha (Grace) */}
            <Route path="/matangagama" element={<MatangagamaPage language={language} />} />
            <Route path="/parameshvaragama" element={<ParameshvaragamaPage language={language} />} />
            <Route path="/kiranagama" element={<KiranagamaPage language={language} />} />
            <Route path="/vatulagama" element={<VatulagamaPage language={language} />} />
            <Route path="/kalottaragama" element={<KalottaragamaPage language={language} />} />
            <Route path="/kalagnirudragama" element={<KalagnirudragamaPage language={language} />} />
            <Route path="/mrigendragama" element={<MrigendragamaPage language={language} />} />
            <Route path="/netragama" element={<NetragamaPage language={language} />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}