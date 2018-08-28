import React from 'react';
import axios from 'axios';
import { CSSTransition } from 'react-transition-group';

export default class GameStart extends React.Component {
  constructor() {
    super();
    this.state = {
      words: '',
      chosenWord: '',
      guesses: 0,
      currentGuess: ''
    };
    this.getRandomWord = this.getRandomWord.bind(this);
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

  render() {
    console.log(this.state.chosenWord);
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
            type="text"
            placeHolder="Type Letter or Phrase"
            style={{ padding: 10 }}
          />
          <div style={{ flexDirection: 'row', display: 'flex' }}>
            {splitWord.map((letter, index) => {
              return (
                <div
                  key={letter + index}
                  style={{
                    borderBottom: '3px solid',
                    margin: 5,
                    width: '50px'
                  }}
                />
              );
            })}
          </div>
        </div>
      </CSSTransition>
    );
  }
}
