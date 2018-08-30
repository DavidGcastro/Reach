import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
//
const GameWinner = props => {
  let guess = props.totalGuesses;

  return (
    <CSSTransition
      in={true}
      appear
      timeout={800}
      classNames="fade"
      unmountOnExit>
      <div className="winLose--parent">
        <h1>Winner!</h1>
        <h3>You got the word in {guess} guesses!</h3>
        <img className="mainImg" src="./assets/images/idek.gif" />
        <button type="button" onClick={() => props.history.push(`/settings`)}>
          Play Again?
        </button>
      </div>
    </CSSTransition>
  );
};

const mapStateToProps = state => {
  return {
    totalGuesses: state.mainReducer.totalGuesses
  };
};
export default connect(
  mapStateToProps,
  null
)(GameWinner);
