import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { getWordAsync, addPlayer } from '../redux/reducers/mainReducer';

class Settings extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      difficulty: 6
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.setState({ difficulty: Number(this.state.difficulty) });
    this.props.getWords(this.state.difficulty);
    this.props.addPlayer(this.state.name);
    this.props.history.push('/start');
  }

  render() {
    let { player } = this.props.state;

    return (
      <CSSTransition
        in={true}
        appear
        timeout={800}
        classNames="fade"
        unmountOnExit>
        <form>
          <div style={{ marginBottom: '20px' }}>
            <label name="name" style={{ display: 'block', fontSize: '2.5vh' }}>
              Name
            </label>
            <input
              onChange={event => this.setState({ name: event.target.value })}
              style={{ padding: 10 }}
              placeholder={player || 'Enter your name.'}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label
              name="difficulty"
              style={{ display: 'block', fontSize: '2.5vh' }}>
              Enter Difficulty
            </label>
            <input
              onChange={event =>
                this.setState({ difficulty: event.target.value })
              }
              min="1"
              max="10"
              type="number"
              style={{ width: '100%', padding: 10 }}
              placeholder="Number 1 - 10"
            />
          </div>

          <button
            disabled={this.state.name.length <= 0}
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
  return {
    getWords: x => dispatch(getWordAsync(x)),
    addPlayer: name => dispatch(addPlayer(name))
  };
};
const mapStateToProps = state => {
  return {
    state: state.mainReducer
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
