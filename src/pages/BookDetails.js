import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { withAuth } from "../lib/AuthProvider";

class BookDetails extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    
    componentDidMount() {
        this.getSingleBook();
    }

    getSingleBook = () => {
        const { params } = this.props.match;
        console.log('params', params.id)
        axios  
            .get(`https://www.googleapis.com/books/v1/volumes/${params.id}`)
            .then(responseFromApi => {
                console.log('response', responseFromApi.data.volumeInfo.title)
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
                <div>
                    {this.state.volumeInfo && 
                    <>
                    <div>
                        <img alt="book cover" src={this.state.volumeInfo.imageLinks.small ? this.state.volumeInfo.imageLinks.small : this.state.volumeInfo.imageLinks.thumbnail} />
                        <p>Rating: {this.state.volumeInfo.averageRating}/5</p>
                    </div>
                    <h3>{this.state.volumeInfo.title.toUpperCase()}</h3>
                    <hr />
                    <h6>AUTHOR</h6>
                    <p>{this.state.volumeInfo.authors.[0]}</p>
                    <p>{this.state.volumeInfo.authors.[1] ? this.state.volumeInfo.authors.[1] : null}</p>
                    <h6>DESCRIPTION</h6>
                    <p>{this.state.volumeInfo.description}</p>
                    <h6>YEAR</h6>
                    <p>{this.state.volumeInfo.publishedDate}</p>
                    <h6>PUBLISHING HOUSE</h6>
                    <p>{this.state.volumeInfo.publisher}</p>
                    {this.state.volumeInfo.industryIdentifiers ?
                    <>
                    <h6>ISBN</h6>
                    <p>{this.state.volumeInfo.industryIdentifiers.[1] ? this.state.volumeInfo.industryIdentifiers.[1].identifier : null}</p>
                    <p>{this.state.volumeInfo.industryIdentifiers.[0] ? this.state.volumeInfo.industryIdentifiers.[0].identifier : null}</p>
                    </>
                    : null}
                    </>
                    }
                </div>
                <div>
                    {this.state.creator === this.props.user._id ? <button>Edit</button> : null}
                </div>
                <div>
                    <button>ADD TO...</button>
                </div>
            </div>
        )
    }
}

export default withAuth(BookDetails)