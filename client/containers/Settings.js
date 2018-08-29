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
      difficulty: '',
      words: '',
      chosenWord: '',
      minLength: 3,
      maxLength: 12,
      start: 0,
      count: 30
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    this.props.getWords();
  }

  render() {
    console.log(this.props);
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
              onChange={event => this.setState({ name: event.target.name })}
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
                this.setState({ difficulty: event.target.difficulty })
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
  return { getWords: dispatch(getWordAsync()) };
};

export default connect(
  null,
  mapDispatchToProps
)(Settings);
