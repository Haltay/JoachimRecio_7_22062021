import React, { Component } from 'react';
import axios from 'axios';

import NewPostForm from './NewPostForm';

class AdPost extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        this.getPosts();
    }

    getPosts() {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; token=`);
        const token = parts.pop().split(';').shift();

        axios.get('http://localhost:3300/api/post?sort=createdAt&order=desc&include=user', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res => {
                this.setState({ posts: res.data });
            })
            .catch(err => {
                console.log(err);
                window.alert('Une erreur est survenue, veuillez réessayer plus tard. Si le problème persiste, contactez l\'administrateur du site');
            })
    }

    addPost(post) {
        let { posts } = this.state;
        posts = [post, ...posts];
        this.setState({ posts });
    }

    render() {

        return (
            <div className="posts">
                <NewPostForm addPost={this.addPost.bind(this)} user={this.props.user} />
            </div>
        )
    }
}

export default AdPost;
