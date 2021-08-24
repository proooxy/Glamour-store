import React from 'react';
import Layout from './shared/layout';


const NotFound = () => {
  const style = {
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '9rem',
    
  }

  return (
    <Layout>
      <p style={style}>Página não encontrada</p>
    </Layout>
  );
}

export default NotFound;