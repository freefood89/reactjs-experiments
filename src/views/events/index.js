import React from 'react'

import { withStyles } from 'material-ui/styles'
import Container from 'components/Container'
import Header from './components/Header'
import EventCard from './components/EventCard'

class Events extends React.Component {
  render() {
    return (
      <Container>
        <Header/>
        <EventCard />
      </Container>
    );
  }
}

// TODO - clean up spacing
const styles = theme => ({})

Events = withStyles(styles)(Events)

export { Events as default }
