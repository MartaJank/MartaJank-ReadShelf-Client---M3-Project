/* import React, {Component} from "react";
import {ReactNavbar} from "react-responsive-animate-navbar";
import { withAuth } from "../lib/AuthProvider";
import { withRouter } from "react-router-dom";
 
class Navbar extends Component {
  render() {
    const { user, logout, isLoggedIn } = this.props;
    return (
      <>
          {isLoggedIn ? (
      <ReactNavbar
        color="#E8E3DF"
        logo="https://res.cloudinary.com/martajank/image/upload/v1598511845/Logo_ngj48v.png"
        
        menu={[
          { name: "HOME", to: "/" },
          { name: "PROFILE", to: "/profile" },
          { name: "FIND BOOKS", to: "/books" },
          { name: "BOOK CLUB", to: "/book-clubs" },
          { name: "LOG OUT", to: "/" },
          { name: "FAQ", to: "/faq" },
          <button onClick={logout}>Log Out</button>
        ]}

        social={[
          {
            name: "Home",
            url: "/",
            icon: ["fab", "linkedin-in"],
          },
          {
            name: "Facebook",
            url: "https://www.facebook.com/nazeh200/",
            icon: ["fab", "facebook-f"],
          },
          {
            name: "Instagram",
            url: "https://www.instagram.com/nazeh_taha/",
            icon: ["fab", "instagram"],
          },
          {
            name: "Twitter",
            url: "http://nazehtaha.herokuapp.com/",
            icon: ["fab", "twitter"],
          },
        ]}
      />) : ( <ReactNavbar
        color="#E8E3DF"
        logo="https://res.cloudinary.com/martajank/image/upload/v1598511845/Logo_ngj48v.png"
       
        menu={[
          { name: "HOME", to: "/" },
          { name: "SIGN UP", to: "/signup" },
          { name: "LOG IN", to: "/login" },
          { name: "FIND BOOKS", to: "/books" },
          { name: "FAQ", to: "/faq" },
        ]}

        social={[
          {
            name: "Home",
            url: "/",
            icon: ["fab", "linkedin-in"],
          },
          {
            name: "Facebook",
            url: "https://www.facebook.com/nazeh200/",
            icon: ["fab", "facebook-f"],
          },
          {
            name: "Instagram",
            url: "https://www.instagram.com/nazeh_taha/",
            icon: ["fab", "instagram"],
          },
          {
            name: "Twitter",
            url: "http://nazehtaha.herokuapp.com/",
            icon: ["fab", "twitter"],
          },
        ]}
      />)}
      
      </>
      
    );
  }
}


export default withRouter(withAuth(Navbar)) */

import React, { Component } from 'react';
import { withAuth } from "../lib/AuthProvider";
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    const { user, logout, isLoggedIn } = this.props;
    return (
      <div className="navbar">
        <nav role="navigation">
      <div id="menuToggle">

        <input type="checkbox" />


        <span></span>
        <span></span>
        <span></span>

      {this.props.user ? 
        <ul id="menu">
          <Link to={"/"}><li>Home</li></Link>
          <Link to={"/profile"}><li>Profile</li></Link>
          <Link to={"/books"}><li>Find Books</li></Link>
          <Link to={"/book-clubs"}><li>Book Clubs</li></Link>
          <Link to={"/faq"}><li>FAQ</li></Link>
          <Link to={"/"}><button onClick={logout}>Log Out</button></Link>
        </ul>
       : 
      <ul id="menu">
          <Link to={"/"}><li>Home</li></Link>
          <Link to={"/login"}><li>Log In</li></Link>
          <Link to={"/signup"}><li>Sign Up</li></Link>
          <Link to={"/books"}><li>Find Books</li></Link>
          <Link to={"/book-clubs"}><li>Book Clubs</li></Link>
          <Link to={"/faq"}><li>FAQ</li></Link>
      </ul>
      }
      </div>
      </nav>
      <div>
        <img className="nav-logo" src="https://res.cloudinary.com/martajank/image/upload/v1598511845/Logo_ngj48v.png" />
      </div>
      </div>
    )
  }
}

export default withAuth(Navbar)