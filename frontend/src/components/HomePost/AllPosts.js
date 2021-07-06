import React, { Component } from 'react';
import axios from 'axios';

import Post from './Post';

class AllPosts extends Component {

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

    deletePost(postId) {
        let { posts } = this.state;
        posts = posts.filter(post => post.id !== postId);
        this.setState({ posts });
    }

    render() {
        let { posts } = this.state;

        return (
            <div className="posts">
                {posts ? (posts.map(post => {
                    return <Post key={post.id} post={post} user={this.props.user} deletePost={this.deletePost.bind(this)} />
                })) : ''}
            </div>
        )
    }
}

export default AllPosts;
