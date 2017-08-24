import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard'
import Home from './Home';
import Item from './Item';
import ToolBar from './ToolBar';
import PermanentDrawer from './PermanentDrawer'

import 'material-design-icons/iconfont/material-icons.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ToolBar />
          <div className="main mdc-toolbar-fixed-adjust">
            <PermanentDrawer />
            <main>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route path="/item/:id" component={Item} />
              </Switch>
            </main>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
