import React from 'react';
import { motion } from 'framer-motion';

export default function MainMessage() {
  return (
    <section className="relative py-20 md:py-28 bg-rose-50/60">
      <div className="mx-auto max-w-3xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-rose-700"
          style={{
            fontFamily: 'Manrope, Inter, system-ui, sans-serif',
          }}
        >
          A Little Note From Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-6 rounded-2xl bg-white/70 backdrop-blur border border-rose-100 p-6 md:p-8 shadow-sm"
        >
          <p className="text-rose-900/90 leading-relaxed text-base md:text-lg">
            Write your heartfelt birthday message here. Share your favorite memories, the little things you love about her, and your dreams for the year ahead. This space is all yours—simple, sincere, and full of love.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
