import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter as Router, Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import DashboardIcon from 'material-ui-icons/Dashboard'
import MenuIcon from 'material-ui-icons/Menu'
import EventAvailableIcon from 'material-ui-icons/EventAvailable'
import ShowChartIcon from 'material-ui-icons/ShowChart'
import MemoryIcon from 'material-ui-icons/Memory'
import SettingsIcon from 'material-ui-icons/Settings';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import Dashboard from './Dashboard'

import Home from './Home';
import Item from './Item';
import NoMatch from './NoMatch';
import './App.css'
import 'material-design-icons/iconfont/material-icons.css'

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
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    height: 'auto',
    width: drawerWidth,
    height: '100%',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden'
  },
  drawerPaperClose: {
    width: 60,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  drawerInner: {
    // Make the items inside not wrap when transitioning:
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    height: 56,
    [theme.breakpoints.up('sm')]: {
      height: 64,
    },
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

class App extends Component {
  state = {
    open: false,
  };

  static propTypes = {
    classes: PropTypes.object.isRequired
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const classes = this.props.classes;
    return (
      <Router className={classes.root} basename="/ui">
        <div className={classes.appFrame}>
          <AppBar className={classNames(classes.appBar, this.state.open && classes.appBarShift)}>
            <Toolbar disableGutters={!this.state.open}>
              <IconButton
                color="contrast"
                aria-label="open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, this.state.open && classes.hide)}
               >
                <MenuIcon />
              </IconButton>
              <Typography type="title" color="inherit" noWrap>
                Mini variant drawer
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            type="permanent"
            classes={{
              paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
            }}
            open={this.state.open}
          >
            <div className={classes.drawerInner}>
              <div className={classes.drawerHeader}>
                <IconButton onClick={this.handleDrawerClose}>
                  <ChevronLeftIcon />
                </IconButton>
              </div>
              <Divider />
              <List className={classes.list}>
                <ListItem button component={Link} to={'/items'}>
                  <ListItemIcon>
                    <DashboardIcon />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem button component={Link} to={'/devices'}>
                  <ListItemIcon>
                    <MemoryIcon />
                  </ListItemIcon>
                  <ListItemText primary="Devices" />
                </ListItem>
                <ListItem button component={Link} to={'/metrics'}>
                  <ListItemIcon>
                    <ShowChartIcon />
                  </ListItemIcon>
                  <ListItemText primary="Metrics" />
                </ListItem>
                <ListItem button component={Link} to={'/events'}>
                  <ListItemIcon>
                    <EventAvailableIcon />
                  </ListItemIcon>
                  <ListItemText primary="Events" />
                </ListItem>
              </List>
              <Divider />
              <List className={classes.list}>
                <ListItem button component={Link} to={'/settings'}>
                  <ListItemIcon>
                    <SettingsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Settings" />
                </ListItem>
              </List>
            </div>
          </Drawer>
            <main className={classes.content}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/items" component={Dashboard} />
                <Route path="/item/:id" component={Item} />
                <Route component={NoMatch}/>
              </Switch>
            </main>
        </div>
      </Router>
    );
  }
}

export default withStyles(styles)(App);
