import React, { useState } from 'react';
import { Shield, ChevronUp, Swords, BookOpen, Lock } from 'lucide-react';
import { COMMUNITY_CONFIG } from './CommunitySection';

export const Footer: React.FC = () => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050403] border-t border-[#D7AD62]/20 text-[#F3E7D0] pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-[#D7AD62]/10 text-center md:text-left">
          {/* Brand Info */}
          <div className="space-y-3 max-w-sm">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="h-8 w-8 rounded border border-[#D7AD62]/40 bg-[#120E0D] flex items-center justify-center">
                <Shield className="h-4 w-4 text-[#D7AD62]" />
              </div>
              <span className="font-cinzel text-xl font-extrabold tracking-[0.25em] text-gold-gradient">
                DREADKNIGHT
              </span>
            </div>
            <p className="font-serif text-sm text-[#C9A35E]/80 italic">
              The Last Oath of a Dying Kingdom. An epic dark medieval fantasy adventure.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-xs font-cinzel tracking-[0.2em] text-[#F3E7D0]/70">
            <a href="#top" className="hover:text-[#D7AD62] transition-colors">HOME</a>
            <a href="#story" className="hover:text-[#D7AD62] transition-colors">THE STORY</a>
            <a href="#world" className="hover:text-[#D7AD62] transition-colors">THE WORLD</a>
            <a href="#features" className="hover:text-[#D7AD62] transition-colors">FEATURES</a>
            <a href="#community" className="hover:text-[#D7AD62] transition-colors">COMMUNITY</a>
          </div>

          {/* Back to Top */}
          <div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded border border-[#D7AD62]/30 bg-[#120E0D] text-xs font-cinzel tracking-widest text-[#D7AD62] hover:border-[#D7AD62] hover:bg-[#171311] transition-all"
            >
              <span>ASCEND</span>
              <ChevronUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-serif text-[#C9A35E]/60">
          <p>
            &copy; {new Date().getFullYear()} DREADKNIGHT Chronicles. Built with dark medieval fantasy precision.
          </p>

          <div className="flex items-center gap-4 text-xs font-cinzel">
            <button
              onClick={() => setLegalModal('privacy')}
              className="hover:text-[#D7AD62] transition-colors underline-offset-4 hover:underline"
            >
              PRIVACY POLICY
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => setLegalModal('terms')}
              className="hover:text-[#D7AD62] transition-colors underline-offset-4 hover:underline"
            >
              TERMS OF THE OATH
            </button>
          </div>
        </div>

        {/* Non-Affiliation Legal Note */}
        <p className="text-[10px] text-center text-[#F3E7D0]/30 font-serif">
          Dreadknight is an independent conceptual fantasy game project. All fictional characters, lore, and symbols are part of the original Dreadknight mythology. Not affiliated with any commercial publisher.
        </p>

      </div>

      {/* Legal Dialog Modal */}
      {legalModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-lg rounded-lg border border-[#D7AD62]/60 bg-[#120E0D] p-6 text-left shadow-2xl space-y-4">
            <h4 className="font-cinzel text-lg font-bold text-gold-gradient">
              {legalModal === 'privacy' ? 'PRIVACY ARCHIVES' : 'TERMS OF THE ASHEN OATH'}
            </h4>
            <p className="font-serif text-sm text-[#F3E7D0]/80 leading-relaxed italic">
              {legalModal === 'privacy'
                ? 'The Order of Dreadknights respects the sanctuary of every traveler. No secret telemetry, dark sorcery tracking cookies, or unauthorized records are stored beyond your client-side browser chamber.'
                : 'By crossing into the shattered realm of Eldrath, the bearer agrees to wield the sword in defense of the realm, to preserve the memory of the fallen, and to face the nameless darkness without yielding.'}
            </p>
            <div className="text-right pt-2">
              <button
                onClick={() => setLegalModal(null)}
                className="px-5 py-1.5 rounded border border-[#D7AD62] bg-[#080706] text-xs font-cinzel font-bold text-[#D7AD62] hover:bg-[#D7AD62] hover:text-[#080706] transition-all"
              >
                ACKNOWLEDGE
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
