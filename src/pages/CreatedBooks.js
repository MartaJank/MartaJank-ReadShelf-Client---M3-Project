import React, { Component } from 'react';
import axios from 'axios';
import { withAuth } from "../lib/AuthProvider";
import { Link } from 'react-router-dom';

class CreatedBooks extends Component {
    constructor(props) {
        super()
        this.state = {
            listOfBooks: []
        };
    }

    getCreatedBooks = () => {
        axios.get(`${process.env.REACT_APP_API_URI}/books/created/${this.props.user._id}`, {withCredentials: true}).then(responseFromApi => {
        console.log('books', responseFromApi)    
        this.setState({
                listOfBooks: responseFromApi.data
            })
        })
    }

    componentDidMount() {
        this.getCreatedBooks();
    }
    
    render() {
        return (
            <div className='created-books'>
                <Link to={'/books/book/add'}><button className="profile-btn">CREATE A BOOK</button></Link>
                <h5 className="created-title">BOOKS CREATED</h5>
                <hr />
                <div className="shown-books">
                    {this.state.listOfBooks.map(book => {
                        return (
                            <div className="book-show created">
                                <Link className="created-link" to={`/books/created/one/${book._id}`}>
                                    <img className="created-cover" src={book.imageUrl} />
                                    <p>{book.title}</p>
                                </Link>       
                            </div>
                        )
                    })}
                </div>
                
            </div>
        )
    }
}

export default withAuth(CreatedBooks)