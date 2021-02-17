import { findAllByTitle } from '@testing-library/react';
import React, { Component } from 'react'
//import { Redirect } from "react-router-dom";
export default class User extends Component {
    constructor() {
        super()
        this.state = {
            isLogin: false
        }
    }


    login() {
        alert("logging success..!");
        
    }
    passwordChange() {
        alert("password changed success !");
        console.warn("state", this.state);
    }

    isRegiter() {
        window.alert("Logout success !");

    }
    render() {

        return (
            <div className="auth">

                {
                    !this.state.isLogin ?

                        <div>

                            <input type="text" placeholder="username"
                                onChange={(e) => { this.setState({ name: e.target.value }) }} /><br /><br />
                            <input type="password" placeholder="password" 
                                onChange={(e) => { this.setState({ password: e.target.value }) }} /><br /><br />
                            <button onClick={() => this.login()}>Login </button><span>     </span>
                            <button onClick={() => this.setState({ isLogin: true })}>Change Password</button>

                        </div>

                        :
                        
                        <div>
                             <img src="G:\REACTAPP\login-app\public\home.jpg" alt=""/>
                            <input type="password" placeholder="new password" 
                                onChange={(e) => { this.setState({ password: e.target.value }) }} /><br /><br />
                            <input type="password" placeholder=" conform password"
                                onChange={(e) => { this.setState({ password: e.target.value }) }} /><br />
                            <br />
                            <button onClick={() => this.passwordChange()}> Save Password</button><span>    </span>
                            <button onClick={() => this.isRegiter()}>Logout</button>
                        </div>
                   

                }

            </div>
        )
    }
}
