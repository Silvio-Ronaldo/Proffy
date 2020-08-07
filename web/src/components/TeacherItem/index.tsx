import React from 'react';

import whatsIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/48893927?s=460&u=5a414a7b65386954ac45e948d653258d980cc7dd&v=4" alt="Silvio Ronaldo" />
                <div>
                    <strong>Silvio Ronaldo</strong>
                    <span>Física</span>
                </div>
            </header>

            <p>
                Apaixonado por toda a loucura chamada Física.
                <br /><br />
                Há mais de 10 anos estudando e pesquisando sobre fenômenos físicos e suas consequências. Já trouxe mais de 500 alunos para esse mundo fantástico!
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>22,00</strong>
                </p>
                <button type="button">
                    <img src={whatsIcon} alt="WhatsApp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;