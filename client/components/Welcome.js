import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="flexer">
      <h1>The</h1>
      <h1>Great</h1>
      <h1>Guessing Game</h1>
      <Link to="/settings">
        <button style={{ width: '100%' }} type="button" className="button">
          Begin
        </button>
      </Link>
    </div>
  );
};

export default Welcome;
