import React from 'react';
import Hero from './components/Hero';
import MainMessage from './components/MainMessage';
import Gallery from './components/Gallery';
import AudioPlayer from './components/AudioPlayer';

export default function App() {
  return (
    <div className="bg-gradient-to-b from-rose-50 via-pink-50 to-rose-100 text-rose-900 min-h-screen">
      <Hero />
      <MainMessage />
      <Gallery />
      <AudioPlayer />
      <footer className="py-10 text-center text-rose-600/80">
        Made with love ♡
      </footer>
    </div>
  );
}
