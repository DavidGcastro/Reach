import React from 'react';
import Transition from 'react-transition-group/Transition';
import Welcome from './Welcome';

const LeftSide = () => {
  return (
    <div className="left--parent">
      <div className="left--currentContent">
        <Welcome />
      </div>
    </div>
  );
};

export default LeftSide;
