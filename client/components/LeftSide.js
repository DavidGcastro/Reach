import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Welcome from './Welcome';
import Settings from './Settings';
import GameStart from './GameStart';

const LeftSide = () => {
  return (
    <Router>
      <div className="left--parent">
        <div className="left--currentContent">
          <Route exact path="/" component={Welcome} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/start" component={GameStart} />
        </div>
      </div>
    </Router>
  );
};

export default LeftSide;
