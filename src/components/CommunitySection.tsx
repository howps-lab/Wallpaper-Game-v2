import React, { useState } from 'react';
import { Swords, Flame, Sparkles, Shield, Check, MessageSquare, ExternalLink, Bookmark } from 'lucide-react';

interface CommunitySectionProps {
  onAnswerCall: () => void;
}

export const COMMUNITY_CONFIG = {
  discord: 'https://discord.gg/dreadknight',
  steamWishlist: 'https://store.steampowered.com/app/dreadknight',
  youtube: 'https://youtube.com/@dreadknightgame',
  twitter: 'https://twitter.com/dreadknightgame',
};

export const CommunitySection: React.FC<CommunitySectionProps> = ({ onAnswerCall }) => {
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <section
      id="community"
      className="relative w-full py-32 px-4 sm:px-6 lg:px-8 bg-[#080706] text-[#F3E7D0] overflow-hidden"
    >
      {/* Background fiery ambiance */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(230,91,32,0.15)_0%,rgba(111,23,19,0.1)_40%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D7AD62]/30 to-transparent" />

      {/* Atmospheric center shield silhouette watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-5 pointer-events-none">
        <img src="/dreadknight-logo.png" alt="" className="w-full h-full object-contain filter invert" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3">
          <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D7AD62]/60" />
          <span className="text-xs font-cinzel tracking-[0.3em] uppercase text-[#E65B20] font-semibold">
            The Final Reckoning
          </span>
          <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#D7AD62]/60" />
        </div>

        {/* Section Heading */}
        <h2 className="text-4xl sm:text-6xl font-cinzel-dec font-extrabold tracking-[0.16em] text-gold-gradient drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]">
          THE KINGDOM IS WAITING
        </h2>

        {/* Divider */}
        <div className="medieval-divider max-w-xs mx-auto py-1">
          <div className="rotate-45 w-2 h-2 border border-[#D7AD62] bg-[#E65B20]" />
        </div>

        {/* Supporting Text */}
        <p className="max-w-2xl mx-auto font-serif text-lg sm:text-2xl text-[#F3E7D0]/90 leading-relaxed italic">
          &ldquo;The flames are rising. The old gods are stirring. And the final oath has yet to be fulfilled.&rdquo;
        </p>

        {/* Primary CTA and Secondary Link */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-5">
          <button
            onClick={onAnswerCall}
            className="w-full sm:w-auto relative group overflow-hidden rounded border border-[#D7AD62] bg-gradient-to-r from-[#D7AD62] via-[#E5C37E] to-[#C9A35E] px-10 py-4 text-xs sm:text-sm font-cinzel font-bold tracking-[0.25em] text-[#080706] shadow-[0_0_30px_rgba(215,173,98,0.45)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(230,91,32,0.6)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D7AD62]"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Swords className="h-4 w-4" />
              ANSWER THE CALL
            </span>
            <div className="absolute inset-0 bg-[#E65B20] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </button>

          <a
            href={COMMUNITY_CONFIG.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded border border-[#D7AD62]/40 bg-[#171311]/80 text-xs sm:text-sm font-cinzel font-semibold tracking-[0.22em] text-[#D7AD62] hover:border-[#D7AD62] hover:bg-[#171311] hover:text-[#FFF] transition-all"
          >
            <MessageSquare className="h-4 w-4" />
            FOLLOW THE CHRONICLES
          </a>
        </div>

        {/* Community Hub Channels */}
        <div className="pt-16 border-t border-[#D7AD62]/20">
          <p className="text-xs font-cinzel tracking-[0.25em] text-[#C9A35E]/80 uppercase mb-6">
            Join the Order of Dreadknights
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <a
              href={COMMUNITY_CONFIG.steamWishlist}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded border border-[#D7AD62]/20 bg-[#120E0D] hover:border-[#D7AD62] hover:bg-[#171311] transition-all text-center group"
            >
              <Bookmark className="h-5 w-5 mx-auto mb-2 text-[#D7AD62] group-hover:scale-110 transition-transform" />
              <span className="block text-xs font-cinzel font-semibold tracking-wider text-[#F3E7D0]">Steam Wishlist</span>
              <span className="text-[10px] text-[#C9A35E]/70 font-cinzel">Add to Library</span>
            </a>

            <a
              href={COMMUNITY_CONFIG.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded border border-[#D7AD62]/20 bg-[#120E0D] hover:border-[#D7AD62] hover:bg-[#171311] transition-all text-center group"
            >
              <MessageSquare className="h-5 w-5 mx-auto mb-2 text-[#E65B20] group-hover:scale-110 transition-transform" />
              <span className="block text-xs font-cinzel font-semibold tracking-wider text-[#F3E7D0]">Discord Hall</span>
              <span className="text-[10px] text-[#C9A35E]/70 font-cinzel">Lore &amp; Guilds</span>
            </a>

            <a
              href={COMMUNITY_CONFIG.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded border border-[#D7AD62]/20 bg-[#120E0D] hover:border-[#D7AD62] hover:bg-[#171311] transition-all text-center group"
            >
              <Flame className="h-5 w-5 mx-auto mb-2 text-[#6F1713] group-hover:scale-110 transition-transform" />
              <span className="block text-xs font-cinzel font-semibold tracking-wider text-[#F3E7D0]">Chronicles</span>
              <span className="text-[10px] text-[#C9A35E]/70 font-cinzel">Teasers &amp; OST</span>
            </a>

            <button
              onClick={handleShare}
              className="p-4 rounded border border-[#D7AD62]/20 bg-[#120E0D] hover:border-[#D7AD62] hover:bg-[#171311] transition-all text-center group"
            >
              <ExternalLink className="h-5 w-5 mx-auto mb-2 text-[#D7AD62] group-hover:scale-110 transition-transform" />
              <span className="block text-xs font-cinzel font-semibold tracking-wider text-[#F3E7D0]">
                {copiedLink ? 'Link Copied!' : 'Summon Ally'}
              </span>
              <span className="text-[10px] text-[#C9A35E]/70 font-cinzel">Share Realm</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
