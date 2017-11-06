import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'

import Button from 'material-ui/Button'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

import {
  openDialog,
  setDialogContent,
} from './actions'

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <Button
          raised
          onClick={() => {
            this.props.setDialogContent(
              <DialogContent>
                <DialogContentText>
                  hello
                </DialogContentText>
              </DialogContent>
            )
            this.props.openDialog()
          }}>
          button
        </Button>
      </div>
    );
  }
}

const styles = theme => ({})

const DashboardComponent = withStyles(styles)(Dashboard)

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  openDialog: () => { dispatch(openDialog()) },
  setDialogContent: (content) => { dispatch(setDialogContent(content)) },
})

const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardComponent)

export {
  DashboardComponent,
  DashboardContainer as default,
}
