import React from 'react';

import { User, Repos, Emojis, Dashboard } from './components';
import './ReduxFun.css';

export default function ReduxFun() {
  return (
    <section className="redux_fun">
      <h2 className="redux_fun--title">
        Oh wait, did you just mentioned redux store? 🤔
      </h2>

      <h3 className="redux_fun--subtitle">🐣 Redux Example</h3>
      <User />
      <h3 className="redux_fun--subtitle">🐥 Redux Example with API Calls</h3>
      <Dashboard />
      <Repos />
      <Emojis />
    </section>
  );
}
