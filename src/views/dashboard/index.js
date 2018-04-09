import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'
import { Link } from 'react-router-dom'

import Button from 'material-ui/Button'

import Card, {
  CardActions,
  CardContent,
} from 'material-ui/Card'

import Grid from 'material-ui/Grid'

import Typography from 'material-ui/Typography'
import { inject } from 'config/poller/inject'
import {
  openDialog,
  setDialogContent,
} from 'views/dialog/actions'

import Container from 'components/Container'

class Dashboard extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <Container>
        <Grid container className={classes.root}>
          {/* <div className={classes.title}>
            <Typography type='title'>Dashboard</Typography>
          </div>
          <Button
            raised
            onClick={() => {
              setDialogContent(<TextOnlyDialog message='hello' />)
              openDialog()
            }}>
            button
          </Button> */}
          <Grid item xs={12} sm={6} lg={4}>
            <Card className={classes.card}>
              <CardContent>
                <Typography type='title'>Devices</Typography>
              </CardContent>
              <CardActions>
                <Button dense color='primary' to={'./devices'} component={Link}>Manage</Button>
                <Button dense color='primary'>Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <Card className={classes.card}>
              <CardContent>
                <Typography type='title'>Metrics</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <Card className={classes.card}>
              <CardContent>
                <Typography type='title'>Events</Typography>

              </CardContent>
              <CardActions>
                <Button dense color='primary' to={'./events'} component={Link}>View all</Button>
                <Button dense color='primary'>Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

const styles = theme => ({
  card: {
    // minWidth: 296,
  },
  root: {
    minWidth: 560,
    maxWidth: 1400,
    padding: 12,
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
})

const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardComponent)

export {
  DashboardComponent,
  DashboardContainer as default,
}
