import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'

import Button from 'material-ui/Button'
import {
  DialogContent,
  DialogContentText,
} from 'material-ui/Dialog'
import Table, {
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from 'material-ui/Table'
import Paper from 'material-ui/Paper'
import Checkbox from 'material-ui/Checkbox'
import Typography from 'material-ui/Typography'
import { inject } from 'config/poller/inject'
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
    const {fetcher, posts, openDialog, setDialogContent, classes} = this.props
    const { selected, rowsPerPage, page } = this.state;
    // const emptyRows = rowsPerPage - Math.min(rowsPerPage, Object.values(posts.byId).length - page * rowsPerPage);

    const numSelected = Object.values(selected).filter(val => val===true).length
    const numPosts = Object.keys(posts.byId).length
    return (
      <div>
        <div className={classes.title}>
          <Typography type='title'>Devices</Typography>
        </div>
        {/* <Button
          raised
          onClick={() => {
            setDialogContent(<TextOnlyDialog message='hello' />)
            openDialog()
          }}>
          button
        </Button> */}
        <Paper className={classes.tableWrapper}>
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
        </Paper>
      </div>
    );
  }
}

const styles = theme => ({
  title: {
    paddingBottom: 20,
  },
  table: {
    minWidth: 800,
  },
  tableWrapper: {
    overflowX: 'auto',
    width: 'fit-content'
  },
})

const DevicesComponent = inject(withStyles(styles)(Devices))

const mapStateToProps = state => ({
  posts: state.data.posts
})

const mapDispatchToProps = dispatch => ({
  openDialog: () => { dispatch(openDialog()) },
  setDialogContent: (content) => { dispatch(setDialogContent(content)) },
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
