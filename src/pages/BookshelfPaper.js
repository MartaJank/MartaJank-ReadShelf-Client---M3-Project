import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { withAuth } from "../lib/AuthProvider";

class BookshelfPaper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listOfPaperBooks: []
        };
    }

    getPaperBooks = () => {
        axios.get(`${process.env.REACT_APP_API_URI}/api/lists/${this.props.user._id}/bookshelf/paper`, {withCredentials: true})
        .then(responseFromApi => {
            console.log('response', responseFromApi)
            this.setState({
                listOfPaperBooks: responseFromApi.data
            })
        })
    }

    componentDidMount() {
        this.getPaperBooks();
    }
    
    render() {
        console.log(this.state)
        return (
            <div>
                <Link to={`/lists/${this.props.user._id}/bookshelf/paper`}><button>Paper</button></Link>
                <Link to={`/lists/${this.props.user._id}/bookshelf/ebook`}><button>Ebooks</button></Link>
                <Link to={`/lists/${this.props.user._id}/bookshelf/audiobook`}><button>Audiobooks</button></Link>
                {this.state.listOfPaperBooks.map(book => {
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

export default withAuth(BookshelfPaper)