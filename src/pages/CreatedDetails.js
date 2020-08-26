import React, { Component } from 'react';
import axios from 'axios';
import { withAuth } from "../lib/AuthProvider";
import { Link } from 'react-router-dom';

class CreatedDetails extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.getCreatedBook();
    }

    getCreatedBook = () => {
        const { params } = this.props.match;
        console.log('params', params.id)
        axios  
            .get(`${process.env.REACT_APP_API_URI}/books/created/one/${params.id}`, {withCredentials: true})
            .then(responseFromApi => {
                const theBook = responseFromApi.data;
                console.log('book', theBook)
                this.setState(theBook);
            })
            .catch(err => {
                console.log(err);
            });
    };
    
    render() {
        return (
            <div>
                <img src={this.state.imageUrl} />
                <p>{this.state.title}</p>
                <p>{this.state.description}</p>
                <Link to={`/books/${this.state._id}/edit`}><button>Edit</button></Link>
            </div>
            
        )
    }
}

export default withAuth(CreatedDetails)