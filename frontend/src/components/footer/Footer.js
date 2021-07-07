import React from 'react';
import './Footer.css';


function Footer() {
    return (
        <footer>
            <div className="about">
                <p id="about-title">Groupomania</p>

                <div className="about-list">
                    <div className="about-list-nofont">
                        Mentions légales
                    </div>
                    <div className="about-list-nofont">
                        <a href="mailto:admin@groupomania.com">
                            Contact en cas de problème
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;