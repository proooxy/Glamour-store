import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../cart-icon/cart-icon';

import './header.styles.scss';

const Header = () => {
  
  return (
    <header className='headerContainer'>
    <nav className='headerContent'>
      <div className='logo'>
        <Link to='/'>Glamour.</Link>
      </div>
      <nav>
        <li>
          <Link to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/shop'>
            Loja
          </Link>
          
        </li>
        
    </nav>
    <CartIcon />
    </nav>

    </header>
  );
}

export default Header;