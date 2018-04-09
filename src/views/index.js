import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles';

import Dashboard from 'views/dashboard'
import Devices from 'views/devices'
import Events from 'views/events'
import Metrics from 'views/metrics'
import Dialog from 'material-ui/Dialog';

import Drawer from 'views/drawer'
import Bar from 'views/bar'

import { NotFound } from 'views/error';
import 'material-design-icons/iconfont/material-icons.css'
import { closeDialog } from 'views/dialog/actions'
import { dispatcher } from 'config/poller/inject'
import Dispatcher from '../dispatcher';

const styles = theme => ({
  root: {
    width: '100%',
    height: 430,
    marginTop: theme.spacing.unit * 3,
    zIndex: 1,
    overflow: 'hidden',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  content: {
    width: '100%',
    position: 'fixed',
    [theme.breakpoints.up('xs')]: {
      top: 56,
      height: 'calc(100% - 56px)',
      maxHeight: 'calc(100% - 56px)',
    },
    [theme.breakpoints.up('md')]: {
      top: 64,
      height: 'calc(100% - 56px)',
      maxHeight: 'calc(100% - 64px)',
    },
  },
});

class App extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  }

  render() {
    const { classes, isDialogOpen, closeDialog } = this.props
    return (
      <Router className={classes.root} basename="/ui">
        <div className={classes.appFrame}>
          <Bar/>
          <Drawer/>
          <main className={classes.content}>
            <Switch>
              {/* <Route exact path="/" component={Home} /> */}
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/devices" component={Devices} />
              <Route exact path="/events" component={Events} />
              <Route exact path="/metrics" component={Metrics} />
              <Route component={NotFound}/>
            </Switch>
            <Dialog open={isDialogOpen} onClose={closeDialog}>
              { this.props.dialogContent }
            </Dialog>
          </main>
        </div>
      </Router>
    );
  }
}

const d = new Dispatcher()
let AppComponent = withStyles(styles)(App);
AppComponent = dispatcher(d, AppComponent)

const mapStateToProps = state => ({
  isDialogOpen: state.view.dialog.open,
  dialogContent: state.view.dialog.content,
})

const mapDispatchToProps = dispatch => ({
  closeDialog: () => { dispatch(closeDialog()) },
})

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppComponent)

export {
  AppComponent,
  AppContainer as default,
}


