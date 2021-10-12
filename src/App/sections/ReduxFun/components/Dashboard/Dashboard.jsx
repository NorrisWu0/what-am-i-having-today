import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import loadEmojis from '../Emojis/emojis.action';
import loadRepos from '../Repos/repos.action';

import './Dashboard.css';

export default function Dashboard() {
  const { storeCount, repoCount, emojiCount } = useSelector((state) => ({
    storeCount: Object.keys(state).length,
    repoCount: state.repos.repos.length,
    emojiCount: Object.keys(state.emojis.emojis).length
  }));

  console.log(storeCount);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!repoCount) dispatch(loadRepos());
    if (!emojiCount) dispatch(loadEmojis());
  }, []);

  return (
    <section className="redux_fun--dashboard">
      <ul>
        <li>Total of stores available: {storeCount}</li>
        <li>Number of Repository In your Account: {repoCount}</li>
        <li>Number of Emojis on Github API: {emojiCount}</li>
      </ul>
    </section>
  );
}
