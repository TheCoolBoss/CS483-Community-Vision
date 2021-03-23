import React, { useState, useRef } from 'react';
import './App.css';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Games from './Components/Games';
import About from './Components/About';
import GettingStarted from './Components/GettingStarted';
import SettingsPage from './Components/SettingsPage'
import LearnAlphabet from './Components/Games/LearnAlphabet';
import LearnWordAdvanced from './Components/Games/LearnWord/LearnWordAdvanced';
import LearnWordBeginner from './Components/Games/LearnWord/LearnWordBeginner';
import LearnWordMedium from './Components/Games/LearnWord/LearnWordMedium';
import AlphabetNoHelp from "./Components/Games/NoHelpAlphabet";
import SandboxLetters from "./Components/Games/SandboxLetters";
import SandboxWords from "./Components/Games/SandboxWords";
import SortedAlphabet from "./Components/Games/sorted";
import LearnNumbers from "./Components/Games/learnNumbers";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ButtonsTutorial from "./Components/Games/buttonTutorial";
import AlphabetRace from './Components/Games/AlphabetRace';
import AlphabetRacePractice from './Components/Games/AlphabetRacePractice';
import CustomWords from './Components/Games/CustomWords';
import { initial } from "./Components/Games/Common/Functions";

function App() {
  const [backgroundColor, setBackgroundColor] = useState(() => initial('backgroundColor'));
  const currentRef = useRef();
  const navRef = useRef();
  const updatePage = (value) => {
    currentRef.current.update(value);
    setBackgroundColor(initial('backgroundColor'));
  }
  const updateNav = (value) => {
    navRef.current.update();
    setBackgroundColor(initial('backgroundColor'));
  }
  return (
    <Router>
      <div className="App" style={{ backgroundColor: backgroundColor }}>
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
            <AlphabetNoHelp ref={currentRef}/>
          </Route>
          <Route path="/sandboxLetters">
            <SandboxLetters ref={currentRef}/>
          </Route>
          <Route path="/sandboxWords">
            <SandboxWords ref={currentRef}/>
          </Route>
          <Route path="/learnNumbers">
            <LearnNumbers ref={currentRef}/>
          </Route>
          <Route path="/buttons">
            <ButtonsTutorial ref={currentRef} />
          </Route>
          <Route path="/sorted">
            <SortedAlphabet ref={currentRef} />
          </Route>
          <Route path="/alphabetRace">
            <AlphabetRace ref={currentRef} />
          </Route>
          <Route path="/gettingStarted">
            <GettingStarted ref={currentRef} />
          </Route>
          <Route path="/alphabetRacePractice">
            <AlphabetRacePractice ref={currentRef} />
          </Route>
          <Route path="/customWords">
            <CustomWords ref={currentRef} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



export default App;
