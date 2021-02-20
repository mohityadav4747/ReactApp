import React, { Component } from 'react';
//import { handleInputChange } from 'react-select/src/utils'
export default class Task extends Component {

    handle=()=>{
        alert("deleted")
    };
        
    handleTask= () =>{
        console.log("task added");
    }
        render() {
        return (
            <table class="table" onClick={this.handle}>
                <thead>
                    <tr>
                        <th scope="col">USERID</th>
                        <th scope="col">NAME</th>
                        <th scope="col">BOOLEAN</th>
                        <th scope="col">OPERATION</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>false</td>
                        <td><button className="btn btn-danger btn-block">Delete</button></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>false</td>
                        <td><button className="btn btn-danger btn-block">Delete</button></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>false</td>
                        <td><button className="btn btn-danger btn-block">Delete</button></td>
                    </tr>
                </tbody>
                <button className="btn btn-primary " onClick="handleTask">Add Tasks</button>
              
            </table>

        )
    }
}
