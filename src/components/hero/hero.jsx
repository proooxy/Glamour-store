import './hero.styles.scss';
import { withRouter } from 'react-router';
import React from 'react';

const Hero = ({ history }) => {
  return (
    <section className="hero is-info is-large hero-image">
      <div className="hero-body">
        
          <h1 className="hero-title">
            A loja que vai trazer Glamour para você.
          </h1>
          
            <button className='button button-hero' onClick={() => history.push('/shop')}>
              Impressione você mesmo
            </button>
          
          
         
      </div>

    </section>
  );
}

export default withRouter(Hero);