import React from 'react';
import PrayerView from '@/components/prayer/PrayerView';

export default function PrayerPage() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] selection:bg-[#c5a075] selection:text-white">
      <main>
        <PrayerView />
      </main>
    </div>
  );
}
