import React from 'react';
import RightSide from './RightSide';
import Welcome from './Welcome';
import Settings from '../containers/Settings';
import GameStart from '../containers/GameStart';
import StickFigure from '../containers/StickFigure';
import GameWinner from '../containers/GameWinner';
import GameLoser from '../containers/GameLoser';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Main = () => {
  return (
    <Router>
      <div className="grandparent">
        <Route path="/gameloser" component={GameLoser} />
        <div className="main--parent">
          <div className="left--parent">
            <div className="left--currentContent">
              <Route exact path="/" component={Welcome} />
              <Route exact path="/settings" component={Settings} />
              <Route exact path="/start" component={GameStart} />
              <Route exact path="/gamewinner" component={GameWinner} />
            </div>
          </div>
          <div className="right--parent flexer">
            <Route exact path="/" component={RightSide} />
            <Route exact path="/settings" component={RightSide} />
            <Route exact path="/start" component={StickFigure} />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Main;
