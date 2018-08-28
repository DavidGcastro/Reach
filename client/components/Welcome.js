import React from 'react';

const Welcome = () => {
  return (
    <div className="flexer">
      <h1>The</h1>
      <h1>Great</h1>
      <h1>Guessing Game</h1>
      <button onClick={() => handleClick()} type="button" className="button">
        Begin
      </button>
    </div>
  );
};

function handleClick() {
  alert('clicked');
}

export default Welcome;
