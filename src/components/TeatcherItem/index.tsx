import React from 'react'

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

const TeatcherItem: React.FC = () => {
  return (
    <article className="teatcher-item">
        <header>
          <img src="https://avatars3.githubusercontent.com/u/1993081?s=460&u=63c9a59beb3567b3b7aae98960ba695b47ddc3b8&v=4" alt="teatcher"/>
          <div>
              <strong>Vinícius Diehl de Franceschi</strong>
              <span>React</span>
           </div>
        </header>

        <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quaerat aliquid, eligendi libero doloremque veniam illo,
           a perspiciatis asperiores distinctio modi eum cupiditate. Explicabo labore, porro magnam nulla ex aliquam.
           <br/><br/>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quaerat aliquid, eligendi libero doloremque veniam illo,
           a perspiciatis asperiores distinctio modi eum cupiditate. Explicabo labore, porro magnam nulla ex aliquam.
        </p>

        <footer>
            <p>
                Preço/hora
                <strong>R$ 80,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="WhatsApp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
  )
}

export default TeatcherItem;