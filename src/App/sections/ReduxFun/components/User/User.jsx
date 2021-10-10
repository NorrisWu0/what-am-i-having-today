import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeUsername, updateStatus } from './user.action';

import './User.css';

export default function User() {
  const { username, status, gender } = useSelector((state) => state.user);

  const handleUsernameChanges = (event) => {
    event.preventDefault();
    useDispatch(
      changeUsername({
        username: 'woooof'
      })
    );
  };

  const handleStatusUpdate = (event) => {
    event.preventDefault();

    useDispatch(
      updateStatus({
        status: 'online'
      })
    );
  };
  return (
    <section className="redux_fun--user">
      <span className="redux_fun--user--state">
        {username}, {status}, {gender}
      </span>
      <span className="redux_fun--user--action">
        <button type="button" onClick={handleUsernameChanges}>
          Woof
        </button>
        <button type="button" onClick={handleStatusUpdate}>
          online
        </button>
      </span>
      No idea how to style this 🤷‍♂️
    </section>
  );
}
