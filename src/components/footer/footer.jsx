import React from 'react';
import './footer.styles.scss';
import Payment from '../../images/Formasdepagamento.png'

const Footer = () => {

    return (
        <footer>
            <section className='title-glamour'>
            <h1>
                Glamour.
            </h1>
            
            </section>
            <section className='title-footer'>

                <p>Loja Glamour.
                    CNPJ: 00.000.000/0000-00< br />
                    Telefone:< br />
                    (82) 3000-0000< br />
                    Segunda à Sexta das 09h às 18h< br />
                    Email:< br />
                    sac@glamour.com.br< br />
                </p>

                <div className="payment">
                <p className='payment-form'>Formas de Pagamento:</p>
                <img src={Payment} alt="" />
                </div>
            </section>
            <p className='copyright'>© 2021 Todos os Direitos Reservados</p>
        </footer>
    );
}

export default Footer;