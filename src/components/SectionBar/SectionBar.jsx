import React from 'react'

import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'

class SectionBar extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <AppBar
        position="static"
        color="default"
        className={ classes.bar }
      >
        <Toolbar disableGutters={ false } className={ classes.bar }>
          { this.props.children }
        </Toolbar>
      </AppBar>
    )
  }
}

const styles = theme => ({
  bar: {
    boxShadow: 'none',
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
    verticalAlign: 'baseline',
  },
})

export default SectionBar = withStyles(styles)(SectionBar)

