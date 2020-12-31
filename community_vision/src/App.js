import React, { useRef } from 'react';
import './App.css';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Games from './Components/Games';
import About from './Components/About';
import SettingsPage from './Components/SettingsPage'
import LearnAlphabet from './Components/Games/LearnAlphabet';
import LearnWordAdvanced from './Components/Games/LearnWord/LearnWordAdvanced';
import LearnWordBeginner from './Components/Games/LearnWord/LearnWordBeginner';
import LearnWordMedium from './Components/Games/LearnWord/LearnWordMedium';
import AlphabetNoHelp from "./Components/Games/NoHelpAlphabet";
import SandboxLetters from "./Components/Games/SandboxLetters";
import SandboxWords from "./Components/Games/SandboxWords";
import LearnNumbers from "./Components/Games/learnNumbers";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const currentRef = useRef();
  const navRef = useRef();
  const updatePage = (value) => {
    currentRef.current.update();
  }
  const updateNav = (value) => {
    navRef.current.update();
  }
  return (
    <Router>
      <div className="App">
        <Nav updateAppState={updatePage} ref={navRef} />
        <Switch>
          <Route path="/" exact>
            <Home ref={currentRef} />
          </Route>
          <Route path="/games">
            <Games ref={currentRef} />
          </Route>
          <Route path="/about">
            <About ref={currentRef} />
          </Route>
          <Route path="/settings">
            <SettingsPage updateAppState={updateNav} />
          </Route>
          <Route path="/learnAlphabet">
            <LearnAlphabet ref={currentRef} />
          </Route>
          <Route path="/learnWordBeginner">
            <LearnWordBeginner ref={currentRef} />
          </Route>
          <Route path="/learnWordAdvanced">
            <LearnWordAdvanced ref={currentRef} />
          </Route>
          <Route path="/learnWordMedium">
            <LearnWordMedium ref={currentRef} />
          </Route>
          <Route path="/noHelpAlphabet">
            <AlphabetNoHelp />
          </Route>
          <Route path="/sandboxLetters">
            <SandboxLetters />
          </Route>
          <Route path="/sandboxWords">
            <SandboxWords />
          </Route>
          <Route path="/learnNumbers">
            <LearnNumbers />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



export default App;
