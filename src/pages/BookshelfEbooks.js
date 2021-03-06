import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from "../lib/AuthProvider";
import axios from 'axios';

class BookshelfEbooks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ebooks: []
        };
    }

    componentDidMount() {
            this.getEbooks();
        }

    getEbooks = () => {
        axios.get(`${process.env.REACT_APP_API_URI}/user/info/${this.props.user._id}`)
        .then(data => {
            let ebookData = data.data.eBooksAPI;
            this.setState({ebooks: ebookData})
        })
    }

    render() {
        return (
            <div>
                <div className="bksh-btns">
                <Link to={`/bookshelf/paper`}><button className="profile-btn">Paper</button></Link>
                <Link to={`/bookshelf/ebook`}><button className="profile-btn">Ebooks</button></Link>
                <Link to={`/bookshelf/audiobook`}><button className="profile-btn">Audiobooks</button></Link>
                </div>
                <div className="shown-books">
                    {this.state.ebooks.map(data => {
                    return(
                        <div className="book-show">
                            {data.volumeInfo.imageLinks.thumbnail ? <Link to={`/books/${data.id}`}><img src={data.volumeInfo.imageLinks.thumbnail} alt="Foto libro" /></Link> : <Link to={`/books/${data.id}`}><img src={data.volumeInfo.imageLinks.medium} alt="Foto libro" /></Link>}
                            <Link to={`/books/${data.id}`} style={{textDecoration: 'none', color: 'black'}}><p>{data.volumeInfo.title}</p></Link>
                            
                            {console.log(data)}
                        </div>
                    )
                })}
                </div>
                
            </div>
        )
    }
}

export default withAuth(BookshelfEbooks)