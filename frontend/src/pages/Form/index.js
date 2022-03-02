import React, { useState } from 'react';
import {  useNavigate,  } from 'react-router-dom';

import api from '../../services/api';

import './style.css';


export default function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [plan, setPlan] = useState(
        ''
    )

    const handleChange = event => {
        const target = event.target
        const name = target.name
        const value = target.value
        setPlan({
            ...plan,
            [name] : value
        })
    }

    

    const navigate = useNavigate();

    
    
    async function handleUser(e) {
        e.preventDefault();
        
        console.log({
            name,
            email,
            phone,  
            plan
            
            
        })
        const data = {
            name,
            email,
            phone,
            plan
        }

        try {
            const response = await api.post('users', data);

            alert('Cadastro efetuado com sucesso!');

            setName('');
            setEmail('');
            setPhone('');
            setPlan('');
           
            
        } catch (error) {
            alert('Erro ao efetuar o cadastro, tente novamente.')
        }

       
        
    }
    return (
        <div className='container'>
            <div className='area-text'>
            <h2>Welcome to SMS site</h2>
            <p>Escolha seu plano e comece usar</p>
            </div>

            <form onSubmit={handleUser} className='area-input'>
                <input 
                    type="text" 
                    placeholder='Digite seu nome'
                    value={name}
                    onChange={e => setName(e.target.value)} />
                <input 
                    type="email" 
                    placeholder='Escolha seu melhor e-mail'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder='Digite seu telefone'
                    value={phone}
                    onChange={ e => setPhone(e.target.value)}    
                />

                
                <div className='radio'>
                    <label>Basic</label>
                    <input className='input-radio ' 
                        type="radio" 
                        name='plan'
                        value='basic'
                        onChange={handleChange} checked={plan.plan=="basic"}
                        
                    />

                    <label>Premium</label>
                    <input className='input-radio '
                        type="radio" 
                        name='plan'
                        value='premium'
                        onChange={handleChange} checked={plan.plan=="premium"}
                    />  
                </div>
                <button>Cadastrar</button>
                
            </form>
      </div>
 
    )
}