import { combineReducers } from 'redux'

const OPEN_DIALOG = 'OPEN_DIALOG'
const CLOSE_DIALOG = 'CLOSE_DIALOG'

const isDialogOpen = (view = { dialog: { open: false } }, action) => {
  let newState = Object.assign({}, view)
  switch (action.type) {
    case OPEN_DIALOG:
      newState.dialog.open = true
      return newState
    case CLOSE_DIALOG:
      newState.dialog.open = false
      return newState
    default:
      return newState
  }
}

const reducers = combineReducers({
  isDialogOpen,
  view: isDialogOpen,
})

export default reducers
