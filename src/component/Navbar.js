import React, { Component } from 'react'
import Logo from './Logo';
import FetchData from './FetchData';
import Login from './Login';
import {Link} from "react-router-dom";

export default class Navbar extends Component {
    title(){
        alert("plese login...");
    }
    render() {
        const p=this.props;
        return (
            <div >
                
        <Link to="Logo"><img src="logo.png" height="15px"></img></Link>
        <Link to="Home" onClick={this.title}>HOME</Link>
        <Link to="Task" onClick={this.title}>TASKS</Link>
        <Link to="/" onClick={this.title}>USER</Link>
            </div>
        )
    } 
}
