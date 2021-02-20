import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Home from './Home';
import Select from 'react-select';

export default class Nav extends Component {
    render() {
        return (
            <div>
          <nav className="navbar navbar-epand navbar-light fixed-top">
           <div className="container">
           <Link to={'/'} className="navbar-brand">Home</Link>
           <Link to={'/task'} className="nav-link">Tasks</Link>
           <Link to={'/login'} className="nav-link">Login</Link>
          
              <Link to={'/register'} className="nav-link">Sign Up</Link>
      </div>
     </nav>
            </div>
        )
    }
}
