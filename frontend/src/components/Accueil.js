import React from 'react';
// import { Link } from "react-router-dom";

// import Button from '@material-ui/core/Button';

import '../styles/Accueil.css';

import Header from "./Header";
import AccueilImage from "./AccueilImage";
import Footer from './Footer';

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