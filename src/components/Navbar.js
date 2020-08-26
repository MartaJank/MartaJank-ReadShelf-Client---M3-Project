import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";


class Navbar extends Component {
    
  
  render() {
    const { user, logout, isLoggedIn } = this.props;
    return (
      <nav className='navbar'>
        <Link to={"/"} id='home-btn'>
          <img className="nav-logo" src="../images/Logo.png" alt="logo" />
        </Link>
        {isLoggedIn ? (
          <>
            <p className='navbar-user'>Hi {user.username}!</p>
            <Link to={'/profile'}>Profile</Link>
            <Link to={'/books'}>Find Books</Link>
            <Link to={'/bookshelf'}><p>My Bookshelf</p></Link>
            <Link to={'/tracking'}><p>Reads Tracking</p></Link>
            <Link to={'/book-clubs'}><p>Book Club</p></Link>
            <button className='navbar-button' onClick={logout}>
              Logout
            </button>
            <Link to={'/faq'}>FAQ</Link>
          </>
        ) : (
          <>
            <Link to='/login'>
              <button className='navbar-button'>Login</button>
            </Link>
            <br />
            <Link to='/signup'>
              <button className='navbar-button'>Sign Up</button>
            </Link>
            <Link to={'/books'}>Find Books</Link>
            <p>Book Club</p>
            <Link to={'/faq'}>FAQ</Link>
          </>
        )}
      </nav>
    );
  }
}

export default withAuth(Navbar);
