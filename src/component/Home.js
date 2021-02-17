import React, { Component } from 'react'
import { Link, Switch } from 'react-router-dom';

export default class Home extends Component {
    
    render() {
    
        
        return (
<select className="home">
  <img src="G:\REACTAPP\login-app\public\home.jpg"/>
  <option value="v" >Lorem Ipsum</option>
  
  <option value="a" >News India</option>
  <option value="ea">Espn.com</option>
  <option value="abp">ABP.in</option>
  
</select>

        )
    }
}
