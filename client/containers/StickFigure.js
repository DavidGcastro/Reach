import React from 'react';
import { connect } from 'react-redux';

const StickFigure = props => {
  console.log(props, "stick");
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
              className="show-hangman"
              cx="25"
              cy="25"
              r="10"
            />
            <line
              id="hangman-body"
              className="show-hangman"
              x1="25"
              y1="34"
              x2="25"
              y2="85"
            />
            <line
              id="hangman-leftArm"
              className="show-hangman"
              x1="0"
              y1="70"
              x2="25"
              y2="40"
            />
            <line
              id="hangman-rightArm"
              className="show-hangman"
              x1="25"
              y1="40"
              x2="55"
              y2="70"
            />
            <line
              id="hangman-leftLeg"
              className="show-hangman"
              x1="25"
              y1="85"
              x2="0"
              y2="120"
            />
            <line
              id="hangman-rightLeg"
              className="show-hangman"
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
};

const mapStateToProps = state => {
  return {
    guessCount: state.mainReducer.guess
  };
};

export default connect(
  mapStateToProps,
  null
)(StickFigure);
