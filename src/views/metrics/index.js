import React from 'react'
import Card, {
  CardActions,
  CardContent,
} from 'material-ui/Card'
import Chart from 'components/Chart'
import Container from 'components/Container'
import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles'

class Metrics extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <Container>
        <Grid container className={classes.root}>
          <Grid item xs={12} sm={6} lg={4}>
            <Card className={classes.card}>
              <CardContent>
                <Chart data={[1, 2, 4, 5, 5, 4, 3, 1, 1]} size={[]}/>
              </CardContent>
              <CardActions>
                actions go here
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    )
  }
}

const styles = theme => ({
  card: {
  },
  root: {
    padding: 8
  },
})

export default Metrics = withStyles(styles)(Metrics)
