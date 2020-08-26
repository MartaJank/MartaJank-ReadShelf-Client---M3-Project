import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { withAuth } from "../lib/AuthProvider";

class TrackingProgress extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listOfProgress: []
        };
    }

    getProgress = () => {
        axios.get(`${process.env.REACT_APP_API_URI}/lists/${this.props.user._id}/reads-tracking/in-progress`, {withCredentials: true})
        .then(responseFromApi => {
            this.setState({
                listOfProgress: responseFromApi.data
            })
        })
    }

    componentDidMount() {
        this.getProgress();
    }
    
    render() {
        return (
            <div>
                {this.state.listOfProgress.map(book => {
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

export default withAuth(TrackingProgress)