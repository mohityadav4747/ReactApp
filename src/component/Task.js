import React, { Component } from 'react'

export default class Task extends Component {
    constructor(){
        super();
        this.state={
            data:null
        }
    }
    componentDidMount(){
        var url="http://jsonplaceholder.typicode.com/todos/2";
        
        fetch(url,{
            method: 'GET',
            headers:{
                'Accept' :'application/json',
                'Content-Type': 'application/json'
            }
        }).then((result)=>{
            result.json().then((resp)=>{
               // console.warn(resp);
                this.setState({data:resp})
            })
        })
    }
        render(){
            const data=this.state.data;
            console.warn(data);
            return(
                <div className="task">
                    {
                        
                        data ?
                        <div >
                            
                            <hr></hr>
                            {data.userId}  {data.title}   false 
                            <button >Delete</button>
                        
                            <hr></hr>{data.id}    {data.title}    false
                            <button >Delete</button>
                            <hr></hr>{data.userId}    {data.title}    false
                            <button >Delete</button><br/><br/>
                            <button>Add Tasks</button>
                            <hr></hr>

                        </div>
                        :<p>please wait..</p>
                    }
                    
                </div>
            )
        }
}
