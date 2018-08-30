import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

const GameLoser = props => {
  let { guess } = props;
  return (
    <CSSTransition
      in={true}
      appear
      timeout={800}
      classNames="fade"
      unmountOnExit>
      <div className="winLose--parent">
        <h1>You Lose!</h1>
        <img className="mainImg" src="./assets/images/gameover.gif" />
        <button type="button" onClick={() => props.history.push(`/settings`)}>
          Try Again?
        </button>
      </div>
    </CSSTransition>
  );
};

const mapStateToProps = state => {
  return {
    guess: state.mainReducer.guess
  };
};
export default connect(
  mapStateToProps,
  null
)(GameLoser);
