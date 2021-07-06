import React, { Component } from 'react';
import axios from 'axios';

import profilePic from '../../assets/icon.svg';
import { Card, Button } from 'react-bootstrap';

import '../../styles/homePost/Profile.css';

class Profile extends Component {

    handleDelete() {
        if (window.confirm('Voulez vous vraiment supprimer votre compte ?')) {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; token=`);
            const token = parts.pop().split(';').shift();

            axios.delete('http://localhost:3300/api/user/delete', {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
                .then(() => {
                    window.location.href = '/logout';
                })
                .catch(err => {
                    console.log(err);
                    window.alert('Une erreur est survenue, veuillez réessayer plus tard. Si le problème persiste, contactez l\'administrateur du site');
                })
        }
    }

    render() {

        return (
            <Card className="text-center">
                <Card.Header>

                    <Card.Title>
                        <h3 className="account-title">Mon compte</h3>
                    </Card.Title>

                    <div className="profile__header">
                        <div className="profile">
                            <img src={profilePic} alt="" className="profile__image" />
                        </div>
                        <div className="profile">
                            <h2 className="profile__fullname">{this.props.user.username}</h2>
                        </div>
                    </div>
                </Card.Header>

                <Card.Body>

                    <Card.Text>

                        <span className="profile__description">
                           Dans un futur proche il sera possible de rajouter votre biographie, soyez patient le futur arrive.
                        </span>


                    </Card.Text>
                </Card.Body>

                <Card.Footer className="text-muted">
                    <Button href="#" className="profile__delete" onClick={this.handleDelete}>Supprimer mon compte</Button>
                </Card.Footer>
            </Card>
        );
    }
}

export default Profile;
