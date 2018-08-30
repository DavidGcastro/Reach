import React from 'react';
import { connect } from 'react-redux';
import {
	addIncorrectGuess,
	addTotalGuess
} from '../redux/reducers/mainReducer';
import axios from 'axios';

class GameStart extends React.Component {
	constructor() {
		super();
		this.state = {
			currentGuess: '',
			allGuesses: []
		};
		this.indicesCorrect = [];
		this.findIndex = this.findIndex.bind(this);
		this.revealLetters = this.revealLetters.bind(this);
	}

	handleSubmit() {
		//add a guess to the store
		this.props.addTotalGuess();
		this.setState({
			allGuesses: [...this.state.allGuesses, this.state.currentGuess]
		});

		if (this.props.reduxState.incorrectGuess === 5) {
			this.props.history.push(`/gameloser`);
		}
		//empty input
		this.refs.input.value = '';
		this.findIndex(this.state.currentGuess);
	}

	findIndex(guess) {
		let { word } = this.props.reduxState;

		guess = guess.toString().toLowerCase();
		//handle phrases
		if (guess.length > 1) {
			//only display letters if entire phrase is present.
			if (word.includes(guess)) {
				this.revealLetters(word, guess);
			} else {
				this.props.addIncorrectGuess();
			}
		} else {
			//single letter, just check each letter.
			this.revealLetters(word, guess);
		}
	}

	revealLetters(word, guessToCheck) {
		let { reduxState } = this.props;
		let correctIndices = [];
		let { player } = reduxState;
		for (let i = 0; i < word.length; i++) {
			if (guessToCheck.includes(word[i])) {
				this.refs[i].style.display = 'block';
				this.indicesCorrect.push(i);
				//push correct letters to array.
				correctIndices.push(i);
			}
		}
		if (correctIndices.length === 0) {
			//no letters found
			this.props.addIncorrectGuess();
		}

		if (this.indicesCorrect.length >= word.length) {
			//create player
			axios
				.post('/api/highscores', {
					player,
					guess: this.props.reduxState.totalGuesses + 1
				})
				.then(() => this.props.history.push(`/gamewinner`))
				.catch(function(error) {
					console.log(error);
				});
		}
	}

	render() {
		let { reduxState } = this.props;
		let { word, incorrectGuess, player } = reduxState;
		let wordArr = word ? word.split('') : [];
		console.log(word);

		return (
			<div
				style={{
					flex: 1,
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-evenly'
				}}>
				<div>
					<h1 style={{ marginBottom: '10px' }}>Guess Wisely, {player}</h1>
					<h4>
						<span style={{ color: 'white', fontSize: '5vh', marginRight: 10 }}>
							{6 - incorrectGuess}
						</span>{' '}
						Guesses Left.
					</h4>
				</div>

				<div style={{ flexDirection: 'row', display: 'flex' }}>
					{wordArr.map((letter, i) => {
						return (
							<div
								key={i}
								style={{
									borderBottom: '3px black solid',
									margin: 10,
									minWidth: '30px'
								}}>
								<h1 ref={i} style={{ textAlign: 'center', display: 'none' }}>
									{letter}
								</h1>
							</div>
						);
					})}
				</div>
				<div style={{ flexDirection: 'row', display: 'flex' }}>
					{this.state.allGuesses.map((letter, i) => {
						return (
							<div
								key={i}
								style={{
									borderBottom: '3px black solid',
									margin: 10,
									minWidth: '30px'
								}}>
								<h1 style={{ textAlign: 'center' }}>{letter}</h1>
							</div>
						);
					})}
				</div>
				<div>
					<input
						ref="input"
						onChange={event =>
							this.setState({ currentGuess: event.target.value })
						}
						style={{ width: '100%', padding: 10 }}
						type="text"
						placeholder="Type Letter or Phrase"
					/>
					<button
						disabled={
							incorrectGuess >= 6 || this.state.currentGuess.length <= 0
						}
						type="button"
						onClick={() => this.handleSubmit()}
						style={{ width: '100%' }}
						className="button">
						Submit
					</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		reduxState: state.mainReducer
	};
};
const mapDispatchToProps = dispatch => {
	return {
		addIncorrectGuess: () => dispatch(addIncorrectGuess()),
		addTotalGuess: () => dispatch(addTotalGuess())
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GameStart);
