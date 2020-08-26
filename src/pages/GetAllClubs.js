import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class GetAllClubs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listOfClubs: []
        };
    }
    
    getAllClubs = () => {
        axios.get(`${process.env.REACT_APP_API_URI}/book-clubs`, {withCredentials: true}).then(responseFromApi => {
        console.log('clubs', responseFromApi)    
        this.setState({
                listOfClubs: responseFromApi.data
            })
        })
    }

    componentDidMount() {
        this.getAllClubs();
    }

    render() {
        return (
            <div>
                <Link to={'/book-clubs/club/add'}><button>CREATE A BOOK CLUB</button></Link>
                {this.state.listOfClubs.map(club => {
                    return (
                        <div>
                            <div>
                                <img src={club.img} />
                            </div>
                            <div>
                                <p>{club.title}</p>
                                <hr />
                                <p>{club.description}</p>
                                <p>Currrent book: {club.currentBookTitle}</p>
                                <Link to={`/book-clubs/${club._id}`}><button>More info</button></Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default GetAllClubs