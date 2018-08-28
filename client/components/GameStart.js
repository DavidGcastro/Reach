import React from 'react';
import axios from 'axios';
import { CSSTransition } from 'react-transition-group';

export default class GameStart extends React.Component {
  constructor() {
    super();
    this.state = {
      words: '',
      chosenWord: '',
      guessCount: 0,
      currentGuess: '',
      guesses: []
    };
    this.getRandomWord = this.getRandomWord.bind(this);
    this.checkGuess = this.checkGuess.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.revealLetters = this.revealLetters.bind(this);
  }

  componentDidMount = () => {
    let {
      difficulty,
      minLength,
      maxLength,
      start,
      count
    } = this.props.location.state;

    return axios
      .get('http://app.linkedin-reach.io/words', {
        params: {
          difficulty: Number(difficulty) || 5,
          minLength,
          maxLength,
          start,
          count
        }
      })
      .then(res => res.data)
      .then(words => this.setState({ words }))
      .then(() => this.getRandomWord())
      .catch(err => console.error(err));
  };

  getRandomWord() {
    let { count } = this.props.location.state;
    let words = this.state.words.split('\n');
    let index = Math.floor(Math.random() * count + 1);

    return this.setState({ chosenWord: words[index] });
  }
  checkGuess(e) {
    if (e.key === 'Enter') {
      let guess = this.state.currentGuess;
      this.setState({ guessCount: this.state.guessCount + 1 });
      this.setState({ guesses: [...this.state.guesses].concat(guess) });
    }
  }

  handleChange(e) {
    this.setState({ currentGuess: e.target.value });
  }
  revealLetters() {
    
  }

  render() {
    let splitWord = this.state.chosenWord.split('');
    return (
      <CSSTransition
        in={true}
        appear
        timeout={500}
        classNames="fade"
        unmountOnExit>
        <div
          style={{
            justifyContent: 'space-evenly',
            display: 'flex',
            flex: 1,
            flexDirection: 'column'
          }}>
          <h1>Guess Wisely. </h1>
          <input
            onKeyPress={this.checkGuess}
            onChange={e => this.setState({ currentGuess: e.target.value })}
            type="text"
            placeholder="Type Letter or Phrase"
            style={{ padding: 10 }}
          />
          <div style={{ display: 'flex' }}>
            {this.state.guesses.map((letter, index) => {
              return (
                <div
                  key={index}
                  style={{
                    borderBottom: '1px solid black',
                    margin: '10px',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    flexWrap: 'wrap'
                  }}>
                  <h1 style={{ flex: 1, fontSize: '3vh' }}>{letter}</h1>
                </div>
              );
            })}
          </div>
          <div style={{ display: 'flex' }}>
            {splitWord.map((letter, index) => {
              return (
                <div
                  key={index}
                  style={{
                    borderBottom: '1px solid black',
                    margin: '10px',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    flexWrap: 'wrap',
                    minWidth: '30px'
                  }}>
                  <h1
                    style={{
                      flex: 1,
                      fontSize: '3vh',
                      textAlign: 'center',
                      display: 'none'
                    }}>
                    {letter}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </CSSTransition>
    );
  }
}
