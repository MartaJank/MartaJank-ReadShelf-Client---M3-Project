import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { withAuth } from "../lib/AuthProvider";

class TrackingPending extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listOfPending: []
        };
    }

    getPending = () => {
        axios.get(`${process.env.REACT_APP_API_URI}/${this.props.user._id}/reads-tracking/pending`, {withCredentials: true})
        .then(responseFromApi => {
            this.setState({
                listOfPending: responseFromApi.data
            })
        })
    }

    componentDidMount() {
        this.getPending();
    }
    
    render() {
        return (
            <div>
                {this.state.listOfPending.map(book => {
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

export default withAuth(TrackingPending)