import React from 'react'
import { withStyles } from 'material-ui/styles'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import MuiDrawer from 'material-ui/Drawer'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import IconButton from 'material-ui/IconButton'
import DashboardIcon from 'material-ui-icons/Dashboard'
import EventAvailableIcon from 'material-ui-icons/EventAvailable'
import ShowChartIcon from 'material-ui-icons/ShowChart'
import MemoryIcon from 'material-ui-icons/Memory'
import SettingsIcon from 'material-ui-icons/Settings'
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft'

import { closeDrawer } from 'actions'

const drawerWidth = 240

const styles = theme => ({
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    zIndex: theme.zIndex.navDrawer,
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
})

class Drawer extends React.Component {
  render() {
    const { classes, isDrawerOpen, closeDrawer } = this.props
    return (
      <MuiDrawer
        type="permanent"
        classes={{
          paper: classNames(classes.drawerPaper, !isDrawerOpen && classes.drawerPaperClose),
        }}
        open={isDrawerOpen}
      >
        <div className={classes.drawerInner}>
          <div className={classes.drawerHeader}>
            <IconButton onClick={closeDrawer}>
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
      </MuiDrawer>
    )
  }
}

Drawer = withStyles(styles)(Drawer)

const mapStateToProps = state => ({
  isDrawerOpen: state.view.drawer.open,
})

const mapDispatchToProps = dispatch => ({
  closeDrawer: () => dispatch(closeDrawer())
})

Drawer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Drawer)

export default Drawer
