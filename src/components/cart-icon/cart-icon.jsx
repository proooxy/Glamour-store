import React, {useContext} from 'react';
import shoppingBag from '../../images/shopping-bag.png';
import {CartContext} from '../../context/cart-context';
import './cart-icon.styles.scss';

const CartIcon = () => {

  const { itemCount } = useContext(CartContext)

  return (
    <div className='cart-container'>
      <img src={shoppingBag} alt='shopping-cart-icon' />
        {
          itemCount > 0 ? <span className='cart-count'> { itemCount } </span> : null
        }
       
    </div>
  );
}

export default CartIcon;