import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'

import Button from 'material-ui/Button'
import {
  DialogContent,
  DialogContentText,
} from 'material-ui/Dialog'

import Paper from 'material-ui/Paper'
import Checkbox from 'material-ui/Checkbox'
import Typography from 'material-ui/Typography'
import { inject } from 'config/poller/inject'
import {
  openDialog,
  setDialogContent,
  fetchStuff,
} from 'actions'

const TextOnlyDialog = ({ message }) => (
  <DialogContent>
    <DialogContentText>
      { message }
    </DialogContentText>
  </DialogContent>
)

class Dashboard extends React.Component {
  render() {
    const {fetcher, posts, openDialog, setDialogContent, classes} = this.props
    return (
      <div>
        <div className={classes.title}>
          <Typography type='title'>Dashboard</Typography>
        </div>
        <Button
          raised
          onClick={() => {
            setDialogContent(<TextOnlyDialog message='hello' />)
            openDialog()
          }}>
          button
        </Button>
        <Paper className={classes.tableWrapper}>

        </Paper>
      </div>
    );
  }
}

const styles = theme => ({
  title: {
    paddingBottom: 20,
  },
  table: {
    minWidth: 800,
  },
  tableWrapper: {
    overflowX: 'auto',
    width: 'fit-content'
  },
})

const DashboardComponent = inject(withStyles(styles)(Dashboard))

const mapStateToProps = state => ({
  posts: state.data.posts
})

const mapDispatchToProps = dispatch => ({
  openDialog: () => { dispatch(openDialog()) },
  setDialogContent: (content) => { dispatch(setDialogContent(content)) },
  fetcher: () => { dispatch(fetchStuff()) }
})

const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardComponent)

export {
  DashboardComponent,
  DashboardContainer as default,
}
