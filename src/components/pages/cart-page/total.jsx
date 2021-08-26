import React from 'react';
import { withRouter } from 'react-router-dom';


const Total = ({ itemCount, total, history, clearCart }) => {
  return (
    <div className='total-container'>
      <div className='total'>
        <p>Quantidade de items: {itemCount}</p>
        <p>{`Total: $${total}`}</p>
      </div>
      <div className='checkout'>
        <button 
          className='button ' 
          onClick={() => history.push('/checkout')}>COMPRAR AGORA</button>
        <button className='button is-white' onClick={() => clearCart()}>LIMPAR</button>  
      </div>
      
    </div>
  );
}

export default withRouter(Total);