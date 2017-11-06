const OPEN_DIALOG = 'OPEN_DIALOG'
const CLOSE_DIALOG = 'CLOSE_DIALOG'
const SET_DIALOG_CONTENT = 'SET_DIALOG_CONTENT'
const CLEAR_DIALOG_CONTENT = 'CLEAR_DIALOG_CONTENT'

const openDialog = (text = 'set dialog text') => {
  return {
    type: OPEN_DIALOG,
  }
}

const closeDialog = () => {
  return {
    type: CLOSE_DIALOG,
  }
}

const setDialogContent = (content) => {
  return {
    type: SET_DIALOG_CONTENT,
    content: content,
  }
}

const clearDialogContent = () => {
  return {
    type: CLEAR_DIALOG_CONTENT,
  }
}

export {
  openDialog,
  closeDialog,
  setDialogContent,
  clearDialogContent,
}
