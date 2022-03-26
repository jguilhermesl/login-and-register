import React from 'react';
import { Link } from 'react-router-dom'
import './style.css'
import Input from '../../components/Input'

function Register() {
    return (
        <div className="containerRegister">
            <div className="textsRegister">
                <h1>Vamos te cadastrar!</h1>
                <p>Olá, usuário. Você terá uma brilhante jornada.</p>
            </div>
            <div className="inputsRegister">
                <Input texto='Nome' />
                <Input texto='Sobrenome' />
                <Input texto='Telefone' />
                <Input texto='Email' />
                <Input texto='Senha' />
            </div>
            <button className="buttonRegister">Cadastrar</button>
            <div className="dontHaveAccount">
                <p>Já tem uma conta? <Link to="/login" className="spanLogin">Login</Link></p>
            </div>
        </div >
    )
}

export default Register;