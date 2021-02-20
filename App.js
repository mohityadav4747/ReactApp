import React ,{Component} from 'react';

import axios from 'axios';
import Task from './component/Task';
import Register from './component/Register';
import Home from './component/Home';
import Nav from './component/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './component/Login';
import { BrowserRouter as Router, Route, Link, Switch, BrowserRouter } from 'react-router-dom';
export default class App extends Component {
  
    state={};
    componentDidMount(){
        axios.get('user').then(
            res=>{
               // console.log(res);
               this.setState({
                   user: res.data
               });
            }
        );

    }

  render(){
  return (
<BrowserRouter>
    
    <div className="App">
    
      <Nav/>
    
    
    <div className="auth-wrapper">
       <div className="auth-inner">
         <Switch>
           <Route exact path="/" component={()=><Home user={this.state.user}/>}/>
           
           <Route exact path="/task" component={Task}/>

           <Route exact path="/login" component={Login}/>
           <Route exact path="/register" component={Register}/>
         </Switch>
         </div>
    </div>
    
    </div>
    </BrowserRouter>
  );
}
}

