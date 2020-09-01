import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from "../lib/AuthProvider";
import axios from 'axios';

class BookshelfAudiobooks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            audiobooks: []
        };
    }

    componentDidMount() {
            this.getAudiobooks();
        }

    getAudiobooks = () => {
        axios.get(`${process.env.REACT_APP_API_URI}/user/info/${this.props.user._id}`)
        .then(data => {
            let audioData = data.data.audiobooksAPI;;
            this.setState({audiobooks: audioData})
        })
    }

    render() {
        return (
            <div>
                <div>
                <Link to={`/bookshelf/paper`}><button>Paper</button></Link>
                <Link to={`/bookshelf/ebook`}><button>Ebooks</button></Link>
                <Link to={`/bookshelf/audiobook`}><button>Audiobooks</button></Link>
                </div>
                
                {this.state.audiobooks.map(data => {
                    return(
                        <div className="book-show">
                            {data.volumeInfo.imageLinks.thumbnail ? <Link to={`/books/${data.id}`}><img src={data.volumeInfo.imageLinks.thumbnail} alt="Foto libro" /></Link> : <Link to={`/books/${data.id}`}><img src={data.volumeInfo.imageLinks.medium} alt="Foto libro" /></Link>}
                            <Link to={`/books/${data.id}`} style={{textDecoration: 'none', color: 'black'}}><p>{data.volumeInfo.title}</p></Link>
                            
                            {console.log(data)}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default withAuth(BookshelfAudiobooks)