import React, { Component } from 'react';
import axios from 'axios';
import { withAuth } from "../lib/AuthProvider";
import { Link } from 'react-router-dom';

class CreatedDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            theBook: {},
            okMessage: ''
        };
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
            <div className="full-book">
                <div className="cover-part created">
                    <img className="created-cover" src={this.state.imageUrl} />
                </div>
                <img className="masking-tape" src="https://res.cloudinary.com/martajank/image/upload/v1598511796/toppng.com-masking-tape-transparent-background-tape-transparent-758x224_copy_jt6mij.png"/>
                <div className="info-part created">
                    <h3>{this.state.theBook.title}</h3>
                    <hr />
                    <p>AUTHOR</p>
                    <p>{this.state.theBook.author}</p>
                    <p>DESCRIPTION</p>
                    <p>{this.state.theBook.description}</p>
                    <p>YEAR</p>
                    <p>{this.state.theBook.year}</p>
                    <p>PUBLISHING HOUSE</p>
                    <p>{this.state.theBook.publishingHouse}</p>
                    <p>ISBN</p>
                    <p>{this.state.theBook.isbn}</p>
                    <div className="created-btns">
                        <Link to={`/books/${this.state.theBook._id}/edit`}><button className="add-to-list-btn">Edit</button></Link>
                        <button>Delete</button>
                    </div>
                    
                </div>
                {this.props.user ?
                    <div className="list-btns">
                    <p>{this.state.okMessage}</p>
                        <div className="list-btns-onelist">
                            <p>ADD TO BOOKSHELF</p>
                            <button className="add-to-list-btn" onClick={() => this.addToList('paperBooks')}>Paper</button>
                            <button className="add-to-list-btn" onClick={() => this.addToList('eBooks')}>eBook</button>
                            <button className="add-to-list-btn" onClick={() => this.addToList('audiobooks')}>Audiobook</button>
                        </div>
                        <div className="list-btns-onelist">
                            <p>ADD TO TRACKING</p>
                            <button className="add-to-list-btn" onClick={() => this.addToList('pendingBooks')}>Pending</button>
                            <button className="add-to-list-btn" onClick={() => this.addToList('progressBooks')}>In Progress</button>
                            <button className="add-to-list-btn" onClick={() => this.addToList('readBooks')}>Read</button>
                        </div>
                    </div>
                    : null }
            </div>
            
        )
    }
}

export default withAuth(CreatedDetails)