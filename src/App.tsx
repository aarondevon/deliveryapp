import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Login from './components/Login';
import CreateAccount from "./components/CreateAccount";
import SummaryPage from "./components/SummaryPage";
import StartShift from './components/StartShift';
import ViewShifts from './components/ViewShifts';

export default class App extends React.Component<{}, {}> {
  render() {
    // @ts-ignore
      return (

      <div className="App">
          <Router>
              <Switch>
                  <Route path="/create">
                      <CreateAccount />
                  </Route>
                  <Route path="/summary">
                      <SummaryPage />
                  </Route>
                  <Route path="/start-shift">
                      <StartShift />
                  </Route>
                  <Route path="/view-shifts">
                      <ViewShifts />
                  </Route>
                  <Route path="/" >
                      <header className="App-header">
                          <Login login="hello" />
                      </header>
                  </Route>
              </Switch>
          </Router>

      </div>
    );
  }
}
