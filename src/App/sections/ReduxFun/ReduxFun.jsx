import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

import { User, Repos, Emojis, Dashboard } from './components';
import './ReduxFun.css';

export default function ReduxFun() {
  return (
    <section className="redux_fun">
      <h2 className="redux_fun--title">
        Oh wait, did you just mentioned redux store? 🤔
      </h2>
      <Router>
        <section className="redux_fun--api_examples">
          <h3 className="redux_fun--api_examples--title">
            🐣 Redux Example 🐥
          </h3>
          <div className="redux_fun--api_examples--menu">
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/user">User</NavLink>
            <NavLink to="/repos">Repos</NavLink>
            <NavLink to="/emojis">Emojis</NavLink>
          </div>
          <div className="redux_fun--api_examples--frame">
            <Switch>
              <Route path="/user" component={User} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/repos" component={Repos} />
              <Route path="/emojis" component={Emojis} />
            </Switch>
          </div>
        </section>
      </Router>
    </section>
  );
}
