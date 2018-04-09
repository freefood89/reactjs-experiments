import React from 'react'

import { withStyles } from 'material-ui/styles'

class Container extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.container}>
        {this.props.children}
      </div>
    )
  }
}

const styles = theme => ({
  container: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    overflowY: 'scroll',
    height: '100%',
    [theme.breakpoints.up('sm')]: {},
  }
})

export default Container = withStyles(styles)(Container)
