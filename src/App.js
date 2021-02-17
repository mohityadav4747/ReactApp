import Footer from './component/Footer';
import './App.css';
import Logo from './component/Logo';
import Home from './component/Home';
import Task from './component/Task';
import User from './component/User';
import Protected from './component/Protected';
import Navbar from './component/Navbar';
//import Login from './component/Login';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//npm install react-router-dom
function App() {
  return (
    <div className="App">
         
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/Logo">
          <Logo/>
          </Route>
          <Route path="/Home">

            <Home/>
          </Route>
          <Route path="/Task">
          <Task/>
          </Route>
      
          <Route path="/">
            <User/>
          </Route>
        </Switch>
        
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
