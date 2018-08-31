import React, { Component } from 'react';
import axios from 'axios';
export default class GameScore extends Component {
  constructor() {
    super();
    this.state = {
      scores: []
    };
  }

  componentDidMount = () => {
    axios
      .get('api/highscores')
      .then(scores => this.setState({ scores: scores.data }));
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          alignContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100%'
        }}>
        <h1 style={{ marginBottom: 30 }}>High Scores</h1>
        {this.state.scores &&
          this.state.scores.map((player, i) => {
            return (
              <div
                key={i}
                style={{
                  flexDirection: 'row',
                  display: 'flex',
                  justifyContent: 'space-around',
                  width: '100%',
                  alignContent: 'center',
                  alignItems: 'center',
                  margin: 10
                }}>
                <h2>{player.player}</h2>
                <h4>{player.guess}</h4>
              </div>
            );
          })}
      </div>
    );
  }
}
