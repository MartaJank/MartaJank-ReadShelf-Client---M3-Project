import React, { Component } from 'react';
import axios from 'axios';
import { withAuth } from "../lib/AuthProvider";
import { Link } from 'react-router-dom';

class CreatedClubs extends Component {
    constructor(props) {
        super()
        this.state = {
            myClubs: []
        };
    }

    getMyClubs = () => {
        axios.get(`${process.env.REACT_APP_API_URI}/book-clubs/${this.props.user._id}/created`, {withCredentials: true}).then(responseFromApi => {
        console.log('clubs', responseFromApi)    
        this.setState({
                myClubs: responseFromApi.data
            })
        })
    }

    componentDidMount() {
        this.getMyClubs();
    }
    
    render() {
        return (
            <div>
                <h5>MY BOOKCLUBS</h5>
                <hr />
                {this.state.myClubs.map(club => {
                    return (
                        <div>
                            <p>{club.title}</p>
                            <p>{club.currentBookTitle}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default withAuth(CreatedClubs)