import React, { useState } from 'react';
import { MapPin, Skull, Eye, ShieldAlert, Sparkles, X } from 'lucide-react';

interface WorldLocation {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  threat: string;
  faction: string;
  relic: string;
  lore: string;
}

export const WorldSection: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<WorldLocation | null>(null);

  const locations: WorldLocation[] = [
    {
      id: 'citadel',
      title: 'THE FALLEN CITADEL',
      subtitle: 'Heart of the Eldrath Empire',
      image: '/images/ancient-kingdom.jpg',
      description: 'The shattered seat of an empire whose kings challenged the gods.',
      threat: 'Cataclysmic',
      faction: 'The Embergreaves & Hollow Wardens',
      relic: 'The Sunder-Stone of the First Patriarch',
      lore: 'Once crowned with sapphire-gold spires and soaring bridges that spanned across cloud-mantled peaks, Eldrath was the jewel of the mortal realm. When its kings defied the ancient covenants to harness the deep flame, molten rivers swallowed the lower avenues in a single night. Now, hollow sentinels continue their patrol among scorched colonnades, unaware that the kingdom they guard ceased to exist centuries ago.',
    },
    {
      id: 'wilds',
      title: 'THE ASHEN WILDS',
      subtitle: 'The Graveyard of Seven Banners',
      image: '/images/dark-fortress.jpg',
      description: 'A cursed wilderness where ancient battlefields stir beneath a blanket of drifting ash.',
      threat: 'Extreme',
      faction: 'Wraiths of the Lost Legion',
      relic: 'The Standard of the Black Sun',
      lore: 'Covering hundreds of leagues of jagged basalt crags and petrified briars, ash falls incessantly here like cursed snow. Beneath the grey drifts lie thousands of unburied legionnaires whose armor has welded into the volcanic earth. Travelers who cross the Wilds without bearing a consecrated flame will hear the clatter of spears in the dark and find themselves surrounded by armies that cannot die.',
    },
    {
      id: 'throne',
      title: 'THE HOLLOW THRONE',
      subtitle: 'Sanctuary of the Bound Covenant',
      image: '/images/cursed-realm.jpg',
      description: 'A forgotten sanctuary where the final truth of the Ashen Oath awaits.',
      threat: 'Divine Unknown',
      faction: 'The Nameless Keepers',
      relic: 'The Vessel of the Primordial Spark',
      lore: 'Hidden in subterranean vaults miles beneath the roots of the earth, this monolithic dais of black meteoric iron rests untouched by mortal hands for millennia. Pulsing golden runes circle the dais like binding chains. It is here that the Dreadknight made his fateful pact—and it is here that the final embers must either be rekindled to burn away the world, or extinguished forever into eternal night.',
    },
  ];

  return (
    <section
      id="world"
      className="relative w-full py-28 px-4 sm:px-6 lg:px-8 bg-[#080706] text-[#F3E7D0] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(111,23,19,0.12)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D7AD62]/60" />
            <span className="text-xs font-cinzel tracking-[0.3em] uppercase text-[#D7AD62] font-semibold">
              The Shattered Territories
            </span>
            <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#D7AD62]/60" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-cinzel-dec font-bold tracking-[0.16em] text-gold-gradient">
            A KINGDOM CONSUMED BY DARKNESS
          </h2>

          <div className="medieval-divider max-w-xs mx-auto py-2">
            <div className="rotate-45 w-2 h-2 border border-[#D7AD62] bg-[#E65B20]" />
          </div>

          <p className="font-serif text-base sm:text-lg text-[#F3E7D0]/80 italic">
            Venture across forgotten realms scarred by catastrophic war, ancient hubris, and forbidden divinity.
          </p>
        </div>

        {/* 3 Location Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((loc) => (
            <div
              key={loc.id}
              className="group relative flex flex-col justify-end overflow-hidden rounded-lg border border-[#D7AD62]/20 bg-[#171311] transition-all duration-500 hover:border-[#D7AD62]/80 hover:shadow-[0_0_30px_rgba(230,91,32,0.25)] min-h-[460px]"
            >
              {/* Location Image with Smooth Parallax Zoom */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={loc.image}
                  alt={loc.title}
                  className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
                  loading="lazy"
                />
                {/* Multi-layer darkening gradient to preserve contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080706] via-[#080706]/70 to-[#080706]/20 transition-opacity duration-300 group-hover:via-[#080706]/55" />
              </div>

              {/* Decorative Corner Borders */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[#D7AD62]/50 pointer-events-none transition-colors duration-300 group-hover:border-[#D7AD62]" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[#D7AD62]/50 pointer-events-none transition-colors duration-300 group-hover:border-[#D7AD62]" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-[#D7AD62]/50 pointer-events-none transition-colors duration-300 group-hover:border-[#D7AD62]" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#D7AD62]/50 pointer-events-none transition-colors duration-300 group-hover:border-[#D7AD62]" />

              {/* Card Content Overlay */}
              <div className="relative z-10 p-6 sm:p-7 space-y-3">
                <div className="flex items-center gap-2 text-[11px] font-cinzel tracking-widest text-[#E65B20]">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{loc.subtitle}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-cinzel font-bold tracking-wider text-gold-gradient">
                  {loc.title}
                </h3>

                <p className="font-serif text-sm sm:text-base text-[#F3E7D0]/90 leading-relaxed italic">
                  {loc.description}
                </p>

                {/* Threat Metadata */}
                <div className="pt-2 flex items-center justify-between text-xs border-t border-[#D7AD62]/15">
                  <div className="flex items-center gap-1.5 text-[#F3E7D0]/70 font-cinzel">
                    <Skull className="h-3.5 w-3.5 text-[#E65B20]" />
                    <span>Threat: <strong className="text-[#E65B20]">{loc.threat}</strong></span>
                  </div>

                  <button
                    onClick={() => setSelectedLocation(loc)}
                    className="inline-flex items-center gap-1 font-cinzel text-xs tracking-wider text-[#D7AD62] hover:text-[#FFF] transition-colors"
                  >
                    <span>EXPLORE INTEL</span>
                    <Eye className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Territory Chronicle Modal */}
        {selectedLocation && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-labelledby="location-modal-title"
          >
            <div className="relative w-full max-w-2xl rounded-lg border border-[#D7AD62] bg-[#120E0D] p-6 sm:p-8 shadow-[0_0_50px_rgba(215,173,98,0.3)] space-y-5 animate-in fade-in duration-200">
              {/* Close Button */}
              <button
                onClick={() => setSelectedLocation(null)}
                aria-label="Close territory intel modal"
                className="absolute top-4 right-4 p-1.5 rounded-full border border-[#D7AD62]/30 text-[#D7AD62] hover:border-[#D7AD62] hover:bg-[#171311] transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="space-y-1">
                <span className="text-xs font-cinzel tracking-widest text-[#E65B20] uppercase">
                  {selectedLocation.subtitle}
                </span>
                <h3 id="location-modal-title" className="text-2xl sm:text-3xl font-cinzel font-bold text-gold-gradient">
                  {selectedLocation.title}
                </h3>
              </div>

              <div className="overflow-hidden rounded border border-[#D7AD62]/30 max-h-56">
                <img
                  src={selectedLocation.image}
                  alt={selectedLocation.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="font-serif text-base sm:text-lg text-[#F3E7D0]/90 leading-relaxed italic">
                {selectedLocation.lore}
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-[#D7AD62]/20 text-xs font-cinzel">
                <div>
                  <span className="block text-[#C9A35E]/70 uppercase tracking-widest text-[10px]">Dominant Faction</span>
                  <span className="text-[#F3E7D0] font-semibold">{selectedLocation.faction}</span>
                </div>
                <div>
                  <span className="block text-[#C9A35E]/70 uppercase tracking-widest text-[10px]">Ancient Relic</span>
                  <span className="text-[#D7AD62] font-semibold">{selectedLocation.relic}</span>
                </div>
              </div>

              <div className="pt-2 text-right">
                <button
                  onClick={() => setSelectedLocation(null)}
                  className="px-6 py-2 rounded border border-[#D7AD62] bg-[#171311] font-cinzel text-xs font-bold tracking-widest text-[#D7AD62] hover:bg-[#D7AD62] hover:text-[#080706] transition-all"
                >
                  DISMISS INTEL
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
