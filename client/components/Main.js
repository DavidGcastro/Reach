import React from 'react';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import { Link } from 'react-router-dom';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      words: '',
      difficulty: 3,
      minLength: 3,
      maxLength: 10,
      start: 0,
      count: 30,
      guesses: 0,
      chosenWord: ''
    };
    this.getRandomWord = this.getRandomWord.bind(this);
  }
  componentDidMount = () => {};

  getRandomWord() {
    let index = [Math.floor(Math.random() * this.state.count + 1)];
    let word = this.state.words[index];
    return this.setState({ chosenWord: word });
  }

  render() {
    return (
      <div className="main--parent">
        <LeftSide />
        <RightSide word={this.state.chosenWord} />
      </div>
    );
  }
}
