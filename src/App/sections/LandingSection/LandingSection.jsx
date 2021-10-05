import React from 'react';

import { Weather, Transition } from './components';
import './LandingSection.css';

export default function LandingSection() {
  return (
    <section className="landing-section">
      <Weather />
      <Transition />
    </section>
  );
}
