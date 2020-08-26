import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { withAuth } from "../lib/AuthProvider";

class BookshelfAudiobooks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listOfAudiobooks: []
        };
    }

    getAudiobooks = () => {
        axios.get(`${process.env.REACT_APP_API_URI}/lists/${this.props.user._id}/bookshelf/audiobook`, {withCredentials: true})
        .then(responseFromApi => {
            this.setState({
                listOfAudiobooks: responseFromApi.data
            })
        })
    }

    componentDidMount() {
        this.getAudiobooks();
    }
    
    render() {
        return (
            <div>
                <Link to={`/lists/${this.props.user._id}/bookshelf/paper`}><button>Paper</button></Link>
                <Link to={`/lists/${this.props.user._id}/bookshelf/ebook`}><button>Ebooks</button></Link>
                <Link to={`/lists/${this.props.user._id}/bookshelf/audiobook`}><button>Audiobooks</button></Link>
                {this.state.listOfAudiobooks.map(book => {
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

export default withAuth(BookshelfAudiobooks)