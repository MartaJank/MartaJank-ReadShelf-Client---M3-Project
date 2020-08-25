import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from 'react-router-dom';

class Private extends Component {
  
  
  render() {
    return (
      <div>
        <div>
          <img src={this.props.user.img} />
          <h1>{this.props.user.username}</h1>
        </div>
        <div>
          <Link to={`/profile/${this.props.user._id}/edit`}><button>Edit</button></Link>
        </div>
        <div>
          <button>My Bookshelf</button>
          <button>Reads Tracking</button>
          <button>My Book Clubs</button>
          <Link to={`/books/created/${this.props.user._id}`}><button>Created Books</button></Link>
        </div>
      </div>
    );
  }
}

export default withAuth(Private);	
