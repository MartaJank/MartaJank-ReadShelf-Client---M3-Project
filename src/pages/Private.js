import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from 'react-router-dom';

class Private extends Component {
  
  
  render() {
    return (
      <div>
        <div className="profile-pic-div">
          <img className="profile-pic" src={this.props.user.imageUrl} />
        </div>
        <div className="user-info">
          <h2 className="username">{this.props.user.username}</h2>
          <Link to={`/profile/${this.props.user._id}/edit`}><button className="profile-edit-btn">Edit</button></Link>
        </div>
        <div className="buttons-div">
          <Link to={'/bookshelf'}><button className="profile-btn">My Bookshelf</button></Link>
          <Link to={'/tracking'}><button className="profile-btn">Reads Tracking</button></Link>
          <Link to={`/book-clubs/${this.props.user._id}/created`}><button className="profile-btn">My Book Clubs</button></Link>
        </div>
      </div>
    );
  }
}

export default withAuth(Private);	
