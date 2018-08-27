import React from 'react';
import axios from 'axios';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      words: '',
      difficulty: 3,
      minLength: 3,
      maxLenght: 10,
      start: 0,
      count: 20,
      guesses: 0,
      chosenWord: ''
    };
    this.getRandomWord = this.getRandomWord.bind(this);
  }
  componentDidMount = () => {
    axios
      .get('http://app.linkedin-reach.io/words', {
        params: {
          difficulty: this.state.difficulty,
          minLength: this.state.minLength,
          maxLenght: this.state.maxLenght,
          start: this.state.start,
          count: this.state.count
        }
      })
      .then(res => this.setState({ words: res.data.split('\n') }))
      .catch(error => console.error(error));
  };

  getRandomWord() {
    let index = [Math.floor(Math.random() * this.state.count + 1)];
    return this.state.words[index];
  }

  render() {
    return (
      <div className="main--parent">
        <LeftSide />
        <RightSide />
      </div>
    );
  }
}
