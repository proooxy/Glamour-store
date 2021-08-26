import './hero.styles.scss';
import { withRouter } from 'react-router';
import React from 'react';

const Hero = ({ history }) => {
  return (
    <section className="hero is-info is-large hero-image">
      <div className="hero-body">
        
          <h4 className="hero-title">
            A loja que vai trazer Glamour para você.
          </h4>
          
            <button className='button button-hero' onClick={() => history.push('/shop')}>
              Impressione você mesmo
            </button>
          
          
         
      </div>

    </section>
  );
}

export default withRouter(Hero);