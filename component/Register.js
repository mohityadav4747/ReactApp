import React, { Component } from 'react'
import axios from 'axios';
export default class Register extends Component {
    handleSubmit= e =>{
        e.preventDefault();
        const data={
            first_name:this.firstName,
            last_name:this.lastName,
            email:this.email,
            password:this.password,
            confirm_password:this.confirmPassword
        };
        console.log(data,"Register success!.");
        //alert("done");
        axios.post('register',data).then(res=>{
          console.log(res);
        
    }).catch(err =>{
        console.log(err);
    })
};
    

    render() {
        
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>welcome to register page.</h2>
                <div className="form-group">
                    <label> First name</label>
                    <input type="text" className="form-control" placeholder="First Name"
                    onChange={e=>this.firstName = e.target.value}/>
                </div>
                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" 
                    onChange={e=>this.lastName = e.target.value}/>
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Email"
                    onChange={e=>this.email = e.target.value}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password"
                    onChange={e=>this.password = e.target.value}/>
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Conform Password"
                    onChange={e=>this.confirmPassword = e.target.value}/>
                </div>
                <button className="btn btn-primary btn-block" to="/login">Sign UP</button>
            </form>
        )
    }
}
