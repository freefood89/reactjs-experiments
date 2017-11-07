import 'whatwg-fetch'

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

const REQUEST_STUFF = 'REQUEST_STUFF'
const RECEIVE_STUFF = 'RECEIVE_STUFF'
const FAILURE_STUFF = 'FAILURE_STUFF'

export function requestStuff() {
  return { type: REQUEST_STUFF }
}

export function receiveStuff(stuff) {
  return {
    type: RECEIVE_STUFF,
    stuff: stuff,
  }
}

const baseUrl = 'https://jsonplaceholder.typicode.com'

export function fetchStuff() {
  return dispatch => {
    dispatch(requestStuff())
    return fetch(baseUrl + '/posts')
      .then((response) => response.json())
      .then((json) => dispatch(receiveStuff(json)))
  }
}

export {
  openDialog,
  closeDialog,
  setDialogContent,
  clearDialogContent,
}
