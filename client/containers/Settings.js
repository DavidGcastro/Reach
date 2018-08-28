import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

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
              onChange={event => this.handleName(event)}
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
              onChange={event => this.handleDifficulty(event)}
              min="1"
              max="10"
              type="number"
              style={{ width: '100%', padding: 10, borderRadius: 5 }}
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
      </CSSTransition>
    );
  }
}

// const mapProducts = state => {
//   return {
//     products: state.products,
//     selectedProduct: state.selectedProduct,
//     filtered: state.filter,
//     currUser: state.user,
//     users: state.allUsers
//   };
// };
// const mapDispatch = dispatch => {
//   return {
//     getCurrentProduct: id => dispatch(getCurrentProduct(id)),
//     addProductToCart: product => dispatch(addToCartList(product)),
//     addProduct: (userId, item) => {
//       dispatch(addItem(userId, { productId: item }));
//     }
//   };
// };
// export const Products = connect(
//   mapProducts,
//   mapDispatch
// )(ProductList);
