import React, { Component } from 'react'
//import Logo from './Logo';
//import Task from './Task';
//import User from './User';
import {Link, Route, Router} from "react-router-dom";
import Home from './Home';
import User from './User';

export default class Navbar extends Component {
    title(){
        window.alert("please login...!")
        
    }
    render() {
       // const p=this.props;
        return (
            <div >
                
        <Link to="Logo">Nimap<img src="logo.png" height="15px"></img></Link>
        <Link to="Home" onClick={this.title}>HOME</Link>
        <Link to="Task" onClick={this.title}>TASKS</Link>
        <Link to="/" onClick={this.title}>USER</Link>
            </div>
        )
    } 
}
