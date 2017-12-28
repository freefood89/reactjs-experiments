import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'
import classNames from 'classnames'

import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'

import { openDrawer } from 'actions'

const drawerWidth = 240

const styles = theme => ({
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  hide: {
    display: 'none',
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 12,
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
})

class Bar extends React.Component {
  render() {
    const { classes, isDrawerOpen, openDrawer } = this.props
    return (
      <AppBar className={classNames(classes.appBar, isDrawerOpen && classes.appBarShift)}>
        <Toolbar disableGutters={!isDrawerOpen}>
          <IconButton
            color="contrast"
            aria-label="open drawer"
            onClick={openDrawer}
            className={classNames(classes.menuButton, isDrawerOpen && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" noWrap>
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}

Bar = withStyles(styles)(Bar)

const mapStateToProps = state => ({
  isDrawerOpen: state.view.drawer.open,
})

const mapDispatchToProps = dispatch => ({
  openDrawer: () => { dispatch(openDrawer()) },
})

export default Bar = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Bar)

