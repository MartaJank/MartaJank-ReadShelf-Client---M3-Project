import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

class Signup extends Component {
  state = { username: "", email: "", password: "" };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, email, password } = this.state;
    this.props.signup({ username, email, password });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, email, password } = this.state;
    return (
      <div>
      <div className="form-div-border">
        <form className="form" onSubmit={this.handleFormSubmit}>

          <label>Name</label>
          <input className="form-input" type="text" name="username" value={username} onChange={this.handleChange} />

          <label>Email</label>
          <input className="form-input" type="text" name="email" value={email} onChange={this.handleChange} />

          <label>Password</label>
          <input className="form-input" type="password" name="password" value={password} onChange={this.handleChange} />

          <input className="form-btn" type="submit" value="SIGN UP" />
        </form>
        <div className="after-form">
          <p>Already have an account?</p>
          <Link className="form-link" to={"/login"}>Login</Link>
        </div> 
      </div>
      <div className="form-div">
        
      </div>
        
      </div>
    );
  }
}

export default withAuth(Signup);	
