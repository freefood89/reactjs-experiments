import React from 'react'

import { withStyles } from 'material-ui/styles'
import ArrowForward from 'material-ui-icons/ArrowForward'
import Card, {
  CardActions,
  CardContent,
} from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'

class EventCard extends React.Component {
  render(){
    const { classes } = this.props
    return (
      <Card className={classes.root}>
        <CardContent className={classes.content}>
          <Typography variant='caption'>
            Custom Event
          </Typography>
          <Typography>
            Temperature above 80F on Device #207
          </Typography>
        </CardContent>
        <CardActions className={classes.actions}>
          <IconButton>
            <ArrowForward/>
          </IconButton>
        </CardActions>
      </Card>
    )
  }
}

const styles = theme => ({
  root: {
    // height: 200,
    width: 400,
  },
  actions: {
    padding: 8,
  },
  content: {
    padding: 8,
  }
})

export default EventCard = withStyles(styles)(EventCard)
