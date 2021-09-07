import React from 'react';

import Logo from './Logo/Logo';
import './Transition.css';

export default function Transition() {
  return (
    <div className="transition">
      <div className="transition__heading">
        <h2>So...</h2>
        <h1>What am i having today?</h1>
        <h3>
          Let me brings you.... <span>(imaginary drum roll)</span>{' '}
        </h3>
      </div>

      <Logo />
    </div>
  );
}
