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
    this.findIndex = this.findIndex.bind(this);
  }

  handleSubmit() {
    this.refs.input.value = '';
    this.props.guessCount();
    this.findIndex(this.state.currentGuess);
  }

  findIndex(guess) {
    let { word } = this.props.state;
    guess = guess.toString();

    for (let i = 0; i < word.length; i++) {
      if (guess.includes(word[i])) {
        this.refs[i].style.display = 'block';
      }
    }
  }

  render() {
    let { state } = this.props;
    let { word } = state;
    console.log(word);

    let wordArr = word ? word.split('') : [];

    return (
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly'
        }}>
        <h1>Guess Wisely.</h1>
        <div style={{ flexDirection: 'row', display: 'flex' }}>
          {wordArr.map((letter, i) => {
            return (
              <div
                key={i}
                style={{
                  borderBottom: '3px black solid',
                  margin: 10,
                  minWidth: '30px'
                }}>
                <h1 ref={i} style={{ textAlign: 'center', display: 'none' }}>
                  {letter}
                </h1>
              </div>
            );
          })}
        </div>
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
            type="button"
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
