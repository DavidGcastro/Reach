import axios from 'axios';
const GET_WORD = 'GET_WORD';
const INCORRECT_GUESS = 'INCORRECT_GUESS';
const TOTAL_GUESS = 'TOTAL_GUESS';
const RESET_GUESSES = 'RESET_GUESSES';
const ADD_PLAYER = 'ADD_PLAYER';
/**
 * ACTION CREATORS
 */
const getWord = word => ({ type: GET_WORD, word });

export const addIncorrectGuess = () => ({
  type: INCORRECT_GUESS
});
export const addTotalGuess = () => ({
  type: TOTAL_GUESS
});

export const addPlayer = player => ({
  type: ADD_PLAYER,
  player
});
export const reset = () => ({
  type: RESET_GUESSES
});
/**
 *
 * THUNK CREATORS
 //  */

export const getWordAsync = x => dispatch =>
  axios
    .get('http://app.linkedin-reach.io/words', {
      params: {
        difficulty: x.difficulty,
        minLength: x.minLength,
        maxLength: x.maxLength,
        start: 0,
        count: x.count
      }
    })
    .then(res => res.data)
    .then(words => words.split('\n'))
    .then(pickWord => pickWord[Math.ceil(Math.random() * 200)])
    .then(wordsArr => dispatch(getWord(wordsArr)))
    .then(x => dispatch(reset()))
    .catch(err => console.error(err));

/* REDUCER
 */

export default function(
  initialState = { incorrectGuess: 0, player: '', totalGuesses: 0 },
  action
) {
  switch (action.type) {
    case GET_WORD:
      return { ...initialState, word: action.word };
    case INCORRECT_GUESS:
      return {
        ...initialState,
        incorrectGuess: initialState.incorrectGuess + 1
      };
    case TOTAL_GUESS:
      return { ...initialState, totalGuesses: initialState.totalGuesses + 1 };
    case ADD_PLAYER: {
      return { ...initialState, player: action.player };
    }

    case RESET_GUESSES:
      return {
        ...initialState,
        totalGuesses: 0,
        incorrectGuess: 0
      };

    default:
      return initialState;
  }
}
