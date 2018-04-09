import React from 'react'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import SectionBar from 'components/SectionBar'

class Header extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <SectionBar>
        <Typography type="heading" color="inherit" className={classes.sectionTitle}>
          Events
        </Typography>
        <Button color="inherit">Login</Button>
      </SectionBar>
    )
  }
}

const styles = theme => ({
  sectionTitle: {
    flexGrow: 1,
  },
})

export default Header = withStyles(styles)(Header)
