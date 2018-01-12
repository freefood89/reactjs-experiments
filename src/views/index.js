import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles';

import Dashboard from 'views/dashboard'

import Dialog from 'material-ui/Dialog';

import Drawer from 'views/drawer'
import Bar from 'views/bar'

import Home from 'Home';
import Item from 'Item';
import NoMatch from 'NoMatch';
import 'App.css'
import 'material-design-icons/iconfont/material-icons.css'
import { closeDialog } from 'actions'
import { dispatcher } from 'config/poller/inject'
import Dispatcher from '../dispatcher';

const drawerWidth = 240;

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
  appBar: {
    position: 'absolute',
    zIndex: theme.zIndex.navDrawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  content: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: 24,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
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
              <Route exact path="/" component={Home} />
              <Route exact path="/items" component={Dashboard} />
              <Route path="/item/:id" component={Item} />
              <Route component={NoMatch}/>
            </Switch>
            <Dialog open={isDialogOpen} onRequestClose={closeDialog}>
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


