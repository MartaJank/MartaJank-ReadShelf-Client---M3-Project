import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { withAuth } from "../lib/AuthProvider";

class BookshelfEbooks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listOfEBooks: []
        };
    }

    getEBooks = () => {
        axios.get(`${process.env.REACT_APP_API_URI}/${this.props.user._id}/bookshelf/ebook`, {withCredentials: true})
        .then(responseFromApi => {
            this.setState({
                listOfEBooks: responseFromApi.data
            })
        })
    }

    componentDidMount() {
        this.getEBooks();
    }
    
    render() {
        return (
            <div>
                <Link to={`/lists/${this.props.user._id}/bookshelf/paper`}><button>Paper</button></Link>
                <Link to={`/lists/${this.props.user._id}/bookshelf/ebook`}><button>Ebooks</button></Link>
                <Link to={`/lists/${this.props.user._id}/bookshelf/audiobook`}><button>Audiobooks</button></Link>
                {this.state.listOfEBooks.map(book => {
                    return(
                        <div>
                            <img src={book.img} />
                            <p>{book.title}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default withAuth(BookshelfEbooks)