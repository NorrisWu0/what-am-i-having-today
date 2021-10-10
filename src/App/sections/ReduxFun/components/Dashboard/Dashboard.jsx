import React from 'react';
import { useSelector } from 'react-redux';

import './Dashboard.css';

export default function Dashboard() {
  const { countRepos, countEmojis } = useSelector((state) => ({
    countRepos: state.repos.repos.length,
    countEmojis: Object.keys(state.emojis.emojis).length
  }));

  return (
    <section className="redux_fun--dashboard">
      <h2>Number of Repository In your Account: {countRepos}</h2>
      <h2>Number of Emojis on Github API: {countEmojis}</h2>
    </section>
  );
}
