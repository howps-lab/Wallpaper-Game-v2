import React, { useRef, useState, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Shield, Swords } from 'lucide-react';

interface TrailerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TrailerModal: React.FC<TrailerModalProps> = ({ isOpen, onClose }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [currentChapter, setCurrentChapter] = useState(0);

  const chapters = [
    { title: 'The Fall of Vharos', time: 0, text: 'Before the light surrendered, the wardens swore blood upon iron.' },
    { title: 'The Shattered Aegis', time: 2, text: 'The ancient shield burns with the wrath of an imprisoned deity.' },
    { title: 'The Soulbound Awakens', time: 4, text: 'Bound by ash. Cursed to stand when all empires collapse.' },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsPlaying(true);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => setIsPlaying(false));
      }
    } else {
      document.body.style.overflow = 'auto';
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/92 backdrop-blur-xl animate-in fade-in duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="trailer-title"
    >
      <div className="relative w-full max-w-5xl rounded-xl border border-[#D7AD62]/60 bg-[#080706] shadow-[0_0_60px_rgba(215,173,98,0.3)] overflow-hidden">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#D7AD62]/20 bg-[#120E0D]">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-[#D7AD62]" />
            <h3 id="trailer-title" className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.2em] text-gold-gradient">
              SOULBOUND — OFFICIAL CINEMATIC PROLOGUE
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Cinematic Prologue"
            className="p-1.5 rounded-full border border-[#D7AD62]/30 text-[#D7AD62] hover:border-[#D7AD62] hover:bg-[#171311] transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Cinematic Video Player Container */}
        <div className="relative aspect-video w-full bg-black overflow-hidden">
          <video
            ref={videoRef}
            src="/flaming-shield.mp4"
            loop
            playsInline
            autoPlay
            poster="/images/flaming-shield-poster.jpg"
            onTimeUpdate={() => {
              if (videoRef.current) {
                const ct = videoRef.current.currentTime;
                if (ct > 4) setCurrentChapter(2);
                else if (ct > 2) setCurrentChapter(1);
                else setCurrentChapter(0);
              }
            }}
            className="h-full w-full object-cover"
          />

          {/* Cinematic Letterbox Bars */}
          <div className="absolute top-0 inset-x-0 h-6 sm:h-10 bg-black/80 pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-6 sm:h-10 bg-black/80 pointer-events-none" />

          {/* Dramatic Prologue Text Reveal */}
          <div className="absolute bottom-12 inset-x-4 sm:inset-x-12 text-center pointer-events-none">
            <div className="inline-block px-6 py-2.5 rounded bg-black/75 border border-[#D7AD62]/30 backdrop-blur-md transition-all duration-500">
              <span className="text-[10px] font-cinzel tracking-[0.3em] uppercase text-[#E65B20] block">
                {chapters[currentChapter].title}
              </span>
              <p className="font-serif text-sm sm:text-lg text-[#F3E7D0] italic mt-0.5">
                &ldquo;{chapters[currentChapter].text}&rdquo;
              </p>
            </div>
          </div>

          {/* Play/Pause Center Overlay on Pause */}
          {!isPlaying && (
            <div
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer"
            >
              <div className="h-16 w-16 rounded-full border border-[#D7AD62] bg-[#120E0D]/90 flex items-center justify-center text-[#D7AD62] shadow-[0_0_25px_rgba(215,173,98,0.5)]">
                <Play className="h-8 w-8 ml-1 fill-current" />
              </div>
            </div>
          )}
        </div>

        {/* Video Controls Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between px-5 py-3.5 bg-[#120E0D] border-t border-[#D7AD62]/20 gap-3">
          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause' : 'Play'}
              className="p-1.5 rounded border border-[#D7AD62]/30 text-[#D7AD62] hover:border-[#D7AD62] transition-colors"
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </button>
            <button
              onClick={toggleMute}
              aria-label={isMuted ? 'Unmute' : 'Mute'}
              className="p-1.5 rounded border border-[#D7AD62]/30 text-[#D7AD62] hover:border-[#D7AD62] transition-colors"
            >
              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </button>
            <span className="text-xs font-cinzel tracking-wider text-[#F3E7D0]/60">
              4K CINEMATIC IN-ENGINE CAPTURE
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-5 py-1.5 rounded border border-[#D7AD62] bg-[#171311] font-cinzel text-xs font-bold tracking-widest text-[#D7AD62] hover:bg-[#D7AD62] hover:text-[#080706] transition-all"
            >
              CLOSE PREVIEW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
