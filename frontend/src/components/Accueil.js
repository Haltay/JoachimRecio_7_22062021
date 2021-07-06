import React from 'react';

import Header from "./Header";
import AccueilImage from "./AccueilImage";
import Footer from './Footer';

import '../styles/Accueil.css';

function Accueil() {
    document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:01 GMT';

    return (
        <div className="accueil">
            <Header />
            <div className="accueil-content">
                <div className="accueil-middle">
                    <AccueilImage />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Accueil;