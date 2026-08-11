import { useState, useEffect, useMemo } from 'react';
import { Navigation, MapPin, Train, Plane, Car, ExternalLink, Info, Route, Compass, MapIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import AudioPlayer from '../components/AudioPlayer';
import { t } from '../lib/translations';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const OriginIcon = L.divIcon({
  className: 'custom-div-icon',
  html: `<div style="background:#22c55e;width:14px;height:14px;border-radius:50%;border:2px solid white;box-shadow:0 2px 4px rgba(0,0,0,0.3);"></div>`,
  iconSize: [14, 14],
  iconAnchor: [7, 7],
});

const TempleIcon = L.divIcon({
  className: 'custom-div-icon',
  html: `<div style="background:#c2410c;width:12px;height:12px;border-radius:50%;border:2px solid white;box-shadow:0 2px 4px rgba(0,0,0,0.3);"></div>`,
  iconSize: [12, 12],
  iconAnchor: [6, 6],
});

interface Temple {
  id: number; name: string; hindi_name: string; type: string; state: string; city: string;
  latitude: number; longitude: number; description: string; significance: string; deity: string;
}

interface RouteInfo {
  road: { distance: string; duration: string; steps: string[]; geometry: unknown };
  train: { stations: string[]; tips: string[] };
  flight: { airports: string[]; tips: string[] };
  originCoords: { lat: number; lng: number } | null;
}

function MapFitter({ bounds }: { bounds: L.LatLngBoundsExpression | null }) {
  const map = useMap();
  useEffect(() => {
    if (bounds) map.fitBounds(bounds, { padding: [60, 60], maxZoom: 10 });
  }, [bounds, map]);
  return null;
}

export default function TravelPage({ language }: { language: string }) {
  const [temples, setTemples] = useState<Temple[]>([]);
  const [loading, setLoading] = useState(true);
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [selectedTemple, setSelectedTemple] = useState<Temple | null>(null);
  const [routeInfo, setRouteInfo] = useState<RouteInfo | null>(null);
  const [routeGeometry, setRouteGeometry] = useState<number[][] | null>(null);
  const [searching, setSearching] = useState(false);
  const [templeSearch, setTempleSearch] = useState('');
  const [activeTab, setActiveTab] = useState<'road' | 'train' | 'flight'>('road');
  const [mapType, setMapType] = useState<'standard' | 'satellite'>('standard');

  useEffect(() => {
    fetch('/api/temples')
      .then(r => r.json())
      .then(data => { if (Array.isArray(data)) setTemples(data); })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const filteredTemples = useMemo(() => {
    if (!templeSearch) return temples;
    const q = templeSearch.toLowerCase();
    return temples.filter(tp => tp.name.toLowerCase().includes(q) || tp.city.toLowerCase().includes(q) || tp.state.toLowerCase().includes(q));
  }, [temples, templeSearch]);

  const handleSelectTemple = (temple: Temple) => {
    setSelectedTemple(temple);
    setDestination(`${temple.name}, ${temple.city}, ${temple.state}`);
    setTempleSearch('');
    setRouteInfo(null);
    setRouteGeometry(null);
  };

  const handleGetDirections = async () => {
    if (!origin || !selectedTemple) return;
    setSearching(true);
    try {
      const res = await fetch('/api/travel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          origin,
          destination_name: selectedTemple.name,
          destination_city: selectedTemple.city,
          destination_state: selectedTemple.state,
          destination_lat: selectedTemple.latitude,
          destination_lng: selectedTemple.longitude,
        }),
      });
      const data = await res.json();
      setRouteInfo(data);
      if (data.road?.geometry?.coordinates) {
        setRouteGeometry(data.road.geometry.coordinates.map((c: number[]) => [c[1], c[0]]));
      }
    } catch (err) { console.error(err); } finally { setSearching(false); }
  };

  const openGoogleMaps = () => {
    if (!selectedTemple) return;
    window.open(`https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${selectedTemple.latitude},${selectedTemple.longitude}&travelmode=driving`, '_blank');
  };

  const mapBounds = useMemo(() => {
    if (!selectedTemple) return null;
    const points: [number, number][] = [[selectedTemple.latitude, selectedTemple.longitude]];
    if (routeInfo?.originCoords) points.push([routeInfo.originCoords.lat, routeInfo.originCoords.lng]);
    return points.length > 1 ? points : null;
  }, [selectedTemple, routeInfo]);

  const templeTypes = useMemo(() => {
    const types = new Set(temples.map(t => t.type));
    return Array.from(types);
  }, [temples]);

  return (
    <div className="pt-6 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-ink">{t('travelTitle', language)}</h1>
          <p className="text-ink-muted mt-1">Plan your sacred pilgrimage across Bharat</p>
        </motion.div>

        {/* Search Panel */}
        <div className="bg-surface border border-border rounded-xl p-5 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-[12px] font-semibold uppercase tracking-wider text-ink-faint mb-1.5 block">Starting Location</label>
              <div className="relative">
                <MapPin size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-sage" />
                <input type="text" placeholder="e.g., New Delhi, Mumbai, Chennai…" value={origin} onChange={e => setOrigin(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 bg-parchment border border-border rounded-lg text-sm text-ink placeholder:text-ink-faint/50 focus:outline-none focus:border-vermillion/40" />
              </div>
            </div>
            <div>
              <label className="text-[12px] font-semibold uppercase tracking-wider text-ink-faint mb-1.5 block">Destination Temple</label>
              <div className="relative">
                <Navigation size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-vermillion" />
                <input type="text" placeholder="Search temple name or city…" value={templeSearch || destination} onChange={e => { setTempleSearch(e.target.value); setDestination(''); setSelectedTemple(null); setRouteInfo(null); }}
                  className="w-full pl-9 pr-3 py-2.5 bg-parchment border border-border rounded-lg text-sm text-ink placeholder:text-ink-faint/50 focus:outline-none focus:border-vermillion/40" />
              </div>
              {templeSearch && filteredTemples.length > 0 && (
                <div className="mt-1 bg-surface border border-border rounded-lg shadow-lg max-h-48 overflow-y-auto z-50 relative">
                  {filteredTemples.slice(0, 10).map(tp => (
                    <button key={tp.id} onClick={() => handleSelectTemple(tp)} className="w-full text-left px-3 py-2 text-sm hover:bg-parchment-warm transition-colors border-b border-border-light last:border-0">
                      <span className="font-medium text-ink">{tp.name}</span>
                      <span className="text-ink-faint text-[12px] ml-2">{tp.city}, {tp.state} · {tp.type}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button onClick={handleGetDirections} disabled={!origin || !selectedTemple || searching}
              className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-vermillion text-white font-medium text-sm hover:bg-vermillion-deep disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
              {searching ? <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Calculating…</> : <><Compass size={15} /> Get Directions</>}
            </button>
            {selectedTemple && (
              <button onClick={openGoogleMaps} className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-border text-ink font-medium text-sm hover:bg-parchment-warm transition-colors">
                <ExternalLink size={14} /> Open in Google Maps
              </button>
            )}
          </div>
        </div>

        {/* India Map */}
        <div className="bg-surface border border-border rounded-xl overflow-hidden mb-6">
          <div className="px-4 py-3 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapIcon size={16} className="text-vermillion" />
              <h3 className="font-display font-semibold text-ink">Sacred Temples of India</h3>
              <span className="text-ink-faint text-xs ml-2">{temples.length} temples</span>
            </div>
            <div className="flex gap-1">
              <button onClick={() => setMapType('standard')} className={`px-2 py-1 text-[11px] rounded ${mapType === 'standard' ? 'bg-vermillion/10 text-vermillion' : 'text-ink-muted'}`}>Map</button>
              <button onClick={() => setMapType('satellite')} className={`px-2 py-1 text-[11px] rounded ${mapType === 'satellite' ? 'bg-vermillion/10 text-vermillion' : 'text-ink-muted'}`}>Satellite</button>
            </div>
          </div>
          <div className="h-[450px] w-full">
            <MapContainer center={[22.5, 79]} zoom={5} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
              <TileLayer
                attribution='&copy; OpenStreetMap'
                url={mapType === 'satellite'
                  ? 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
                  : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                }
              />
              <MapFitter bounds={mapBounds} />
              {temples.map(tp => (
                <Marker key={tp.id} position={[tp.latitude, tp.longitude]} icon={TempleIcon} eventHandlers={{ click: () => handleSelectTemple(tp) }}>
                  <Popup>
                    <div className="text-sm min-w-[180px]">
                      <p className="font-semibold text-ink">{tp.name}</p>
                      <p className="text-gray-500 text-xs">{tp.city}, {tp.state}</p>
                      <span className="inline-block mt-1 px-1.5 py-0.5 bg-vermillion/10 text-vermillion text-[10px] rounded font-medium">{tp.type}</span>
                      <p className="text-gray-400 text-[11px] mt-1 line-clamp-2">{tp.deity}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
              {routeInfo?.originCoords && (
                <Marker position={[routeInfo.originCoords.lat, routeInfo.originCoords.lng]} icon={OriginIcon}>
                  <Popup>Your Location: {origin}</Popup>
                </Marker>
              )}
              {routeGeometry && <Polyline positions={routeGeometry as [number, number][]} color="#c2410c" weight={4} opacity={0.8} />}
            </MapContainer>
          </div>
          {/* Legend */}
          <div className="px-4 py-2 border-t border-border flex flex-wrap gap-4 text-[11px] text-ink-faint">
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-green-500 border border-white"></span> Your Location</span>
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-vermillion border border-white"></span> Temple</span>
            <span className="flex items-center gap-1"><span className="w-6 h-0.5 bg-vermillion"></span> Route</span>
          </div>
        </div>

        {/* Selected Temple Card */}
        {selectedTemple && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="bg-surface border border-border rounded-xl p-5 mb-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-display text-lg font-semibold text-ink">{selectedTemple.name}</h3>
                <p className="text-ink-faint text-sm">{selectedTemple.city}, {selectedTemple.state} · {selectedTemple.deity}</p>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-vermillion/8 text-vermillion">{selectedTemple.type}</span>
            </div>
            <AudioPlayer text={`${selectedTemple.name}. ${selectedTemple.city}, ${selectedTemple.state}. ${selectedTemple.description}`} language={language} title={`${selectedTemple.name} — Audio Guide`} />
            <p className="text-ink-light text-sm mt-3 leading-relaxed">{selectedTemple.description}</p>
          </motion.div>
        )}

        {/* Route Info Tabs */}
        {routeInfo && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-xl font-semibold text-ink flex items-center gap-2"><Route size={18} className="text-vermillion" /> Travel Options: {origin} → {selectedTemple?.name}</h2>
              <span className="text-ink-faint text-sm">{routeInfo.road.distance} · {routeInfo.road.duration}</span>
            </div>

            <AudioPlayer text={`Travel options from ${origin} to ${selectedTemple?.name}. By road: ${routeInfo.road.distance}, ${routeInfo.road.duration}. ${routeInfo.road.steps.slice(0, 3).join('. ')}. By train: nearest stations are ${routeInfo.train.stations.slice(0, 2).join(' and ')}. By flight: nearest airports are ${routeInfo.flight.airports.slice(0, 2).join(' and ')}.`} language={language} title="Travel Guide" />

            {/* Tab Buttons */}
            <div className="flex gap-2 border-b border-border">
              {(['road', 'train', 'flight'] as const).map(tab => (
                <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${activeTab === tab ? 'border-vermillion text-vermillion' : 'border-transparent text-ink-muted hover:text-ink'}`}>
                  {tab === 'road' ? <span className="flex items-center gap-1.5"><Car size={14} /> By Road</span> : tab === 'train' ? <span className="flex items-center gap-1.5"><Train size={14} /> By Train</span> : <span className="flex items-center gap-1.5"><Plane size={14} /> By Flight</span>}
                </button>
              ))}
            </div>

            {activeTab === 'road' && (
              <div className="bg-surface border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-sage/10 flex items-center justify-center"><Car size={16} className="text-sage" /></div>
                  <div>
                    <h3 className="font-display font-semibold text-ink">By Road</h3>
                    <p className="text-ink-faint text-[12px]">{routeInfo.road.distance} · {routeInfo.road.duration}</p>
                  </div>
                </div>
                <ol className="space-y-2">
                  {routeInfo.road.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-ink-light">
                      <span className="w-5 h-5 rounded-full bg-sage/10 text-sage text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i+1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {activeTab === 'train' && (
              <div className="bg-surface border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-turmeric/10 flex items-center justify-center"><Train size={16} className="text-turmeric-deep" /></div>
                  <h3 className="font-display font-semibold text-ink">By Train</h3>
                </div>
                <div className="mb-3">
                  <p className="text-[12px] font-semibold uppercase tracking-wider text-ink-faint mb-1">Nearest Stations</p>
                  <div className="flex flex-wrap gap-2">
                    {routeInfo.train.stations.map(s => (<span key={s} className="px-2.5 py-1 rounded-md bg-turmeric/8 text-turmeric-deep text-[13px] font-medium">{s}</span>))}
                  </div>
                </div>
                <ul className="space-y-1.5">
                  {routeInfo.train.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-ink-light"><Info size={13} className="text-turmeric flex-shrink-0 mt-0.5" />{tip}</li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'flight' && (
              <div className="bg-surface border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-vermillion/8 flex items-center justify-center"><Plane size={16} className="text-vermillion" /></div>
                  <h3 className="font-display font-semibold text-ink">By Flight</h3>
                </div>
                <div className="mb-3">
                  <p className="text-[12px] font-semibold uppercase tracking-wider text-ink-faint mb-1">Nearest Airports</p>
                  <div className="flex flex-wrap gap-2">
                    {routeInfo.flight.airports.map(a => (<span key={a} className="px-2.5 py-1 rounded-md bg-vermillion/8 text-vermillion text-[13px] font-medium">{a}</span>))}
                  </div>
                </div>
                <ul className="space-y-1.5">
                  {routeInfo.flight.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-ink-light"><Info size={13} className="text-vermillion flex-shrink-0 mt-0.5" />{tip}</li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        )}

        {/* Filter by Type */}
        {!routeInfo && !loading && (
          <div className="mt-8 space-y-6">
            {templeTypes.map(type => {
              const typeTemples = temples.filter(tp => tp.type === type);
              if (typeTemples.length === 0) return null;
              return (
                <div key={type}>
                  <h2 className="font-display text-xl font-semibold text-ink mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-vermillion"></span>
                    {type} <span className="text-ink-faint text-sm font-normal">({typeTemples.length})</span>
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {typeTemples.map(tp => (
                      <button key={tp.id} onClick={() => handleSelectTemple(tp)} className="text-left bg-surface border border-border rounded-lg p-3 hover:border-vermillion/30 transition-all group">
                        <p className="font-display text-sm font-semibold text-ink group-hover:text-vermillion transition-colors">{tp.name}</p>
                        <p className="text-ink-faint text-[12px]">{tp.city}, {tp.state}</p>
                        <p className="text-ink-faint text-[11px] mt-0.5">{tp.deity}</p>
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}