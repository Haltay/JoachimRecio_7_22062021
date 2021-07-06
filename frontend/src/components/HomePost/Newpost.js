import React, { Component } from 'react';
import axios from 'axios';

import '../../styles/homePost/newPost.css';
import Header from '../Header';
import Profile from './Profile';
import AddPost from './AddPost';
import Footer from '../Footer';

class NewPost extends Component {

    state = {
        user: {}
    }

    componentDidMount() {
        this.authenticate();
    }

    authenticate() {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; token=`);
        const token = parts.pop().split(';').shift();

        axios.get('http://localhost:3300/api/auth/user', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res => {
                this.setState({ user: res.data });
            })
            .catch(() => {
                window.location.href = '/logout';
            })
    }

    render() {
        const { user } = this.state;

        return (
            <div className="page-wrapper">
                <Header />
                <div className="home-main">
                    <div className="home-center">
                        <Profile user={user} />
                        <AddPost user={user} />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default NewPost;
