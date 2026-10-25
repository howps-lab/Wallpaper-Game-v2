import React, { useState } from 'react';
import { X, Shield, Swords, Flame, Sparkles, Check, Scroll } from 'lucide-react';

interface OathModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DISCIPLINES = [
  {
    id: 'warden',
    name: 'Dread Warden',
    title: 'Bastion of the Sunken Fortress',
    description: 'Wields the colossal flameward shield and heavy morningstar. Immovable in the face of titanic abominations.',
    rune: 'ᛏ ᚺ ᛟ ᚱ ᚾ',
  },
  {
    id: 'reaver',
    name: 'Ashen Reaver',
    title: 'Cleaver of the Shattered Host',
    description: 'Twin jagged broadswords engulfed in smoldering magma. Dances across the battlefield with reckless fury.',
    rune: 'ᚲ ᛚ ᛖ ᚨ ᚡ',
  },
  {
    id: 'herald',
    name: 'Flame Herald',
    title: 'Inscriber of Primordial Runes',
    description: 'Channels the deep fire of Mount Vharos into burning glyphs and searing ranged starbursts.',
    rune: 'ᚠ ᛚ ᚨ ᛗ ᛖ',
  },
  {
    id: 'shadow',
    name: 'Shadowsworn',
    title: 'Stalker of the Ruined Spires',
    description: 'Cloaked in blackened ash and mist. Delivers lethal critical strikes before retreating into shadows.',
    rune: 'ᛋ ᚺ ᚨ ᛞ ᛟ',
  },
];

export const OathModal: React.FC<OathModalProps> = ({ isOpen, onClose }) => {
  const [knightName, setKnightName] = useState('');
  const [selectedDiscipline, setSelectedDiscipline] = useState(DISCIPLINES[0]);
  const [pledged, setPledged] = useState(false);

  if (!isOpen) return null;

  const handlePledge = (e: React.FormEvent) => {
    e.preventDefault();
    if (!knightName.trim()) return;
    setPledged(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/88 backdrop-blur-md animate-in fade-in duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="oath-modal-title"
    >
      <div className="relative w-full max-w-2xl rounded-xl border border-[#D7AD62] bg-[#100D0C] p-6 sm:p-8 shadow-[0_0_60px_rgba(215,173,98,0.3)] space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Oath Modal"
          className="absolute top-4 right-4 p-1.5 rounded-full border border-[#D7AD62]/30 text-[#D7AD62] hover:border-[#D7AD62] hover:bg-[#171311] transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {!pledged ? (
          <>
            {/* Header */}
            <div className="text-center space-y-2">
              <div className="inline-flex items-center justify-center p-2 rounded-full border border-[#D7AD62]/30 bg-[#171311] text-[#D7AD62] mb-1">
                <Shield className="h-6 w-6 text-[#E65B20]" />
              </div>
              <h3 id="oath-modal-title" className="text-2xl sm:text-3xl font-cinzel-dec font-bold text-gold-gradient">
                THE ASHEN OATH RITUAL
              </h3>
              <p className="font-serif text-sm sm:text-base text-[#F3E7D0]/80 italic">
                Inscribe your name into the Codex of Eldrath and bind your soul to the burning shield.
              </p>
            </div>

            <form onSubmit={handlePledge} className="space-y-6">
              {/* Name Input */}
              <div className="space-y-2">
                <label htmlFor="knight-name" className="block text-xs font-cinzel tracking-widest text-[#D7AD62] uppercase">
                  Knight Title &amp; Name
                </label>
                <input
                  id="knight-name"
                  type="text"
                  required
                  placeholder="e.g. Sir Gareth the Ironbound"
                  value={knightName}
                  onChange={(e) => setKnightName(e.target.value)}
                  className="w-full rounded border border-[#D7AD62]/40 bg-[#080706] px-4 py-3 text-sm font-serif text-[#F3E7D0] placeholder-[#C9A35E]/40 focus:border-[#D7AD62] focus:outline-none focus:ring-1 focus:ring-[#D7AD62]"
                />
              </div>

              {/* Archetype Discipline Selection */}
              <div className="space-y-2">
                <label className="block text-xs font-cinzel tracking-widest text-[#D7AD62] uppercase">
                  Select Your Order Discipline
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {DISCIPLINES.map((d) => (
                    <button
                      type="button"
                      key={d.id}
                      onClick={() => setSelectedDiscipline(d)}
                      className={`p-3.5 rounded border text-left transition-all ${
                        selectedDiscipline.id === d.id
                          ? 'border-[#D7AD62] bg-[#171311] shadow-[0_0_15px_rgba(215,173,98,0.25)]'
                          : 'border-[#D7AD62]/20 bg-[#080706]/70 hover:border-[#D7AD62]/50 hover:bg-[#171311]/50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-cinzel text-xs font-bold text-[#F3E7D0]">
                          {d.name}
                        </span>
                        <span className="font-mono text-xs text-[#E65B20]">{d.rune}</span>
                      </div>
                      <p className="font-serif text-xs text-[#C9A35E]/90 italic">{d.title}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 rounded border border-[#D7AD62] bg-gradient-to-r from-[#D7AD62] via-[#E5C37E] to-[#C9A35E] font-cinzel text-xs sm:text-sm font-bold tracking-[0.25em] text-[#080706] shadow-[0_0_20px_rgba(215,173,98,0.4)] hover:shadow-[0_0_30px_rgba(230,91,32,0.6)] transition-all flex items-center justify-center gap-2"
              >
                <Swords className="h-4 w-4" />
                SEAL THE BLOOD OATH
              </button>
            </form>
          </>
        ) : (
          /* Sealed Oath Scroll Display */
          <div className="text-center space-y-6 py-4 animate-in zoom-in-95 duration-300">
            <div className="inline-flex items-center justify-center p-3 rounded-full border border-[#D7AD62] bg-[#080706] text-[#D7AD62]">
              <Flame className="h-8 w-8 text-[#E65B20] animate-pulse" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-cinzel tracking-[0.3em] uppercase text-[#E65B20]">
                Decree Inscribed
              </span>
              <h3 className="text-2xl sm:text-3xl font-cinzel font-bold text-gold-gradient">
                THE OATH IS RECORDED
              </h3>
            </div>

            <div className="p-6 rounded-lg border border-[#D7AD62]/40 bg-[#080706]/90 space-y-3 max-w-md mx-auto text-left shadow-2xl">
              <div className="flex justify-between items-center text-xs font-cinzel text-[#C9A35E] border-b border-[#D7AD62]/20 pb-2">
                <span>ORDER: {selectedDiscipline.name.toUpperCase()}</span>
                <span>SIGIL: {selectedDiscipline.rune}</span>
              </div>
              <p className="font-serif text-lg text-[#F3E7D0] italic">
                &ldquo;Let it be witnessed across Eldrath that <strong>{knightName}</strong> has sworn to bear the cursed flame and defend humanity against the Nameless God.&rdquo;
              </p>
              <div className="pt-2 text-[11px] font-cinzel text-[#E65B20] tracking-wider">
                STATUS: CONSECRATED FOR THE COMING NIGHT
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={onClose}
                className="px-8 py-2.5 rounded border border-[#D7AD62] bg-[#171311] font-cinzel text-xs font-bold tracking-widest text-[#D7AD62] hover:bg-[#D7AD62] hover:text-[#080706] transition-all"
              >
                WALK FORTH INTO ELDRATH
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
