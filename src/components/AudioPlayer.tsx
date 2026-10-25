import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Playback blocked or failed gracefully
          setIsPlaying(false);
        });
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.35;
    audio.loop = true;

    return () => {
      audio.pause();
    };
  }, []);

  return (
    <div className="relative flex items-center">
      <audio ref={audioRef} src="/audio/ambient-theme.mp3" preload="none" />
      <button
        onClick={toggleAudio}
        aria-label={isPlaying ? 'Mute ambient soundtrack' : 'Play ambient atmospheric soundtrack'}
        title={isPlaying ? 'Mute ambient soundtrack' : 'Play ambient atmospheric soundtrack'}
        className={`group relative flex items-center gap-2 rounded border px-3 py-1.5 text-xs font-cinzel uppercase tracking-widest transition-all duration-300 ${
          isPlaying
            ? 'border-[#D7AD62]/60 bg-[#171311]/90 text-[#D7AD62] shadow-[0_0_15px_rgba(215,173,98,0.25)]'
            : 'border-[#D7AD62]/20 bg-[#080706]/70 text-[#F3E7D0]/70 hover:border-[#D7AD62]/40 hover:text-[#D7AD62]'
        }`}
      >
        {isPlaying ? (
          <>
            <Volume2 className="h-4 w-4 text-[#D7AD62] animate-pulse" />
            <span className="hidden sm:inline">Theme: Playing</span>
            <span className="flex items-end gap-0.5 h-3">
              <span className="w-0.5 bg-[#D7AD62] h-full animate-[pulse_1s_infinite_100ms]" />
              <span className="w-0.5 bg-[#E65B20] h-2/3 animate-[pulse_1s_infinite_200ms]" />
              <span className="w-0.5 bg-[#D7AD62] h-full animate-[pulse_1s_infinite_300ms]" />
            </span>
          </>
        ) : (
          <>
            <VolumeX className="h-4 w-4" />
            <span className="hidden sm:inline">Theme: Muted</span>
          </>
        )}
      </button>
    </div>
  );
};
