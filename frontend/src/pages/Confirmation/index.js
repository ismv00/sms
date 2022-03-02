import { Link } from 'react-router-dom';
import  confirmation from '../../assets/confirmation.svg';

import './style.css';


export function Confirmation() {
    return(
        <div className="container">
            <img className='img-confirmation' src={confirmation} alt="Icone de confirmacao de login" />
            <h1>Seu cadastro foi confirmado! Em breve nossa equipe entrará em contato.</h1>
            <Link className='link-to-back' to="/">Voltar</Link>
        </div>
    )}