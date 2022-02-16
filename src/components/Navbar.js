import React, { useState } from 'react'

function Navbar(props) {
  return (
    <nav className="navbar">
      <div className="logo" href="#">FullStack Pizza Basket</div>
      <div>
        <div Id="navLinks">
          <a href="#/cart">
            Pizza Flavours{' '}
            {props.countCartItems ? (
              <button className="badge">{props.countCartItems}</button>
            ) : (
              ''
            )}
          </a>{' '}
          <a href="#">Sign In</a>
        </div>
      </div>

    </nav>
  );
}


export default Navbar;

