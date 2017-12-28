import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'

import Button from 'material-ui/Button'
import {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog'

import Poller from 'Poller'

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
    const {fetcher, stuff, openDialog, setDialogContent} = this.props
    return (
      <div>
        <h1>Dashboard</h1>
        <Button
          raised
          onClick={() => {
            setDialogContent(<TextOnlyDialog message='hello' />)
            openDialog()
          }}>
          button
        </Button>
        <Poller fetcher={ fetcher } data={ stuff } />
        <ul>
          { stuff.map((item, ind) => <li key={ind}>{item.title}</li>) }
        </ul>
      </div>
    );
  }
}

const styles = theme => ({})

const DashboardComponent = withStyles(styles)(Dashboard)

const mapStateToProps = state => ({
  stuff: state.data.stuff
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
