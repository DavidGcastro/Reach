import React from 'react';
import axios from 'axios';

export default class Settings extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      difficulty: 5
    };
    this.handleName = this.handleName.bind(this);
    this.handleDifficulty = this.handleDifficulty.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleName(e) {
    this.setState({ name: e.target.value });
  }
  handleDifficulty(e) {
    this.setState({ difficulty: e.target.value });
  }
  handleSubmit() {}
  render() {
    return (
      <div className="flexer">
        <form>
          <div style={{ marginBottom: '20px' }}>
            <label name="name" style={{ display: 'block' }}>
              Name
            </label>
            <input
              onChange={event => this.handleName(event)}
              style={{ padding: 10 }}
              placeholder="Enter your name."
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label name="difficulty" style={{ display: 'block' }}>
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
          <button
            onClick={() => console.log(this.state)}
            type="button"
            className="button"
            style={{ width: '100%' }}>
            Enter
          </button>
        </form>
      </div>
    );
  }
}
