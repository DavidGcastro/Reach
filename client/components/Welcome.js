import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

const Welcome = () => {
  return (
    <CSSTransition
      in={true}
      appear
      timeout={800}
      classNames="fade"
      unmountOnExit>
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
    </CSSTransition>
  );
};

export default Welcome;
