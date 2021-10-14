import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/navbar.component";
import { Home } from './pages/home.component';
import { About } from './pages/about.component';
import { Profile } from './pages/profile.component';
import { Alert } from "./components/alert.component";
import { AlertState } from "./context/alert/alertState.component.jsx";
import { GithubState } from "./context/github/githubState.component";


function App() {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Navbar/>
          <div className="container pt-4">
            <Alert alert={{text: 'Test alert'}}/>
            <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/about' component={About}/>
              <Route path='/profile/:name' component={Profile}/>
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
}

export default App;
