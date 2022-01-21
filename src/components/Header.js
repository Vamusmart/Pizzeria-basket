import React from 'react';

export default function Header(props) {
  return (
    <header className="row">
      <div>
        <a className="cartHeader" href="#/cart">
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