import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Welcome from './Welcome';
import Settings from './Settings';
import GameStart from './GameStart';

class LeftSide extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ initialView: false, visible: true });
  }
  render() {
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
  }
}

export default LeftSide;
