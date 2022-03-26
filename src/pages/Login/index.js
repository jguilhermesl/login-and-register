import React from 'react';
import { Link } from 'react-router-dom'
import './style.css'

import {AiOutlineInstagram} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {FcGoogle} from 'react-icons/fc'

import Input from '../../components/Input'

function Login() {
    return (
        <div>
            <div className="containerLogin">
                <div className="textsLogin">
                    <h1>Vamos logar!</h1>
                    <p>Bem vindo de volta.</p>
                </div>

                <div className="inputsLogin">
                    <Input texto="Email, telefone ou username" />
                    <Input texto="Senha" />
                </div>
                <p className="forgotPassword">Forgot Password?</p>
                <button className="buttonLogIn">Log In</button>
                <div className="lineOr">
                    <span>or</span>
                </div>
                <div className="socialMedia">
                    <AiOutlineInstagram />
                    <BsFacebook />
                    <FcGoogle />
                </div>
                <div className="dontHaveAccount">
                    <p>Não tem uma conta? <Link to="/register" className="spanRegister">Registre-se agora.</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login;