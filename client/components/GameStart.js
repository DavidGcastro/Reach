import React from 'react';
import axios from 'axios';

export default class GameStart extends React.Component {
  constructor() {
    super();
    this.state = {
      words: '',
      chosenWord: ''
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
          difficulty: Number(difficulty),
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
    return <h1>{this.state.chosenWord}</h1>;
  }
}
