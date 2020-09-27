import React from 'react';
import './App.css';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Games from './Components/Games';
import About from './Components/About';
import Profile from './Components/Profile';
import LearnAlphabet from './Components/Games/LearnAlphabet';
import AlphabetNoHelp from "./Components/Games/NoHelpAlphabet";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/games" component={Games}/>
          <Route path="/about" component={About}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/learnAlphabet" component={LearnAlphabet}/>
          <Route path="/noHelpAlphabet" component={AlphabetNoHelp}/>
        </Switch>
      </div>
    </Router>
  );
}



export default App;
