import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Login from './components/auth/Login';
import Register from "./components/auth/Register";
import SummaryPage from "./components/SummaryPage";
import StartShift from './components/StartShift';
import ShiftListPage from './components/ShiftListPage';
// Redux
import { Provider } from 'react-redux';
import store from './store';

export default class App extends React.Component<{}, {}> {
  render() {
    // @ts-ignore
      return (
          <Provider store={store}>
              <div className="App">
                  <Router>
                      <Switch>
                          <Route path="/create">
                              <Register />
                          </Route>
                          <Route path="/summary">
                              <SummaryPage />
                          </Route>
                          <Route path="/start-shift">
                              <StartShift />
                          </Route>
                          <Route path="/view-shifts">
                              <ShiftListPage />
                          </Route>
                          <Route path="/" exact={true}>
                              <header className="App-header">
                                  <Login login="hello" />
                              </header>
                          </Route>
                      </Switch>
                  </Router>

              </div>
          </Provider>

    );
  }
}
