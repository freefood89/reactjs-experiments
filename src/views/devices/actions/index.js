import axios from 'axios'
import axiosRetry from 'axios-retry'
import { makeActionCreator } from 'actions/utils'

const client = axios.create({ baseURL: 'http://localhost:9000' })
axiosRetry(client, {retries: 3 })

export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST'
export const GET_POSTS_RECEIVE = 'GET_POSTS_RECEIVE'
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE'

export const fetchStuff = () => {
  return {
    types: [GET_POSTS_REQUEST, GET_POSTS_RECEIVE, GET_POSTS_FAILURE],
    callAPI: () => client.get('/posts'),
  }
}

export const CLEAR_POSTS = 'CLEAR_POSTS'
export const clearPosts = makeActionCreator(CLEAR_POSTS)
