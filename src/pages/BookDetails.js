import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { withAuth } from "../lib/AuthProvider";

class BookDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            theBook: {},
            okMessage: ''
        };
    }
    
    componentDidMount() {
        this.getBook();
    }

    getBook = () => {
        const { params } = this.props.match;
        console.log('params', params.id)
        axios  
            .get(`https://www.googleapis.com/books/v1/volumes/${params.id}`)
            .then(responseFromApi => {
                console.log('response', responseFromApi.data.volumeInfo.title)
                const theBook = responseFromApi.data;
                console.log('book', theBook)
                this.setState({theBook: theBook});
            })
            .catch(err => {
                console.log(err);
            });
    };

    addToList = (listName) => {
        const { params } = this.props.match;
        axios
            .post(`${process.env.REACT_APP_API_URI}/books/${this.props.user._id}/push/${params.id}/${listName}`, {withCredentials: true})
            .then(responseFromApi => {
                this.setState({okMessage: 'Book Added'})
            })
            .catch(err => {
                console.log(err);
            });
    }
    
    render() {
        return (
            <div>
                <div>
                    {this.state.theBook.volumeInfo && 
                    <>
                    <div>
                        <img alt="book cover" src={this.state.theBook ? this.state.theBook.volumeInfo.imageLinks.thumbnail : null } />
                        <p>Rating: {this.state.theBook.volumeInfo.averageRating}/5</p>
                    </div>
                    <h3>{this.state.theBook.volumeInfo.title.toUpperCase()}</h3>
                    <hr />
                    <h6>AUTHOR</h6>
                    <p>{this.state.theBook.volumeInfo.authors.[0]}</p>
                    <p>{this.state.theBook.volumeInfo.authors.[1] ? this.state.theBook.volumeInfo.authors.[1] : null}</p>
                    <h6>DESCRIPTION</h6>
                    <p>{this.state.theBook.volumeInfo.description}</p>
                    <h6>YEAR</h6>
                    <p>{this.state.theBook.volumeInfo.publishedDate}</p>
                    <h6>PUBLISHING HOUSE</h6>
                    <p>{this.state.theBook.volumeInfo.publisher}</p>
                    {this.state.theBook.volumeInfo.industryIdentifiers ?
                    <>
                    <h6>ISBN</h6>
                    <p>{this.state.theBook.volumeInfo.industryIdentifiers.[1] ? this.state.theBook.volumeInfo.industryIdentifiers.[1].identifier : null}</p>
                    <p>{this.state.theBook.volumeInfo.industryIdentifiers.[0] ? this.state.theBook.volumeInfo.industryIdentifiers.[0].identifier : null}</p>
                    </>
                    : null}
                    </>
                    }
                </div>
                
                    {this.props.user ?
                    <div>
                    <p>{this.state.okMessage}</p>
                    <button onClick={() => this.addToList('paperBooks')}>Paper</button>
                    <button onClick={() => this.addToList('eBooks')}>eBook</button>
                    <button onClick={() => this.addToList('audiobooks')}>Audiobook</button>
                    <button onClick={() => this.addToList('pendingBooks')}>Pending</button>
                    <button onClick={() => this.addToList('progressBooks')}>In Progress</button>
                    <button onClick={() => this.addToList('readBooks')}>Read</button>
                    </div>
                    : null }
                
            </div>
        )
    }
}

export default withAuth(BookDetails)