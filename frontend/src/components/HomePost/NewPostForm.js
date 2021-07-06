import React, { Component } from 'react';
import axios from 'axios';

import { Card } from 'react-bootstrap';


import '../../styles/homePost/newPostForm.css';

class NewPostForm extends Component {

    state = {
        fields: {
            title:'',
            content: '',
        },
        errors: {}
    }

    fileExtensions = [
        'gif',
        'jpg',
        'jpeg',
        'png'
    ]

    constructor(props) {
        super(props);
        this.imageInput = React.createRef();
        this.newPostForm = React.createRef();
    }

    handleValidation() {
        let { fields } = this.state;
        let formIsValid = true;
        let errors = {};

        // Content field validation
        if (!fields['content']) {
            errors['content'] = 'Le message de votre post ne peut pas être vide';
        }

        // File extension validation
        if (this.imageInput.current.value && !this.fileExtensions.includes(this.imageInput.current.value.split('.')[1].toLowerCase())) {
            errors['image'] = 'Les formats d\'image acceptés sont : ' + this.fileExtensions.join(', ');
        }

        if (Object.keys(errors).length !== 0) {
            formIsValid = false;
        }
        this.setState({ errors });

        return formIsValid;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.handleValidation()) {
            let { title } = this.state.fields;
            let { content } = this.state.fields;

            const value = `; ${document.cookie}`;
            const parts = value.split(`; token=`);
            const token = parts.pop().split(';').shift();

            let formData = new FormData();
            formData.append('title', title);
            formData.append('content', content);
            formData.append('image', this.imageInput.current.files[0]);

            axios.post('http://localhost:3300/api/post', formData, {
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(res => {
                    const post = res.data.post;
                    post.User = { username: this.props.user.username };
                    this.props.addPost(post);
                    window.location.href = "/home";
                })
                
                .catch(err => {
                    console.log(err);
                    let errors = {};
                    errors['g'] = err.response.data.error;
                    this.setState({ errors })
                })
        }
    }

    handleChange = (event) => {
        let { fields } = this.state;
        fields[event.target.name] = event.target.value;
        this.setState({ fields });
    }

    render() {
        let { errors } = this.state;

        return (        
            <form action="" className="newpost-form" onSubmit={this.handleSubmit} ref={this.newPostForm}>

            <Card className="text-center">
                <Card.Header>                
                    <Card.Title>
                        <h3 className="newpost-form__title">Ajouter un post</h3>
                    </Card.Title>                
                </Card.Header>

                <Card.Body>

                    <Card.Text>

                    <div className="Title__input-group">
                <label htmlFor="title" className="title__label">Ecrivez votre titre</label> 
                <br></br>
                <textarea name="title" id="title" className="title__textarea" value={this.state.fields['title']} onChange={this.handleChange} />
                    {errors['title'] ? (
                        <span className="title__error">{errors['title']}</span>
                    ) : '' }
                </div>   

                <div className="newpost-form__input-group">
                    <label htmlFor="image" className="newpost-form__image">Ajouter une image : </label>
                    <input type="file" name="image" id="image" ref={this.imageInput} className="newpost-form__file-upload" />
                    {errors['image'] ? (
                        <span className="newpost-form__error">{errors['image']}</span>
                    ) : '' }
                </div>    

                <div className="newpost-form__input-group">
                    <label htmlFor="content" className="newpost-form__label">Ici c'est pour votre message <span className="required">*</span></label>                  

                    <textarea name="content" id="content" className="newpost-form__textarea" value={this.state.fields['content']} onChange={this.handleChange} />
                    {errors['content'] ? (
                        <span className="newpost-form__error">{errors['content']}</span>
                    ) : '' }
                </div>                        
                               
                    </Card.Text>
                </Card.Body>
                
                <Card.Footer className="text-muted">
                
                    <input type="submit" value="Envoyer" className="newpost-form__submit"/>
                    
                </Card.Footer>
                
            </Card>
            </form>
        );

    }
}

export default NewPostForm;
