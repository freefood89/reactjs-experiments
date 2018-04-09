import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'

import Table, {
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from 'material-ui/Table'
import Paper from 'material-ui/Paper'
import { CircularProgress } from 'material-ui/Progress'
import Checkbox from 'material-ui/Checkbox'
import { inject } from 'config/poller/inject'
import { fetchStuff } from 'views/devices/actions'

import Container from 'components/Container'
import Header from './components/Header'

class Devices extends React.Component {
  state = {
    selected: {},
    rowsPerPage: 5,
    page: 0,
  }

  componentWillMount() {
    this.props.dispatcher.register('lol', this.props.fetcher)
  }

  componentWillUnmount() {
    this.props.dispatcher.deregister('lol')
  }

  handleClickSelectAll() {
    const { posts } = this.props
    const { selected } = this.state
    const numSelected = Object.values(selected).filter(val => val===true).length
    const numPosts = Object.keys(posts.byId).length

    if (numSelected===numPosts) {
      Object.keys(posts.byId).map(id => selected[id]=false)
    } else {
      Object.keys(posts.byId).map(id => selected[id]=true)
    }

    this.setState({
      selected: selected
    })
  }

  handleClick(e, id) {
    this.setState({
      selected: {...this.state.selected,
        [id]: this.state.selected[id] ? false : true
      }
    })
  }

  handleChangePage(e, page) {
    this.setState({ page });
  }

  handleChangeRowsPerPage(e) {
    this.setState({ rowsPerPage: e.target.value });
  }

  render() {
    const { posts, classes } = this.props
    const { selected, rowsPerPage, page } = this.state
    // const emptyRows = rowsPerPage - Math.min(rowsPerPage, Object.values(posts.byId).length - page * rowsPerPage);

    const numSelected = Object.values(selected).filter(val => val===true).length

    let numPosts
    if (posts.byId) {
      numPosts = Object.keys(posts.byId).length
    }

    return (
      <Container>
        <Header />
        <Paper className={classes.root}>
          {/* <Typography type='title'>Devices</Typography> */}
          {
            posts.byId === undefined &&
            posts.isFetching &&
            <CircularProgress className={classes.progress} />
          }
          {
            posts.byId !== undefined &&
            <Table className={classes.table}>
              <TableHead>
                <TableRow role="checkbox" aria-checked={numSelected>0 && numPosts === numSelected}>
                  <TableCell padding="checkbox" style={{width:49}}>
                    <Checkbox
                      checked={numSelected>0 && numPosts === numSelected}
                      onClick={event => this.handleClickSelectAll(event)}
                      indeterminate={numSelected>0 && numSelected<numPosts}
                    />
                  </TableCell>
                  <TableCell>Device Name</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  Object.values(posts.byId).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, ind) => {
                    const postIsSelected = this.state.selected[item.id] === true
                    return (
                      <TableRow
                        hover
                        key={item.id}
                        onClick={event => this.handleClick(event, item.id)}
                        role="checkbox"
                        aria-checked={postIsSelected}>
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={postIsSelected}
                          />
                        </TableCell>
                        <TableCell>{item.title}</TableCell>
                      </TableRow>
                    )
                  })
                }
              </TableBody>
              <TableFooter>
                <TablePagination
                  count={numPosts}
                  rowsPerPage={this.state.rowsPerPage}
                  page={this.state.page}
                  backIconButtonProps={{ 'aria-label': 'Previous Page' }}
                  nextIconButtonProps={{ 'aria-label': 'Next Page' }}
                  onChangePage={this.handleChangePage.bind(this)}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage.bind(this)}
                />
              </TableFooter>
            </Table>
          }
        </Paper>
      </Container>
    );
  }
}

const styles = theme => ({
  title: {
    paddingBottom: 20,
  },
  root: {
    minWidth: 800,
    margin: 12,
    overflowX: 'auto',
    width: 'fit-content'
  },
  progress: {
    // margin: `0 ${theme.spacing.unit * 2}px`,
    display: 'block',
    margin: '0 auto'
  },
})

const DevicesComponent = inject(withStyles(styles)(Devices))

const mapStateToProps = state => ({
  posts: state.data.posts
})

const mapDispatchToProps = dispatch => ({
  // openDialog: () => { dispatch(openDialog()) },
  // setDialogContent: (content) => { dispatch(setDialogContent(content)) },
  fetcher: () => { dispatch(fetchStuff()) }
})

const DevicesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DevicesComponent)

export {
  DevicesComponent,
  DevicesContainer as default,
}
