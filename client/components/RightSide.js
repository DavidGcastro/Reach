import React from 'react';
import { connect } from 'react-redux';

const RightSide = props => {
  console.log(props.guessCount);
  return (
    <img
      style={{ width: '300px', alignSelf: 'center' }}
      src="./assets/images/Hangman.jpg"
    />
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
)(RightSide);
