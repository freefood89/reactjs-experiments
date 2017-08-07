import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard'
import Home from './Home';
import Item from './Item';
import ToolBar from './ToolBar';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ToolBar />
          <main className="mdc-toolbar-fixed-adjust">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route path="/item/:id" component={Item} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
