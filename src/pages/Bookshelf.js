import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from "../lib/AuthProvider";
import axios from 'axios';

class Bookshelf extends Component {

    state= { 
            audiobookStatus: false,
            ebookStatus: false,
            paperbookStatus: false,
            audiobooks: [],
            ebooks: [],
            paperbooks: []
        }

        componentDidMount() {
            this.getUserInfo()
        }

        getUserInfo = async() => {
            await axios.get(`${process.env.REACT_APP_API_URI}/user/info/${this.props.user._id}`)
            .then(data => {
                console.log(data.data, 'ajhsdgfhkusdyhgkusbcdu')
                let audioData = data.data.audiobooksAPI;
                let ebookData = data.data.eBooksAPI;
                let paperData = data.data.paperBooksAPI;
                this.setState({audiobooks: audioData,
                            ebooks: ebookData,
                            paperbooks: paperData})
            })
        }

        dynamicAudiobook = () => {
            
            if(this.state.ebookStatus || this.state.paperbookStatus == true){
                this.setState({
                    audiobookStatus: false
                })
            } 

            this.setState({
                audiobookStatus: true
            })
                console.log('audiobooks', this.state.audiobooks)
                const audiobook = this.state.audiobooks
                /* this.DynamicText(this.state.audiobook) */
        }

        dynamicEbook = () => {
            if(this.state.audiobookStatus || this.state.paperbookStatus == true){
                this.setState({
                    ebookStatus: false
                })
            } 

            this.setState({
                ebookStatus: true
            })
            console.log('ebooks', this.state.ebooks)
            const ebook = this.state.ebooks
            /* this.DynamicText(ebook) */
        }

        dynamicPaperbook = () => {
            if(this.state.ebookStatus || this.state.audiobookStatus == true){
                
                this.setState({
                    paperbookStatus: false
                })
            } 

            this.setState({
                paperbookStatus: true
            })
            console.log('paperbooks', this.state.paperbooks)
            const paperbook = this.state.paperbooks
            /* this.DynamicText(paperbook) */
        }

    render() {
        const { audiobooks, ebooks, paperbooks, audiobookStatus, ebookStatus, paperbookStatus } = this.state;
        console.log(audiobooks, ebooks, paperbooks, 'ARRRRRRRRRRGH')
        /* const DynamicText = (e,arg) => {
            
            
            
            console.log('arg', arg)
            console.log('e', e)
           
                return (
                    arg.map(data => (
                        <Fragment>
                            <Link to={`/books/${data.id}`} style={{textDecoration: 'none', color: 'black'}}><h1>{data.volumeInfo.title}</h1></Link>
                            {data.volumeInfo.imageLinks.thumbnail ? <Link to={`/books/${data.id}`}><img src={data.volumeInfo.imageLinks.thumbnail} alt="Foto libro" /></Link> : <Link to={`/books/${data.id}`}><img src={data.volumeInfo.imageLinks.medium} alt="Foto libro" /></Link>}
                            
                            {console.log(data)}
                        </Fragment>
                    ))
                )
            
            
        } */
        return (
            <Fragment>
                <div className="bksh-btns">
                    <button className="profile-btn" onClick={ (e) => this.dynamicAudiobook(e)}>Audiobook</button>
                    <button className="profile-btn" onClick={ (e) => this.dynamicEbook(e)}>Ebook</button>
                    <button className="profile-btn" onClick={ (e) => this.dynamicPaperbook(e)}>Paperbook</button>
                </div>
                
            
               
                    <div className="shown-books">
                        {this.state.audiobookStatus === true ?
                            audiobooks.map(data => (

                        <div className="book-show">
                        {data.volumeInfo.imageLinks.thumbnail ? <Link to={`/books/${data.id}`}><img src={data.volumeInfo.imageLinks.thumbnail} alt="Foto libro" /></Link> : <Link to={`/books/${data.id}`}><img src={data.volumeInfo.imageLinks.medium} alt="Foto libro" /></Link>}
                            <Link to={`/books/${data.id}`} style={{textDecoration: 'none', color: 'black'}}><p>{data.volumeInfo.title}</p></Link>
                            
                            {console.log(data)}
                        </div>
                    )) : paperbooks.map(data => (
                        <div className="book-show">
                        {data.volumeInfo.imageLinks.thumbnail ? <Link to={`/books/${data.id}`}><img src={data.volumeInfo.imageLinks.thumbnail} alt="Foto libro" /></Link> : <Link to={`/books/${data.id}`}><img src={data.volumeInfo.imageLinks.medium} alt="Foto libro" /></Link>}
                            <Link to={`/books/${data.id}`} style={{textDecoration: 'none', color: 'black'}}><p>{data.volumeInfo.title}</p></Link>
                            
                            {console.log(data)}
                        </div>
                    ))}
                    {this.state.ebookStatus === true ?
                            ebooks.map(data => (
                        <div className="book-show">
                        {data.volumeInfo.imageLinks.thumbnail ? <Link to={`/books/${data.id}`}><img src={data.volumeInfo.imageLinks.thumbnail} alt="Foto libro" /></Link> : <Link to={`/books/${data.id}`}><img src={data.volumeInfo.imageLinks.medium} alt="Foto libro" /></Link>}
                            <Link to={`/books/${data.id}`} style={{textDecoration: 'none', color: 'black'}}><p>{data.volumeInfo.title}</p></Link>
                            
                            {console.log(data)}
                        </div>
                    )) : paperbooks.map(data => (
                        <div className="book-show">
                        {data.volumeInfo.imageLinks.thumbnail ? <Link to={`/books/${data.id}`}><img src={data.volumeInfo.imageLinks.thumbnail} alt="Foto libro" /></Link> : <Link to={`/books/${data.id}`}><img src={data.volumeInfo.imageLinks.medium} alt="Foto libro" /></Link>}
                            <Link to={`/books/${data.id}`} style={{textDecoration: 'none', color: 'black'}}><p>{data.volumeInfo.title}</p></Link>
                            
                            {console.log(data)}
                        </div>
                    ))} 
                        {this.state.paperbookStatus === true ?
                            paperbooks.map(data => (
                        <div className="book-show">
                            {data.volumeInfo.imageLinks.thumbnail ? <Link to={`/books/${data.id}`}><img src={data.volumeInfo.imageLinks.thumbnail} alt="Foto libro" /></Link> : <Link to={`/books/${data.id}`}><img src={data.volumeInfo.imageLinks.medium} alt="Foto libro" /></Link>}
                            <Link to={`/books/${data.id}`} style={{textDecoration: 'none', color: 'black'}}><p>{data.volumeInfo.title}</p></Link>
                            
                            {console.log(data)}
                        </div>
                    )) : null}
                     
                    </div>
            </Fragment>
        )
    }
}

export default withAuth(Bookshelf)