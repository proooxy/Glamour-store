import React, {useContext} from 'react';
import { withRouter } from 'react-router-dom';

import { isInCart } from '../../helpers';
import { CartContext } from '../../context/cart-context';

import './featured-product.styles.scss';

const FeaturedProduct = (props) => {
  const { title, imageUrl, price, history, id} = props;
  const {addProduct, cartItems, increase} = useContext(CartContext);
  const product = { title, imageUrl, price, id};
  const itemInCart = isInCart(product, cartItems);
 
  return (
    <div className='featured-product'>
      <div className='featured-image'  onClick={() => history.push(`/product/${id}`)} >
        <img src={imageUrl} alt='product' />
      </div>
      <div className='name-price'>
        <h3>{title}</h3>
        <p>${price}</p>
      
        {
          !itemInCart &&
          <button 
            className='button nomad-btn' 
            onClick={() => addProduct(product)}
          >
            ADD AO CARRINHO
          </button>
        }
        {
          itemInCart &&
          <button 
            className='button is-white nomad-btn'
            id='btn-white-outline'
            onClick={()=> increase(product)}
          >
              ADD +1
          </button>
        }
        
         
      </div>
    </div>
  );
}
export default withRouter(FeaturedProduct);