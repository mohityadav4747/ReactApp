//import logo from './logo.svg';
import './App.css';
import Logo from './component/Logo';
import Home from './component/Home';
import Task from './component/Task';
import Auth from './component/Auth';
import Protected from './component/Protected';
import Navbar from './component/Navbar';


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
            <Auth/>
          </Route>
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
