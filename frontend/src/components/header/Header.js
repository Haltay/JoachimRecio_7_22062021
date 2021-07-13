import React from 'react';
import { useLocation } from 'react-router-dom';

import './Header.css';
import groupomoniaLogo from '../../assets/logo4.svg'

function Header() {
    let { pathname } = useLocation();

    return (
        <div className="header">

            <div className='group-header'>
                <a href="/logout">
                    <img src={groupomoniaLogo} alt='logo-groupomania' className='group-logo' />
                </a>
            </div>

            <div>
                {pathname === '/register' || pathname === '/login' || pathname === '/' ? (
                    <div className="header__nav">
                        <button className="header_button">
                            <a href='/login'>
                                Se connecter
                            </a>
                        </button>
                        <button className="header_button">
                            <a href="/register">
                                S'inscrire
                            </a>
                        </button>
                    </div>
                ) : (
                    <div className="header__nav">
                        <button className="header_button">
                            <a href='/home' className="active">Accueil</a>
                        </button>

                        <button className="header_button">
                            <a href='/newpost' className="active">Ecrire un post</a>
                        </button>

                        <button className="header_button">
                            <a href='/logout'>Se déconnecter</a>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header;
