import React from 'react';

const RightSide = props => {
  console.log(props);
  return (
    <div className="right--parent">
      <h1>{props.word}</h1>
    </div>
  );
};

export default RightSide;
