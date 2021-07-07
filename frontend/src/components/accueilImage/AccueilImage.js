import React from 'react';

import company from '../../assets/company.jpg'

import './Accueil_image.css';

const Accueil_image = () => {

    return (
        <div className='container accueil-image'>
            
            <h2 className='group-title'>Notre réseau social</h2>

            <div className="group-company-img">
                <img src={company} alt='logo-groupomania' className='group-company' />
            </div>

            <h4 className='group-description'>Spécialisé dans la grande distribution, Groupomania est présent pour vous faciliter la vie.<br></br>
                <br></br>
                Avec des valeurs humaines et un professionnalisme inégalé, c'est la compagnie dont vous avez besoin.
            </h4>
        </div>
    );
}

export default Accueil_image;
