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
      <div
        style={{
          backgroundColor: '#ffde16',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          alignContent: 'center',
          height: '100vh'
        }}>
        <h1>You Lose!</h1>
        <img
          style={{ width: '300px', alignSelf: 'center' }}
          src="./assets/images/gameover.gif"
        />
        <button
          type="button"
          onClick={() => props.history.push(`/settings`)}
          style={{ width: 300, padding: 10 }}>
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
