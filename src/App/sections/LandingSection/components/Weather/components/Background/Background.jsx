import React from 'react';

import './Background.css';

export default function Background() {
  const imgSrc =
    'https://images.unsplash.com/photo-1556763947-80fd07e395ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2090&q=80';

  return (
    <div className="weather__background">
      <img src={imgSrc} alt="Sydney" />
    </div>
  );
}
