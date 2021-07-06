import React, { Component } from 'react';
import axios from 'axios';

import '../../styles/homePost/Home.css';
import Header from '../Header';
import Footer from '../Footer'
import AllPosts from './AllPosts';

class Home extends Component {

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
                <div className="home">
                    <h2 className="home-title">LES DERNIERS POSTS</h2>
                    <div className="home-main">
                        <AllPosts user={user} />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;
