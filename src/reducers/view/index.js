import { combineReducers } from 'redux'

//  TODO - move these out
const OPEN_DIALOG = 'OPEN_DIALOG'
const CLOSE_DIALOG = 'CLOSE_DIALOG'
const SET_DIALOG_CONTENT = 'SET_DIALOG_CONTENT'
const CLEAR_DIALOG_CONTENT = 'CLEAR_DIALOG_CONTENT'

const updateDialogVisibility = (open = false, action) => {
  switch (action.type) {
    case OPEN_DIALOG:
      return true
    case CLOSE_DIALOG:
      return false
    default:
      return open
  }
}

const updateDialogContent = (content = [], action) => {
  switch (action.type) {
    case SET_DIALOG_CONTENT:
      return action.content
    case CLEAR_DIALOG_CONTENT:
      return []
    default:
      return content
  }
}

const updateDrawerVisibility = (open = false, action) => {
  switch (action.type) {
    case 'OPEN_DRAWER':
      return true
    case 'CLOSE_DRAWER':
      return false
    default:
      return open
  }
}

const viewReducer = combineReducers({
  dialog: combineReducers({
    open: updateDialogVisibility,
    content: updateDialogContent,
  }),
  drawer: combineReducers({
    open: updateDrawerVisibility,
  })
})

export default viewReducer
