import {
  OPEN_DIALOG,
  CLOSE_DIALOG,
  SET_DIALOG_CONTENT,
  CLEAR_DIALOG_CONTENT,
} from '../actions'

export const updateDialogVisibility = (open = false, action) => {
  switch (action.type) {
    case OPEN_DIALOG:
      return true
    case CLOSE_DIALOG:
      return false
    default:
      return open
  }
}

export const updateDialogContent = (content = [], action) => {
  switch (action.type) {
    case SET_DIALOG_CONTENT:
      return action.content
    case CLEAR_DIALOG_CONTENT:
      return []
    default:
      return content
  }
}
