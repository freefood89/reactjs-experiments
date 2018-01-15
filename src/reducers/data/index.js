import { combineReducers } from 'redux'

const GET_POSTS_RECEIVE = 'GET_POSTS_RECEIVE'

const postsReducer = (posts = { byId: {} }, action) => {
  switch (action.type) {
    case GET_POSTS_RECEIVE:
      let newPosts = { byId: {} }
      action.response.posts.map((post) => {
        newPosts.byId[post.id] = post
      })
      return newPosts
    case 'CLEAR_POSTS':
      return []
    default:
      return posts
  }
}

const dataReducer = combineReducers({
  posts: postsReducer,
})

export default dataReducer
