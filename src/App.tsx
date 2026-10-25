/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StorySection } from './components/StorySection';
import { WorldSection } from './components/WorldSection';
import { FeaturesSection } from './components/FeaturesSection';
import { CommunitySection } from './components/CommunitySection';
import { Footer } from './components/Footer';
import { TrailerModal } from './components/TrailerModal';
import { OathModal } from './components/OathModal';

export default function App() {
  const [trailerOpen, setTrailerOpen] = useState(false);
  const [oathModalOpen, setOathModalOpen] = useState(false);

  const handleEnterRealm = () => {
    setOathModalOpen(true);
  };

  const handleOpenTrailer = () => {
    setTrailerOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#080706] text-[#F3E7D0] selection:bg-[#E65B20]/30 selection:text-[#D7AD62] relative">
      {/* Top Fixed Navigation */}
      <Navbar onEnterRealm={handleEnterRealm} />

      {/* Main Content Sections */}
      <main>
        {/* Full Viewport Opening Scene: Flaming Shield + Knight Artwork */}
        <HeroSection
          onEnterRealm={handleEnterRealm}
          onOpenTrailer={handleOpenTrailer}
        />

        {/* Section 2: The Ashen Oath Storyline */}
        <StorySection onOpenTrailer={handleOpenTrailer} />

        {/* Section 3: A Kingdom Consumed By Darkness — Locations */}
        <WorldSection />

        {/* Section 4: Forged In Darkness — Gameplay Pillars */}
        <FeaturesSection />

        {/* Section 5: The Kingdom Is Waiting — Community & Final CTA */}
        <CommunitySection onAnswerCall={handleEnterRealm} />
      </main>

      {/* Atmospheric Footer */}
      <Footer />

      {/* Interactive Modals */}
      <TrailerModal
        isOpen={trailerOpen}
        onClose={() => setTrailerOpen(false)}
      />

      <OathModal
        isOpen={oathModalOpen}
        onClose={() => setOathModalOpen(false)}
      />
    </div>
  );
}
