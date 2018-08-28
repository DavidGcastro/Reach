import React from 'react';
import Settings from './Settings';
import { CSSTransition } from 'react-transition-group';

class LeftSide extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: true,
      initialView: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.state);
    this.setState({ initialView: false, visible: true });
  }
  render() {
    let initialView = this.state.initialView ? (
      <div className="flexer">
        <h1>The</h1>
        <h1>Great</h1>
        <h1>Guessing Game</h1>
        <button
          onClick={() => this.handleClick()}
          type="button"
          className="button">
          Begin
        </button>
      </div>
    ) : (
      <CSSTransition
        in={this.state.visible}
        timeout={8000}
        classNames="fade"
        appear={true}>
        <Settings />
      </CSSTransition>
    );
    return (
      <div className="left--parent">
        <div className="left--currentContent">{initialView}</div>
      </div>
    );
  }
}

export default LeftSide;
