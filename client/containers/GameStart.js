import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { madeGuess } from '../redux/reducers/mainReducer';

class GameStart extends React.Component {
  constructor() {
    super();
    this.state = {
      currentGuess: '',
      allGuesses: []
    };
    this.indicesCorrect = [];

    this.findIndex = this.findIndex.bind(this);
    this.revealLetters = this.revealLetters.bind(this);
  }

  handleSubmit() {
    if (this.state.currentGuess.length) {
      this.setState({
        allGuesses: [...this.state.allGuesses, this.state.currentGuess]
      });
      this.props.guessCount();
      this.findIndex(this.state.currentGuess);
    }
    this.refs.input.value = '';
  }

  findIndex(guess) {
    let { word } = this.props.state;
    guess = guess.toString().toLowerCase();

    //handle phrases
    if (guess.length > 1) {
      //only display letters if entire phrase is present.
      if (word.includes(guess)) {
        console.log('phrase included');
        this.revealLetters(word, guess);
      } else {
        //if the entire phrase isnt present return.
        return;
      }
    } else {
      //single letter, just check each letter.
      this.revealLetters(word, guess);
    }
  }

  revealLetters(word, guess) {
    for (let i = 0; i < word.length; i++) {
      if (guess.includes(word[i])) {
        this.refs[i].style.display = 'block';
        this.indicesCorrect.push(i);
      }
    }

    if (this.indicesCorrect.length >= word.length) {
      this.props.history.push(`/gamewinner`);
    }
  }

  render() {
    let { state } = this.props;
    let { word, guess } = state;
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
        <div style={{ flexDirection: 'row', display: 'flex' }}>
          {this.state.allGuesses.map((letter, i) => {
            return (
              <div
                key={i}
                style={{
                  borderBottom: '3px black solid',
                  margin: 10,
                  minWidth: '30px'
                }}>
                <h1 style={{ textAlign: 'center' }}>{letter}</h1>
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
            disabled={guess >= 6}
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
