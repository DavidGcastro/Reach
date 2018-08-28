import React from 'react';

const WordDisplay = props => {
  let { word, guess } = props;
  alert(guess);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {word.map((letter, index) => {
        return (
          <div
            key={index}
            style={{
              borderBottom: '1px solid black',
              margin: '10px',
              width: '30px'
            }}>
            <h1>{letter}</h1>
          </div>
        );
      })}
    </div>
  );
};
export default WordDisplay;
