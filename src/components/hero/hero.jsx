import './hero.styles.scss';
import React from 'react';

const Hero = () => {
  return (
    <section className="hero is-info is-large hero-image">
      <div className="hero-body">
        
          <h1 className="hero-title">
            A loja que vai trazer Glamour para você.
          </h1>
          
            <button className='button button-hero'>
              Impressione você mesmo
            </button>
          
         
      </div>

    </section>
  );
}

export default Hero;