import React, { useState } from 'react';
import { Scroll, Flame, Shield, Sparkles, BookOpen, Play } from 'lucide-react';

interface StorySectionProps {
  onOpenTrailer?: () => void;
}

export const StorySection: React.FC<StorySectionProps> = ({ onOpenTrailer }) => {
  const [activeLore, setActiveLore] = useState<number>(0);

  const loreItems = [
    {
      title: 'THE IMPRISONED GOD',
      subtitle: 'The Root of the First Flame',
      snippet:
        'Beneath the molten roots of Mount Vharos, the ancient god of devastation was bound by seven unbreakable tether-seals. For an era, peace was maintained through vigilant sacrifice — until the last warden broke faith.',
      runes: 'ᚨ ᛊ ᚺ ᛖ ᚾ',
    },
    {
      title: 'THE BROKEN CROWN',
      subtitle: 'The Ruin of Eldrath',
      snippet:
        'When the final king shattered his crown upon the altar of blood, the sky split open. Castles turned to burning embers in a single night, and the royal lineage was forever cursed to wander as ash-wraiths.',
      runes: 'ᚲ ᚱ ᛟ ᚹ ᚾ',
    },
    {
      title: 'THE CURSED ARMOR',
      subtitle: 'The Living Iron',
      snippet:
        'Forged in dark sorcery, the dreadplate fuses with the knight’s soul. It heals mortal wounds by drinking the heat of nearby fires, leaving behind a cold, relentless warrior who can neither die nor rest.',
      runes: 'ᛈ ᛚ ᚨ ᛏ ᛖ',
    },
    {
      title: 'THE STAR-FORGED BLADE',
      subtitle: 'Bane of the Awakened',
      snippet:
        'Quenched in the heart of a fallen celestial star, this greatsword retains an unbearable radiant heat. It is the only weapon capable of cleaving through god-flesh and banishing the encroaching nightmare.',
      runes: 'ᛒ ᛚ ᚨ ᛞ ᛖ',
    },
  ];

  return (
    <section
      id="story"
      className="relative w-full py-28 px-4 sm:px-6 lg:px-8 bg-[#080706] text-[#F3E7D0] overflow-hidden"
    >
      {/* Dark stone and flame aura background styling */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(111,23,19,0.18)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#080706] to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#080706] to-transparent pointer-events-none" />

      {/* Center ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E65B20]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D7AD62]/60" />
            <span className="text-xs font-cinzel tracking-[0.3em] uppercase text-[#D7AD62] font-semibold">
              Chronicles of Eldrath
            </span>
            <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#D7AD62]/60" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-cinzel-dec font-bold tracking-[0.16em] text-gold-gradient">
            THE ASHEN OATH
          </h2>

          {/* Ornamental Divider */}
          <div className="medieval-divider max-w-md mx-auto py-2">
            <div className="rotate-45 w-2 h-2 border border-[#D7AD62] bg-[#E65B20]" />
          </div>

          {/* Prologue Teaser Button shifted from Hero */}
          {onOpenTrailer && (
            <div className="pt-2">
              <button
                onClick={onOpenTrailer}
                className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full border border-[#D7AD62]/60 bg-[#171311]/90 backdrop-blur-md text-xs sm:text-sm font-cinzel tracking-[0.2em] text-[#D7AD62] hover:border-[#D7AD62] hover:bg-[#1f1917] hover:scale-105 transition-all shadow-[0_0_20px_rgba(215,173,98,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D7AD62]"
              >
                <Play className="h-3.5 w-3.5 fill-current text-[#E65B20]" />
                <span>WATCH PROLOGUE TEASER</span>
              </button>
            </div>
          )}
        </div>

        {/* Story Prose Presentation */}
        <div className="mt-12 max-w-3xl mx-auto space-y-8 text-center sm:text-justify">
          <p className="text-lg sm:text-2xl font-serif italic text-[#F3E7D0] leading-relaxed drop-shadow-md first-letter:text-5xl first-letter:font-cinzel first-letter:text-[#D7AD62] first-letter:mr-2 first-letter:float-left">
            Before the kingdoms were divided, seven ancient wardens sealed a nameless god beneath the mountain of Vharos. Their pact held for a thousand years — until the crown was broken and the first flame returned.
          </p>

          <p className="text-base sm:text-xl font-serif text-[#F3E7D0]/85 leading-relaxed">
            Now, the dead march beneath forgotten banners. The surviving lords bargain with forbidden powers. And somewhere beneath the ruined citadel, a voice calls the Dreadknight by a name he no longer remembers.
          </p>

          <div className="p-6 sm:p-8 rounded-lg border border-[#D7AD62]/20 bg-[#171311]/70 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.6)] text-center space-y-3">
            <p className="font-cinzel text-sm sm:text-base tracking-[0.2em] text-[#D7AD62] uppercase">
              The Law of Sacrifice
            </p>
            <p className="font-serif text-lg sm:text-xl text-[#F3E7D0] italic">
              &ldquo;Every oath demands a sacrifice. Every legend begins with a choice.&rdquo;
            </p>
            <div className="flex items-center justify-center gap-2 pt-2 text-[#E65B20]">
              <Flame className="h-4 w-4 animate-pulse" />
              <span className="text-[11px] font-cinzel tracking-widest text-[#C9A35E]">
                The flame cannot be quelled; it can only be borne.
              </span>
              <Flame className="h-4 w-4 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Interactive Lore Codex / Ancient Tomes */}
        <div className="mt-20 border-t border-[#D7AD62]/20 pt-16">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-cinzel tracking-[0.2em] text-gold-gradient">
              THE ASHEN CODEX
            </h3>
            <p className="text-xs sm:text-sm font-serif italic text-[#C9A35E]/80 mt-1">
              Select an inscribed record from the ruins
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {loreItems.map((item, idx) => (
              <button
                key={item.title}
                onClick={() => setActiveLore(idx)}
                className={`p-3 sm:p-4 rounded border text-left transition-all duration-300 ${
                  activeLore === idx
                    ? 'border-[#D7AD62] bg-[#171311] shadow-[0_0_15px_rgba(215,173,98,0.25)]'
                    : 'border-[#D7AD62]/20 bg-[#080706]/60 hover:border-[#D7AD62]/50 hover:bg-[#171311]/40'
                }`}
              >
                <div className="flex items-center justify-between text-[#D7AD62] mb-1">
                  <span className="text-[10px] font-cinzel tracking-widest opacity-60">
                    CODEX 0{idx + 1}
                  </span>
                  <span className="text-xs tracking-widest text-[#E65B20] font-mono">
                    {item.runes}
                  </span>
                </div>
                <h4
                  className={`text-xs sm:text-sm font-cinzel font-semibold tracking-wider ${
                    activeLore === idx ? 'text-[#F3E7D0]' : 'text-[#F3E7D0]/70'
                  }`}
                >
                  {item.title}
                </h4>
              </button>
            ))}
          </div>

          {/* Active Lore Detail Box */}
          <div className="relative rounded-lg border border-[#D7AD62]/30 bg-gradient-to-b from-[#171311]/90 to-[#080706]/90 p-6 sm:p-8 backdrop-blur-md shadow-2xl">
            <div className="flex items-start gap-4">
              <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-full border border-[#D7AD62]/40 bg-[#080706] text-[#D7AD62] shrink-0">
                <BookOpen className="h-6 w-6" />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-cinzel text-[#E65B20] tracking-widest uppercase">
                    {loreItems[activeLore].subtitle}
                  </span>
                </div>
                <h4 className="text-xl sm:text-2xl font-cinzel font-bold text-gold-gradient">
                  {loreItems[activeLore].title}
                </h4>
                <p className="text-base sm:text-lg font-serif text-[#F3E7D0]/90 leading-relaxed">
                  {loreItems[activeLore].snippet}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
