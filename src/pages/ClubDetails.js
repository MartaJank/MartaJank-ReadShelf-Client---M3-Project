import React, { Component } from 'react';
import axios from 'axios';
import { withAuth } from "../lib/AuthProvider";

class ClubDetails extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    
    componentDidMount() {
        this.getSingleClub();
    }

    getSingleClub = () => {
        const { params } = this.props.match;
        console.log('params', params.id)
        axios  
            .get(`${process.env.REACT_APP_API_URI}/book-clubs/${params.id}`, {withCredentials: true})
            .then(responseFromApi => {
                const theClub = responseFromApi.data;
                this.setState(theClub);
            })
            .catch(err => {
                console.log(err);
            });
    };

    render() {
        return (
            <div>
                <div>
                    <img src={this.state.bookToReadCover} />
                    <p>{this.state.currentBookTitle}</p>
                </div>
                <div>
                    <p>{this.state.title}</p>
                    <p>DESCRIPTION</p>
                    <p>{this.state.description}</p>
                    <p>MEMBERS</p>
                </div>
                <div>
                    {this.state.creator === this.props.user._id ? 
                        <>
                            <button>EDIT</button>
                            <button>DELETE</button>
                        </>
                        : 
                        <button>JOIN</button>
                    }
                </div>
            </div>
        )
    }
}

export default withAuth(ClubDetails)