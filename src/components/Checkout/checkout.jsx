import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/cart-context';
import Layout from '../shared/layout';
import StripeCheckout from './stripe-checkout/stripe-checkout';
import './checkout.styles.scss';

const Checkout = () => {
  const { itemCount, total} = useContext(CartContext);
  
  return (
    <Layout>
      <div className='checkout'>
        <h2>Fechar compra</h2>
        <h3>{`Quantidade de itens: ${itemCount}`}</h3>
        <h4>{`Total a pagar: $${total}`}</h4>
        <StripeCheckout />
        
      </div>
    </Layout>
  );
}

export default Checkout;