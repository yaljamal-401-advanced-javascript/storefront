import React from 'react';

import './header.scss';

export default function Header() {
  return (
    <header id='header'>
      <h1 id='logo' >OUR STORE</h1>
      <a id='cart' href='/'>Cart(0)</a>
    </header>
  );
} 