import React from 'react';
import { Link } from "react-router-dom";

import Header from "../../header/Header";
import RegisterForm from "../../registerForm/RegisterForm";
import Footer from '../../footer/Footer';

import './Register.css';

function Register() {
    return (
        <div className="page-wrapper">
            <Header/>
            <div className="main">
                <div className="register">
                    <div className="register-form">
                        <h2 className="register-form__title">Je m'inscris</h2>
                        <RegisterForm />
                    </div>

                    <div className="register-login-modal">
                        <p>Oups j'ai déjà un compte <span role="img" aria-label="smiley">😊</span> 
                         <Link to="/login">, je vais me connecter avec. </Link></p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Register;
