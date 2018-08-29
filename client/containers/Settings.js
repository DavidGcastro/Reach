import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { getWordAsync } from '../redux/reducers/word';
class Settings extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      difficulty: 5,
      words: '',
      chosenWord: '',
      minLength: 3,
      maxLength: 10,
      start: 0,
      count: 100
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    console.log(this.state);
    this.props.getWords(this.state);
    this.props.history.push('/start');
  }

  render() {
    return (
      <CSSTransition
        in={true}
        appear
        timeout={800}
        classNames="fade"
        unmountOnExit>
        <form>
          <div style={{ marginBottom: '20px' }}>
            <label name="name" style={{ display: 'block', fontSize: '3vh' }}>
              Name
            </label>
            <input
              onChange={event => this.setState({ name: event.target.value })}
              style={{ padding: 10, borderRadius: 5 }}
              placeholder="Enter your name."
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label
              name="difficulty"
              style={{ display: 'block', fontSize: '3vh' }}>
              Enter Difficulty
            </label>
            <input
              onChange={event =>
                this.setState({ difficulty: event.target.value })
              }
              min="1"
              max="10"
              type="number"
              style={{ width: '100%', padding: 10, borderRadius: 5 }}
              placeholder="Enter your Difficulty."
            />
          </div>

          <button
            onClick={() => this.handleSubmit()}
            type="button"
            className="button"
            style={{ width: '100%' }}>
            Enter
          </button>
        </form>
      </CSSTransition>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { getWords: x => dispatch(getWordAsync(x)) };
};

export default connect(
  null,
  mapDispatchToProps
)(Settings);
