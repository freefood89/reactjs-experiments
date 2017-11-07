import React from 'react'

class Poller extends React.Component {
  componentWillReceiveProps(nextProps) {
    // if (this.props.data !== nextProps.data) {
      clearTimeout(this.timeout)

      // Optionally do something with data
      // if (!nextProps.isFetching) {
        this.startPoll()
      // }
    // }
  }

  componentWillMount() {
    console.log('will mount')
    this.props.fetcher()
  }

  componentWillUnmount() {
    console.log('will unmount')
    clearTimeout(this.timeout)
  }

  startPoll() {
    const timeout = this.props.timeout || 5000
    this.timeout = setTimeout(() => this.props.fetcher(), timeout)
  }

  render() {
    return null
  }
}

export default Poller
