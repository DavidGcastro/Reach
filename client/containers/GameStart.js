import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
class GameStart extends React.Component {
  render() {
    let word = this.props.word;
    return <h1>{word}</h1>;
  }
}

const mapStateToProps = state => {
  return {
    word: state.wordReducer
  };
};

export default connect(
  mapStateToProps,
  null
)(GameStart);
