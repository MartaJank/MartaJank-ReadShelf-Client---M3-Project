import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { withAuth } from "../lib/AuthProvider";

class TrackingRead extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listOfRead: []
        };
    }

    getRead = () => {
        axios.get(`${process.env.REACT_APP_API_URI}/lists/${this.props.user._id}/reads-tracking/read`, {withCredentials: true})
        .then(responseFromApi => {
            this.setState({
                listOfRead: responseFromApi.data
            })
        })
    }

    componentDidMount() {
        this.getRead();
    }
    
    render() {
        return (
            <div>
                {this.state.listOfRead.map(book => {
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

export default withAuth(TrackingRead)