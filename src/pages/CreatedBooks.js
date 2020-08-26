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
            <div>
                <h5>BOOKS CREATED</h5>
                <hr />
                {this.state.listOfBooks.map(book => {
                    return (
                        <div>
                            <Link to={`/books/created/one/${book._id}`}>
                                <img src={book.img} />
                                <p>{book.title}</p>
                            </Link>       
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default withAuth(CreatedBooks)