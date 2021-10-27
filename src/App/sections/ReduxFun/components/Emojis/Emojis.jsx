import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loadEmojis from './emojis.action';

import './Emojis.css';

function Emojis() {
  const { loading, emojis } = useSelector((state) => state.emojis);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadEmojis());
  }, []);

  if (loading) {
    return (
      <p className="redux_fun--loading">
        Loading list of emojis from Github...
      </p>
    );
  }

  return (
    <section className="redux_fun--emojis">
      <ul>
        {emojis &&
          Object.keys(emojis).map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={index}>
              <img src={emojis[item]} alt="" />
              {item}
            </li>
          ))}
      </ul>
    </section>
  );
}

export default Emojis;
