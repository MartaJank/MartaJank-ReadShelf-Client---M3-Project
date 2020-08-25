import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class GetAllClubs extends Component {
    constructor(props) {
        super()
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
                {this.state.listOfClubs.map(club => {
                    return (
                        <div>
                            <p>{club.title}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default GetAllClubs