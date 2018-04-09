import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'
import classNames from 'classnames'

import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'

import { openDrawer } from 'views/drawer/actions'

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
  headerWrapper: {
    position: 'fixed',
    top: 0,
    left: 72,
    right: 72,

    verticalAlign: 'baseline',
    '-webkit-font-smoothing': 'antialiased',
  },
  headerTitle: {
    fontSize: 18,
  },
  sectionTitle: {
    float: 'left',
  },
  chapterTitle: {
    float: 'left',
  },
  titleSeparator: {
    width: '0.5em',
    margin: '0 0.5em',
  },
  appBar: {
    width: '100%',
    zIndex: 6,
  },
  bar: {
    [theme.breakpoints.up('xs')]: {
      lineHeight: '56px',
      height: 56,
      minHeight: 56,
    },
    [theme.breakpoints.up('md')]: {
      lineHeight: '64px',
      height: 64,
      minHeight: 64,
    },
  },
  menuButton: {
    position: 'fixed',
    color: 'white',
    left: 12,
    [theme.breakpoints.up('xs')]: {
      top: 4,
    },
    [theme.breakpoints.up('md')]: {
      top: 8,
    },
  },
})

class Bar extends React.Component {
  render() {
    const { classes, openDrawer } = this.props
    const separator = '–'
    return (
      <AppBar position='fixed' className={ classNames(classes.appBar, classes.bar) }>
        <Toolbar disableGutters={ false } className={ classes.bar }>
          <IconButton
            color="default"
            aria-label="open drawer"
            onClick={openDrawer}
            className={ classes.menuButton }
          >
            <MenuIcon color="white"/>
          </IconButton>
          <div className={ classes.headerWrapper }>
            <div className={ classes.headerTitle }>
              <span className={ classes.sectionTitle}>
                Title
              </span>
              <span className={ classes.chapterTitle }>
                <span className={ classes.titleSeparator }>
                  { separator }
                </span>
                Section
              </span>
            </div>
          </div>
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

