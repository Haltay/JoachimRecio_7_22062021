import React from 'react';
import '../styles/Footer.css';


function Footer() {
    return (
        <footer>
            <div className="about">
                <p id="about-title">Groupomania</p>

                <div className="about-list">
                    <div className="about-list-nofont">
                        <div className="about-list_text">
                            Mentions légales
                        </div>
                    </div>
                    <div className="about-list-nofont">
                        <a href="mailto:admin@groupomania.com">
                            <div className="about-list_text">
                                Contact en cas de problème
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;