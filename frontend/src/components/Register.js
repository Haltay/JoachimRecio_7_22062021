import React from 'react';
import { Link } from "react-router-dom";

import '../styles/Register.css';
import Header from "./Header";
import RegisterForm from "./RegisterForm";
import Footer from './Footer';

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
                        <p>Oups j'ai déjà un compte <span role="img">😊</span> 
                         <Link to="/login">, je vais me connecter avec. </Link></p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Register;
