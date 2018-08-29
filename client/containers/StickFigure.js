import React from 'react';
import { connect } from 'react-redux';

class StickFigure extends React.Component {
  render() {
    let guessCount = this.props.guessCount;
    return (
      <div className="right--parent flexer">
        <div
          id="hangman-figure"
          className="d-flex justify-content-center pt-5 pb-3">
          <div id="gallow">
            <div id="pole">
              <div id="noose" />
              <div id="diagonal" />
              <div id="base" />
            </div>
          </div>

          <div id="stick-figure" className="swinging">
            <svg height="150" width="150">
              <circle
                id="hangman-head"
                className={guessCount >= 1 ? 'show-hangman' : 'hide-hangman'}
                cx="25"
                cy="25"
                r="10"
              />
              <line
                id="hangman-body"
                ref={2}
                className={guessCount >= 2 ? 'show-hangman' : 'hide-hangman'}
                x1="25"
                y1="34"
                x2="25"
                y2="85"
              />
              <line
                ref={3}
                id="hangman-leftArm"
                className={guessCount >= 3 ? 'show-hangman' : 'hide-hangman'}
                x1="0"
                y1="70"
                x2="25"
                y2="40"
              />
              <line
                ref={4}
                id="hangman-rightArm"
                className={guessCount >= 4 ? 'show-hangman' : 'hide-hangman'}
                x1="25"
                y1="40"
                x2="55"
                y2="70"
              />
              <line
                ref={5}
                id="hangman-leftLeg"
                className={guessCount >= 5 ? 'show-hangman' : 'hide-hangman'}
                x1="25"
                y1="85"
                x2="0"
                y2="120"
              />
              <line
                ref={6}
                id="hangman-rightLeg"
                className={guessCount >= 6 ? 'show-hangman' : 'hide-hangman'}
                x1="25"
                y1="85"
                x2="55"
                y2="120"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    guessCount: state.mainReducer.guess
  };
};

export default connect(
  mapStateToProps,
  null
)(StickFigure);
