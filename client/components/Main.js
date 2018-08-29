import React from 'react';
import RightSide from './RightSide';
import Welcome from './Welcome';
import Settings from '../containers/Settings';
import GameStart from '../containers/GameStart';
import StickFigure from '../containers/StickFigure';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Main = () => {
  return (
    <Router>
      <div className="main--parent">
        <div className="left--parent">
          <div className="left--currentContent">
            <Route exact path="/" component={Welcome} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/start" component={GameStart} />
          </div>
        </div>
        <div className="right--parent flexer">
          <Route exact path="/" component={RightSide} />
          <Route exact path="/settings" component={RightSide} />
          <Route exact path="/start" component={StickFigure} />
        </div>
      </div>
    </Router>
  );
};

export default Main;
