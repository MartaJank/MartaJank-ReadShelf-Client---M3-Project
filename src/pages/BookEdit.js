import React, { Component } from 'react';
import axios from 'axios';
import { withAuth } from "../lib/AuthProvider";

class BookEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.theBook.title,
            author: this.props.theBook.author,
            description: this.props.theBook.description,
            year: this.props.theBook.year,
            publishingHouse: this.props.theBook.publishingHouse,
            isbn: this.props.theBook.isbn,
            img: this.props.theBook.img
        }
    }

    handleFormSubmit = event => {
        const title = this.state.title;
        const author = this.state.author;
        const description = this.state.description;
        const year = this.state.year;
        const publishingHouse = this.state.publishingHouse;
        const isbn = this.state.isbn;
        const img = this.state.img;

        event.preventDefault();

        axios
            .patch(`${process.env.REACT_APP_API_URI}/books/${this.props.theBook._id}/edit`, {
                title,
                author,
                description,
                year,
                publishingHouse,
                isbn,
                img
            }, {withCredentials: true})
            .then(() => {
                this.props.history.push(`/books/created/${this.props.user._id}`)
            })
            .catch(error => console.log(error));
    }

    handleChange = (e) => {
        let {name, value} = e.target
        this.setState({
            [name]: value
        })
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Title</label>
                    <input type="text" name="title" value={this.state.title} onChange={e => this.handleChange(e)} />
                    <label>Author</label>
                    <input type="text" name="author" value={this.state.author} onChange={e => this.handleChange(e)} />
                    <label>Description</label>
                    <input type="text" name="description" value={this.state.description} onChange={e => this.handleChange(e)} />
                    <label>Year</label>
                    <input type="text" name="year" value={this.state.year} onChange={e => this.handleChange(e)} />
                    <label>Publishing House</label>
                    <input type="text" name="publishingHouse" value={this.state.publishingHouse} onChange={e => this.handleChange(e)} />
                    <label>ISBN</label>
                    <input type="text" name="isbn" value={this.state.isbn} onChange={e => this.handleChange(e)} />
                    <label>Book Cover</label>
                    <input type="text" name="img" value={this.state.img} onChange={e => this.handleChange(e)} />

                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default withAuth(BookEdit)