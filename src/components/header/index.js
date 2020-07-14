import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';


import './header.scss';

const Header = (props) => {

  return (
    <header id='header'>
      <h1 >OUR STORE </h1>
      <nav>
        <ul>
          <li>
            <span><Link to='/'>Home</Link></span>
            <span> <NavLink id to='/cart' > CART : ({props.cartReducer.counter})</NavLink></span>
          </li>
        </ul>

      </nav>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    categoryReducer: state.categoryReducer,
    productsReducer: state.productsReducer,
    cartReducer: state.cartReducer,
  };
};

export default connect(mapStateToProps)(Header);