const OPEN_DIALOG = 'OPEN_DIALOG'
const CLOSE_DIALOG = 'CLOSE_DIALOG'

const openDialog = (text = 'set dialog text') => {
  return {
    type: OPEN_DIALOG,
    text: text,
  }
}

const closeDialog = () => {
  return {
    type: CLOSE_DIALOG,
  }
}

export {
  openDialog,
  closeDialog,
}
