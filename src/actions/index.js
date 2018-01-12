import axios from 'axios'
import axiosRetry from 'axios-retry'
import { makeActionCreator } from 'actions/utils'

const client = axios.create({ baseURL: 'http://localhost:9000' })
axiosRetry(client, {retries: 3 })

export const OPEN_DRAWER = 'OPEN_DRAWER'
export const CLOSE_DRAWER = 'CLOSE_DRAWER'
export const openDrawer = makeActionCreator(OPEN_DRAWER)
export const closeDrawer = makeActionCreator(CLOSE_DRAWER)

export const OPEN_DIALOG = 'OPEN_DIALOG'
export const CLOSE_DIALOG = 'CLOSE_DIALOG'
export const SET_DIALOG_CONTENT = 'SET_DIALOG_CONTENT'
export const CLEAR_DIALOG_CONTENT = 'CLEAR_DIALOG_CONTENT'
export const openDialog = makeActionCreator(OPEN_DIALOG)
export const closeDialog = makeActionCreator(CLOSE_DIALOG)
export const setDialogContent = makeActionCreator(SET_DIALOG_CONTENT, 'content')
export const clearDialogContent = makeActionCreator(CLEAR_DIALOG_CONTENT)

export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST'
export const GET_POSTS_RECEIVE = 'GET_POSTS_RECEIVE'
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE'

const baseUrl = 'http://localhost:9000' //'https://jsonplaceholder.typicode.com'

export const fetchStuff = () => {
  return {
    types: [GET_POSTS_REQUEST, GET_POSTS_RECEIVE, GET_POSTS_FAILURE],
    callAPI: () => client.get('/posts'),
  }
}
