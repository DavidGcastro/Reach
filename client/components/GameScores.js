import React, { Component } from 'react';
import axios from 'axios';
export default class GameScore extends Component {
  constructor() {
    super();
    this.state = {
      scores: {}
    };
  }

  componentDidMount = () => {
    axios.get('api/highscores').then(x => this.setState({ scores: x.data }));
  };

  render() {
    console.log(this.state);
    return <h1>Hello World</h1>;
  }
}
