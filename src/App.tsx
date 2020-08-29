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
