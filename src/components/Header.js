import React from 'react';

export default function Header(props) {
  return (
    <header>
      <div className="cartHeader">
        <a href="#/cart">
          Pizza Flavours{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        <a href="#/signin"> SignIn</a>
      </div>
    </header>
  );
}