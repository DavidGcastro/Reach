import React from 'react';
import Welcome from './Welcome';
import { CSSTransition } from 'react-transition-group';

class LeftSide extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: true
    };
  }
  render() {
    return (
      <div className="left--parent">
        <div className="left--currentContent">
          <CSSTransition
            in={this.state.visible}
            appear={true}
            
            classNames="fade">
            <Welcome />
          </CSSTransition>
        </div>
      </div>
    );
  }
}

export default LeftSide;
