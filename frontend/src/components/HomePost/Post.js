import React, { Component } from 'react';
import axios from 'axios';

import Comment from './Comment';
import NewCommentForm from './NewCommentForm';
import '../../styles/homePost/Post.css';
import profilePic from "../../assets/icon.png";

import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from 'react-bootstrap';



class Post extends Component {

    state = {
        comments: []
    }

    componentDidMount() {
        this.getAllComments();
    }

    getAllComments() {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; token=`);
        const token = parts.pop().split(';').shift();

        axios.get('http://localhost:3300/api/post/' + this.props.post.id + '/comments?sort=createdAt&order=asc&include=user', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res => {
                this.setState({ comments: res.data });
            })
            .catch(err => {
                console.log(err);
                window.alert('Une erreur est survenue, veuillez réessayer plus tard. Si le problème persiste, contactez l\'administrateur du site');
            })
    }

    addComment(comment) {
        let { comments } = this.state;
        comments.push(comment);
        this.setState({ comments });
    }

    handlePostDelete = (event) => {
        if (window.confirm('Voulez vous vraiment supprimer ce post ?')) {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; token=`);
            const token = parts.pop().split(';').shift();

            axios.delete('http://localhost:3300/api/post/delete/' + this.props.post.id, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
                .then(() => {
                    this.props.deletePost(this.props.post.id);
                })
                .catch((err) => {
                    console.log(err);
                    window.alert('Une erreur est survenue, veuillez réessayer plus tard. Si le problème persiste, contactez l\'administrateur du site');
                })
        }
    }

    deleteComment(commentId) {
        let { comments } = this.state;
        comments = comments.filter(comment => comment.id !== commentId);
        this.setState({ comments });
    }

    render() {
        let { comments } = this.state;


        return (
            <Card className="text-center">
                <Card.Header>

                    <Card.Title>
                        <h3 className="title__description">
                            {this.props.post.title}
                        </h3>
                    </Card.Title>

                    <div className="post__header">
                        {<img src={profilePic} alt="" className="post__profile-image" />}
                        <div>
                            <h6 className="post__fullname">Ecrit par {this.props.post.User.username}</h6>
                            <time className="post__creation-date" dateTime={new Date(this.props.post.createdAt).toISOString()}>{new Date(this.props.post.createdAt).toLocaleDateString()}</time>
                        </div>
                    </div>
                </Card.Header>

                <Card.Body>

                    <Card.Text>
                        <span className="content_description">
                            <span>
                                {this.props.post.image ? <img src={this.props.post.image} alt="" className="post__image" /> : ''}
                            </span>
                            <span className="post__description">
                                {this.props.post.content}
                            </span>
                        </span>

                        {this.props.user.roles && this.props.user.roles.includes('ADMIN') ?

                            <Button variant="primary" href="#" onClick={this.handlePostDelete} className="post__delete">Supprimer le post</Button> : ''
                        }
                    </Card.Text>
                </Card.Body>

                <Card.Footer className="text-muted">
                    <div className="post__comments">
                        <p className="post__comments-counter">
                            <span>{comments.length}</span> commentaire(s)
                        </p>

                        <NewCommentForm postId={this.props.post.id} user={this.props.user} addComment={this.addComment.bind(this)} />

                        {comments ? (comments.map(comment => {
                            return <Comment key={comment.id} comment={comment} user={this.props.user} deleteComment={this.deleteComment.bind(this)} />
                        })) : ''}
                    </div>
                </Card.Footer>
            </Card>
        );
    }
}

export default Post;
