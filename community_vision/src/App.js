import React from 'react';
import './App.css';
import Home from './Components/Home'
import Nav from './Components/Nav';
import About from './Components/About'
import Profile from './Components/Profile'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/profile" component={Profile}/>
        </Switch>
      </div>
    </Router>
  );
}



export default App;
