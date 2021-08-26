import React, { useContext } from 'react';
import Layout from '../../shared/layout';
import FeaturedProduct from '../../shared/featured-product';
import { ProductsContext } from '../../../context/products-context';
import './shop.styles.scss';

const Shop = () => {
  const { products } = useContext(ProductsContext);
  const allProducts = products.map(product => (
    <FeaturedProduct { ...product } key={product.id} />
  ));

  return (
    <Layout>
      <div className='product-list-container'>
        <h3 className='product-list-title'>Loja</h3>
        <div className='product-list'>
          {
            allProducts
          }
        </div>
      </div>
    </Layout>
  );
}

export default Shop;