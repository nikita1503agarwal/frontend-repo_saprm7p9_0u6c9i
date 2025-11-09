import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function AudioPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    const tryPlay = async () => {
      try {
        await a.play();
        setIsPlaying(true);
        setEnabled(true);
      } catch (_) {
        // Autoplay blocked; show control
        setEnabled(false);
      }
    };
    // Try to autoplay softly
    a.volume = 0.3;
    tryPlay();
  }, []);

  const toggle = async () => {
    const a = audioRef.current;
    if (!a) return;
    if (isPlaying) {
      a.pause();
      setIsPlaying(false);
    } else {
      try {
        await a.play();
        setIsPlaying(true);
      } catch (_) {
        // ignored
      }
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio
        ref={audioRef}
        src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_2e7b2e8af9.mp3?filename=gentle-piano-ambient-110997.mp3"
        loop
      />
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        onClick={toggle}
        className="rounded-full bg-white/90 backdrop-blur px-4 py-2 shadow-sm border border-rose-100 text-rose-700 hover:bg-white transition"
      >
        {isPlaying ? 'Pause music' : 'Play music'}
      </motion.button>
    </div>
  );
}
