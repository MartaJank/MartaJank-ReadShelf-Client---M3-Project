import React, { Component } from 'react';
import axios from 'axios';
import { withAuth } from "../lib/AuthProvider";

class BookAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            author: '',
            description: '',
            genre: '',
            year: '',
            publishingHouse: '',
            isbn: '',
            creator: ''
        }
    }

    handleFormSubmit = event => {
        event.preventDefault();
        const title = this.state.title;
        const author = this.state.author;
        const description = this.state.description;
        const year = this.state.year;
        const publishingHouse = this.state.publishingHouse;
        const isbn = this.state.isbn;

        axios
            .post(`${process.env.REACT_APP_API_URI}/books/add`, { title, author, description, year, publishingHouse, isbn }, {withCredentials: true})
            .then(() => {
                // this.props.getData();
                this.setState({ 
                    title: '',
                    author: '',
                    description: '',
                    year: '',
                    publishingHouse: '',
                    isbn: '',
                 });
            })
            .catch(error => console.log(error));
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
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
                    <textarea name="description" value={this.state.description} onChange={e => this.handleChange(e)} />

                    <label>Year</label>
                    <input type="text" name="year"  value={this.state.year} onChange={e => this.handleChange(e)} />

                    <label>Publishing House</label>
                    <input type="text" name="publishingHouse" value={this.state.publishingHouse} onChange={e => this.handleChange(e)} />

                    <label>ISBN</label>
                    <input type="text" name="isbn" value={this.state.isbn} onChange={e => this.handleChange(e)} />

                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default withAuth(BookAdd)