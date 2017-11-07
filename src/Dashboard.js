import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'

import Button from 'material-ui/Button'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog'

import Poller from './Poller'

import {
  openDialog,
  setDialogContent,
  fetchStuff,
} from './actions'

const TextOnlyDialog = ({ message }) => (
  <DialogContent>
    <DialogContentText>
      { message }
    </DialogContentText>
  </DialogContent>
)

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <Button
          raised
          onClick={() => {
            this.props.setDialogContent(<TextOnlyDialog message='hello' />)
            this.props.openDialog()
          }}>
          button
        </Button>
        <Poller fetcher={ this.props.fetcher } data={ this.props.data } />
      </div>
    );
  }
}

const styles = theme => ({})

const DashboardComponent = withStyles(styles)(Dashboard)

const mapStateToProps = state => ({
  data: state.data.stuff
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
