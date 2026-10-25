import React, { useState } from 'react';
import { Swords, Ghost, Crown, Flame, ShieldCheck, Zap, Crosshair } from 'lucide-react';

interface FeaturePillar {
  title: string;
  tagline: string;
  description: string;
  mechanics: string[];
  icon: React.ComponentType<{ className?: string }>;
  accent: string;
}

export const FeaturesSection: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<number>(0);

  const pillars: FeaturePillar[] = [
    {
      title: 'BRUTAL COMBAT',
      tagline: 'Precision, Stagger & Devastating Impact',
      description:
        'Master devastating sword techniques, shield counters, and precise finishing strikes against enemies corrupted by the ancient flame. Every swing carries momentum; every parry shatters enemy poise.',
      mechanics: [
        'Dynamic poise and directional guard breaks',
        'Flame-shield deflection and counter-ignitions',
        'Severing finishers against monstrosities',
      ],
      icon: Swords,
      accent: '#E65B20',
    },
    {
      title: 'A LIVING NIGHTMARE',
      tagline: 'An Unforgiving World in Decay',
      description:
        'Traverse a world shaped by ancient curses, ruined fortresses, forbidden rituals, and the remnants of a forgotten civilization. Day turns to eclipse; ruins awaken as dusk gathers.',
      mechanics: [
        'Seamless interconnected medieval kingdom',
        'Volumetric ash weather and creeping fog',
        'Environmental hazards fueled by underground magma',
      ],
      icon: Ghost,
      accent: '#6F1713',
    },
    {
      title: 'LEGENDS AND BETRAYAL',
      tagline: 'Factions Clashing in the Shadows',
      description:
        'Uncover lost histories, confront rival factions, and make choices that determine the fate of the shattered kingdom. No lord is innocent; no pact is without hidden blood costs.',
      mechanics: [
        'Branching allegiances with remnant covenants',
        'Moral dilemmas that reshape regional borders',
        'Unearthing forbidden tomes of the primordial age',
      ],
      icon: Crown,
      accent: '#D7AD62',
    },
    {
      title: 'THE ASHEN OATH',
      tagline: 'The Dual Edge of Cursed Power',
      description:
        'Discover the true cost of the knight’s cursed armor and the terrible power sealed within the flaming shield. Channel supernatural heat to immolate your adversaries at the risk of consuming your own humanity.',
      mechanics: [
        'Symbiotic cursed armor progression',
        'Ember-gauge awakening transformations',
        'Sacrificial rites for celestial boon powers',
      ],
      icon: Flame,
      accent: '#FFA500',
    },
  ];

  return (
    <section
      id="features"
      className="relative w-full py-28 px-4 sm:px-6 lg:px-8 bg-[#0C0A09] text-[#F3E7D0] overflow-hidden"
    >
      {/* Background subtleties */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(230,91,32,0.06)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D7AD62]/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D7AD62]/60" />
            <span className="text-xs font-cinzel tracking-[0.3em] uppercase text-[#D7AD62] font-semibold">
              Pillars of the Adventure
            </span>
            <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#D7AD62]/60" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-cinzel-dec font-bold tracking-[0.16em] text-gold-gradient">
            FORGED IN DARKNESS
          </h2>

          <div className="medieval-divider max-w-xs mx-auto py-2">
            <div className="rotate-45 w-2 h-2 border border-[#D7AD62] bg-[#E65B20]" />
          </div>

          <p className="font-serif text-base sm:text-lg text-[#F3E7D0]/80 italic">
            Engineered for relentless immersion, atmospheric dread, and visceral dark fantasy combat.
          </p>
        </div>

        {/* Four Feature Pillars Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isSelected = selectedPillar === idx;
            return (
              <div
                key={pillar.title}
                onClick={() => setSelectedPillar(idx)}
                className={`relative flex flex-col justify-between p-6 sm:p-7 rounded-lg border transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'border-[#D7AD62] bg-[#171311] shadow-[0_0_25px_rgba(215,173,98,0.25)] -translate-y-1'
                    : 'border-[#D7AD62]/20 bg-[#080706]/70 hover:border-[#D7AD62]/50 hover:bg-[#171311]/60'
                }`}
              >
                {/* Pillar Header with Icon */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div
                      className={`h-12 w-12 rounded-lg border flex items-center justify-center transition-colors duration-300 ${
                        isSelected
                          ? 'border-[#D7AD62] bg-[#080706] text-[#D7AD62] shadow-[0_0_12px_rgba(215,173,98,0.3)]'
                          : 'border-[#D7AD62]/30 bg-[#120E0D] text-[#C9A35E]'
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-[11px] font-cinzel tracking-widest text-[#D7AD62]/50">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg sm:text-xl font-cinzel font-bold tracking-wider text-gold-gradient">
                      {pillar.title}
                    </h3>
                    <p className="text-[11px] font-cinzel tracking-wider text-[#E65B20] uppercase font-semibold">
                      {pillar.tagline}
                    </p>
                  </div>

                  <p className="font-serif text-sm sm:text-base text-[#F3E7D0]/85 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Mechanics List */}
                <div className="pt-6 mt-6 border-t border-[#D7AD62]/15 space-y-2">
                  {pillar.mechanics.map((mech, mIdx) => (
                    <div key={mIdx} className="flex items-start gap-2 text-xs font-serif text-[#C9A35E]/90">
                      <span className="text-[#E65B20] mt-0.5">•</span>
                      <span>{mech}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Pillar Highlight Banner */}
        <div className="mt-12 rounded-lg border border-[#D7AD62]/30 bg-gradient-to-r from-[#171311] via-[#120E0D] to-[#171311] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_10px_30px_rgba(0,0,0,0.7)]">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full border border-[#D7AD62] bg-[#080706] flex items-center justify-center text-[#D7AD62] shrink-0">
              <Zap className="h-6 w-6 text-[#E65B20] animate-pulse" />
            </div>
            <div>
              <span className="text-[10px] font-cinzel tracking-widest uppercase text-[#D7AD62]">
                Active Focus: {pillars[selectedPillar].title}
              </span>
              <p className="font-serif text-base sm:text-lg text-[#F3E7D0] italic">
                Experience next-generation kinetic impact with reactive ragdoll physics and volumetric fire shaders.
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <a
              href="#community"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded border border-[#D7AD62]/80 bg-[#080706] text-xs font-cinzel font-bold tracking-widest text-[#D7AD62] hover:bg-[#D7AD62] hover:text-[#080706] transition-all"
            >
              <Crosshair className="h-4 w-4" />
              JOIN BETA TESTING
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
