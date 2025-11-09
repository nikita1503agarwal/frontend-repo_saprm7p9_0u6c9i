import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sampleImages = [
  'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1533139502658-0198f920d8ae?q=80&w=1600&auto=format&fit=crop',
];

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const images = sampleImages; // replace with your own later

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-rose-700"
          style={{ fontFamily: 'Manrope, Inter, system-ui, sans-serif' }}
        >
          Our Sweet Memories
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 gap-6">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-rose-100 bg-rose-50">
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={images[index]}
                alt="Memory"
                className="h-full w-full object-cover"
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-rose-900/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4">
              <button
                onClick={prev}
                className="rounded-full bg-white/80 hover:bg-white text-rose-700 px-4 py-2 backdrop-blur shadow-sm transition"
                aria-label="Previous"
              >
                ‹
              </button>
              <button
                onClick={next}
                className="rounded-full bg-white/80 hover:bg-white text-rose-700 px-4 py-2 backdrop-blur shadow-sm transition"
                aria-label="Next"
              >
                ›
              </button>
            </div>
          </div>
          <p className="text-center text-rose-700/70">You can replace these images with your own favorites.</p>
        </div>
      </div>
    </section>
  );
}
