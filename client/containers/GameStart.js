import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { madeGuess } from '../redux/reducers/mainReducer';
class GameStart extends React.Component {
  constructor() {
    super();
    this.state = {
      currentGuess: ''
    };
  }

  handleSubmit() {
    this.refs.input.value = '';
    this.props.guessCount();
  }
  render() {
    let { state } = this.props;
    let { word } = state;

    return (
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly'
        }}>
        <h1>Guess Wisely.</h1>
        <div>
          <input
            ref="input"
            onChange={event =>
              this.setState({ currentGuess: event.target.value })
            }
            style={{ width: '100%', padding: 10 }}
            type="text"
            placeholder="Type Letter or Phrase"
          />
          <button
            onClick={() => this.handleSubmit()}
            style={{ width: '100%' }}
            className="button">
            Submit
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state.mainReducer
  };
};
const mapDispatchToProps = dispatch => {
  return {
    guessCount: () => dispatch(madeGuess())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameStart);
