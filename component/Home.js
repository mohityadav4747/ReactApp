//import { Dropdown } from 'bootstrap'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            
            <div className="home">
    
            <select className="India" id="dropdown">
     
     <option value="">Dropdown</option>
  <option value="">News India </option>
  <option value="ea">Espn.com</option>
  <option value="abp">www.ABPnews.in</option>
  
</select><br/>
                </div>
        )
    }
}
