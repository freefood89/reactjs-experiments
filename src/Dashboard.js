import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'

import Button from 'material-ui/Button'

import { openDialog } from './actions'

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <Button
          raised
          onClick={this.props.onButtonClick}>
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
  onButtonClick: () => { dispatch(openDialog()) },
})

const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardComponent)

export {
  DashboardComponent,
  DashboardContainer as default,
}
