import React from 'react'
import { withStyles } from 'material-ui/styles'
import { connect } from 'react-redux'
import IconButton from 'material-ui/IconButton'
import Typography from 'material-ui/Typography'
import HelpOutline from 'material-ui-icons/HelpOutline'
import Refresh from 'material-ui-icons/Refresh'
import SectionBar from 'components/SectionBar'
import TextModal from 'views/dialog'
import { inject } from 'config/poller/inject'
import { clearPosts } from '../actions'

import {
  openDialog,
  setDialogContent
} from 'views/dialog/actions'

class Header extends React.Component {
  render() {
    const { classes, openDialog, setDialogContent, clearPosts, dispatcher, posts } = this.props
    return (
      <SectionBar>
        <Typography type="heading" color="inherit" className={classes.sectionTitle}>
          Devices
        </Typography>
        <IconButton disabled={posts.isFetching} color='primary' onClick={
          () => {
            clearPosts()
            dispatcher.refresh('lol')
          }
        }>
          <Refresh />
        </IconButton>
        <IconButton color='primary' onClick={
            () => {
              setDialogContent(<TextModal text="sorry, can't help you" />)
              openDialog()
            }
          }
        >
          <HelpOutline/>
        </IconButton>
      </SectionBar>
    )
  }
}

const styles = theme => ({
  sectionTitle: {
    flexGrow: 1,
  },
})

Header = withStyles(styles)(Header)

const mapStateToProps = state => ({
  posts: state.data.posts
})

const mapDispatchToProps = dispatch => ({
  clearPosts: () => { dispatch(clearPosts()) },
  openDialog: () => { dispatch(openDialog()) },
  setDialogContent: (content) => { dispatch(setDialogContent(content)) },
})

export default Header = connect(
  mapStateToProps,
  mapDispatchToProps,
)(inject(Header))
