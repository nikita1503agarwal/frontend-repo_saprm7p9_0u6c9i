import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const floating = {
  initial: { y: 0 },
  animate: (i) => ({
    y: [0, -12, 0],
    transition: { duration: 5 + i, repeat: Infinity, ease: 'easeInOut' },
  }),
};

const Sticker = ({ children, className = '', delay = 0 }) => (
  <motion.div
    custom={delay}
    variants={floating}
    initial="initial"
    animate="animate"
    className={`absolute text-3xl md:text-4xl ${className}`}
  >
    {children}
  </motion.div>
);

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/kqB-rdL4TCJ7pyGb/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient veil to blend with palette */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-pink-100/60 via-rose-50/50 to-rose-100/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-semibold text-4xl sm:text-5xl md:text-6xl leading-tight"
            style={{
              fontFamily: 'Mona Sans, Manrope, Inter, system-ui, sans-serif',
            }}
          >
            <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Happy 19th Birthday, My Love!
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 text-rose-700/80 text-base sm:text-lg"
          >
            Wishing you a day as sweet and beautiful as you are.
          </motion.p>
        </div>
      </div>

      {/* Floating cute stickers */}
      <Sticker className="left-6 top-10">💖</Sticker>
      <Sticker className="right-8 top-24" delay={1}>🎂</Sticker>
      <Sticker className="left-10 bottom-24" delay={2}>✨</Sticker>
      <Sticker className="right-12 bottom-12" delay={3}>🧸</Sticker>
      <Sticker className="left-1/2 top-1/3" delay={1.5}>💞</Sticker>
    </section>
  );
}
