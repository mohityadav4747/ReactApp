import React, { Component } from 'react'
//import { Redirect } from "react-router-dom";
export default class Auth extends Component {
    constructor() {
        super()
        this.state = {
            isRegister: false
        }
    }
    login() {
        //alert("log");
        console.warn("state", this.state);
        fetch('http://jsonplaceholder.typicode.com/todos', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",

            },
            body: JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((resp) => {
                console.log(resp.success.token);
                localStorage.setItem("auth", JSON.stringify(resp.success.token))
            })
        })
    }
    register() {
        //alert("log");
        console.warn("state", this.state);
        fetch('http://jsonplaceholder.typicode.com/todos', {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",

            },
            body: JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((resp) => {
                console.log(resp.success.token);
                localStorage.setItem("auth", JSON.stringify(resp.success.token))
            })
        })
    }
    render() {
  //      var auth=JSON.parse(localStorage.getItem('auth'))
        return (
            <div>
            {
    //          auth? <Redirect to="/Task" />:null
            }

                {

                    !this.state.isRegister ?
                        <div>
                            username:<input type="text"
                                onChange={(e) => { this.setState({ email: e.target.value }) }} /><br />
                password:<input type="text"
                                onChange={(e) => { this.setState({ password: e.target.value }) }} /><br />
                            <button onClick={() => this.login()}>Login</button>
                            <button onClick={() => this.setState({ isRegister: true })}>Change Password</button>
                        </div>
                        :

                        <div>
                            New Password:<input type="text"
                                onChange={(e) => { this.setState({ email: e.target.value }) }} /><br />
                Conform password:<input type="text"
                                onChange={(e) => { this.setState({ password: e.target.value }) }} /><br />
                                
                            <button onClick={() => this.register()}> Save Password</button>
                            <button onClick={() => this.setState({ isRegister: false })}>Logout</button>
                        </div>


                }

            </div>
        )
    }
}
