import React from 'react';

import Header from "../../header/Header";
import AccueilImage from "../../accueilImage/AccueilImage";
import Footer from '../../footer/Footer';

import './Accueil.css';

function Accueil() {
 
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