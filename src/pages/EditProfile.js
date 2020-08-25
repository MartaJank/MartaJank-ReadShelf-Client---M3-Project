import React, { Component } from 'react';
import axios from 'axios';
import { withAuth } from "../lib/AuthProvider";

class EditProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: this.props.user.username,
            email: this.props.user.email,
            img: this.props.user.img
        }
    }

    handleFormSubmit = event => {
        const username = this.state.username;
        const email = this.state.email;
        const img = this.state.img;

        event.preventDefault();

        console.log(this.props.user._id)
        axios
            .patch(`${process.env.REACT_APP_API_URI}/profile/${this.props.user._id}/edit`, {
                username,
                email,
                img
            }, {withCredentials: true})
            .then(() => {
                this.props.history.push(`/profile`)
            })
            .catch(error => console.log(error));
    }

    handleChange = (e) => {
        let {name, value} = e.target
        this.setState({
            [name]: value
        })
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Name</label>
                    <input type="text" name="username" value={this.state.title} onChange={e => this.handleChange(e)} />
                    <label>Email</label>
                    <input type="text" name="email" value={this.state.email} onChange={e => this.handleChange(e)} />
                    {/* <label>Profile picture</label>
                    <input /> */}

                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}


export default withAuth(EditProfile)