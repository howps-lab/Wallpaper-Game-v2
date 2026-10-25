import React, { useRef, useState, useEffect } from 'react';
import { Compass } from 'lucide-react';
import { EmberParticles } from './EmberParticles';

interface HeroSectionProps {
  onEnterRealm?: () => void;
  onOpenTrailer?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoError, setVideoError] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      video.pause();
      return;
    }

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setVideoPlaying(true);
        })
        .catch(() => {
          // Browser prevented autoplay or video failed
          setVideoPlaying(false);
        });
    }
  }, []);

  const scrollToStory = () => {
    const storyElem = document.getElementById('story');
    if (storyElem) {
      storyElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="top"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#080706] pt-16 sm:pt-20 pb-12"
    >
      {/* LAYER 1: Base Black Background */}
      <div className="absolute inset-0 bg-[#080706] z-0" />

      {/* LAYER 2: Flaming-Shield Video (Continuous Loop) - End-to-end on mobile, scaled on desktop */}
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none w-full h-full">
        <div className="relative w-full h-full flex items-center justify-center scale-100 md:scale-[0.70] origin-center">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/images/flaming-shield-poster.jpg"
            onError={() => setVideoError(true)}
            className={`h-full w-full min-w-full min-h-full object-cover object-center transition-opacity duration-1000 ${
              videoPlaying ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <source src="/flaming-shield.mp4" type="video/mp4" />
          </video>

          {/* Static Background Fallback if Video Autoplay is blocked or during load */}
          {(!videoPlaying || videoError) && (
            <div
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-700 opacity-95"
              style={{ backgroundImage: `url('/images/flaming-shield-poster.jpg')` }}
            />
          )}
        </div>
      </div>

      {/* LAYER 3: Deep Red and Black Atmospheric Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-[#080706] via-[#080706]/40 to-[#080706]/20" />
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-[#080706]/60 via-transparent to-[#080706]" />

      {/* LAYER 4: Radial Light & Heat Glow around Center Shield */}
      <div
        className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(230,91,32,0.22)_0%,rgba(111,23,19,0.15)_45%,transparent_75%)] animate-pulse"
        style={{ animationDuration: '6s' }}
      />

      {/* LAYER 5: Foreground Knight Artwork - Reduced by 20% for balanced composition */}
      {/* Positioned centrally in the hero composition so the shield flames roar behind him */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <div className="relative w-full max-w-3xl h-full flex items-center justify-center pt-8 sm:pt-12">
          <div className="relative w-auto max-h-[68vh] lg:max-h-[74vh] aspect-[3/4] flex items-center justify-center">
            {/* Knight Drop Shadow & Rim Lighting Effect */}
            <div className="absolute inset-x-12 bottom-6 h-12 bg-black/80 blur-2xl rounded-full" />
            <img
              src="/hero_art.png"
              alt="The Dreadknight in cursed plate armor"
              className="relative z-10 max-h-[60vh] sm:max-h-[65vh] lg:max-h-[70vh] w-auto object-contain filter drop-shadow-[0_0_35px_rgba(230,91,32,0.4)] transition-transform duration-700 hover:scale-[1.01]"
              loading="eager"
            />
            {/* Soft ground blending gradient */}
            <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#080706] via-[#080706]/70 to-transparent z-20" />
          </div>
        </div>
      </div>

      {/* LAYER 6: Floating Embers and Ash Particles */}
      <EmberParticles density={40} className="z-20" />

      {/* LAYER 8: Vignette around screen edges */}
      <div className="absolute inset-0 z-20 pointer-events-none shadow-[inset_0_0_120px_rgba(0,0,0,0.9)]" />

      {/* LAYER 7: Typography, Story Text, and CTA Buttons */}
      <div className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-between min-h-[85vh] w-full">
        
        {/* Top Header Eyebrow & Main Title Block - Positioned just below top banner */}
        <div className="pt-1 sm:pt-2 space-y-2">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-[#D7AD62]/70" />
            <p className="text-[10px] sm:text-xs font-cinzel tracking-[0.35em] text-[#D7AD62] uppercase font-semibold">
              An Age of Ashes
            </p>
            <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-[#D7AD62]/70" />
          </div>

          {/* Main Title: DREADKNIGHT (reduced by 40%) */}
          <div className="relative">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-cinzel-dec tracking-[0.18em] text-gold-gradient drop-shadow-[0_10px_20px_rgba(0,0,0,0.95)]">
              DREADKNIGHT
            </h1>
            <div className="absolute -inset-1 blur-xl opacity-30 bg-[#E65B20] -z-10 pointer-events-none" />
          </div>

          {/* Decorative medieval separator */}
          <div className="flex items-center justify-center gap-4 py-1">
            <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-r from-transparent via-[#D7AD62]/60 to-[#D7AD62]" />
            <div className="rotate-45 w-2 h-2 border border-[#D7AD62] bg-[#E65B20]" />
            <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-l from-transparent via-[#D7AD62]/60 to-[#D7AD62]" />
          </div>
        </div>

        {/* Center buffer area allowing knight & shield full visual impact */}
        <div className="my-auto py-8 lg:py-20 pointer-events-none select-none" />

        {/* Bottom Hero Actions */}
        <div className="max-w-3xl space-y-6 pb-4">
          {/* Call-to-Action */}
          <div className="flex items-center justify-center pt-2">
            <button
              onClick={scrollToStory}
              className="w-full sm:w-auto relative group rounded border border-[#D7AD62]/40 bg-[#080706]/80 px-8 py-3.5 text-xs sm:text-sm font-cinzel font-semibold tracking-[0.22em] text-[#F3E7D0] transition-all duration-300 hover:border-[#D7AD62] hover:bg-[#171311] hover:text-[#D7AD62] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D7AD62]"
            >
              <span className="flex items-center justify-center gap-2">
                <Compass className="h-4 w-4 text-[#D7AD62] transition-transform duration-300 group-hover:rotate-180" />
                DISCOVER THE STORY
              </span>
            </button>
          </div>

          {/* Platform & Status Notice */}
          <div className="flex items-center justify-center gap-4 text-[11px] font-cinzel tracking-widest text-[#F3E7D0]/60 pt-2">
            <span>PC &amp; NEXT-GEN CONSOLES</span>
            <span aria-hidden="true">·</span>
            <span>UNREAL ENGINE 5</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#E65B20]">COMING 2026</span>
          </div>
        </div>

      </div>
    </section>
  );
};
