import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Settings extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      difficulty: '',
      words: '',
      chosenWord: '',
      minLength: 3,
      maxLength: 12,
      start: 0,
      count: 30
    };
    this.handleName = this.handleName.bind(this);
    this.handleDifficulty = this.handleDifficulty.bind(this);
  }

  handleName(e) {
    this.setState({ name: e.target.value });
  }
  handleDifficulty(e) {
    this.setState({ difficulty: e.target.value });
  }

  render() {
    return (
      <form>
        <div style={{ marginBottom: '20px' }}>
          <label name="name" style={{ display: 'block', fontSize: '4vh' }}>
            Name
          </label>
          <input
            onChange={event => this.handleName(event)}
            style={{ padding: 10 }}
            placeholder="Enter your name."
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label
            name="difficulty"
            style={{ display: 'block', fontSize: '4vh' }}>
            Enter Difficulty
          </label>
          <input
            onChange={event => this.handleDifficulty(event)}
            min="1"
            max="10"
            type="number"
            style={{ width: '100%', padding: 10 }}
            placeholder="Enter your Difficulty."
          />
        </div>
        <Link
          to={{
            pathname: '/start',
            state: this.state
          }}>
          <button type="button" className="button" style={{ width: '100%' }}>
            Enter
          </button>
        </Link>
      </form>
    );
  }
}
