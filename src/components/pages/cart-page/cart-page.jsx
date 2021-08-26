import React, { useContext } from 'react';
import { CartContext } from '../../../context/cart-context';
import Layout from '../../shared/layout';
import CartItem from './cart-item';
import './cart-page.styles.scss';
import Total from './total'

const CartPage = () => {
  const { cartItems, itemCount, total } = useContext(CartContext);
  return (
    <Layout>
      <>
        <h2>Carrinho</h2>
        {
          cartItems.length === 0 ? <div className='empty-cart'>Seu carrinho está vazio</div>
          : 
          <>
            <div className='cart-page'>
              <div className='cart-item-container'>
                {
                  cartItems.map(item  => <CartItem { ...item } key={item.id}/>)
                }
              </div>
              <Total itemCount={itemCount} total={total} />
            </div>
          </>
        }
      </>
    </Layout>
  );
}

export default CartPage;