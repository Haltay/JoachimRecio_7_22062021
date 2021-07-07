import React from 'react';

import './Login.css';
import Header from "../../header/Header";
import LoginForm from "../../loginForm/LoginForm";
import Footer from '../../footer/Footer';

function Login() {
    return (
        <div className="page-wrapper">
            <Header/>
            <div className="main">
                <div className="login">
                    <div className="login-form">
                        <h2 className="login-form__title">Se connecter</h2>
                        <LoginForm />
                    </div>                
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Login;
