import {
  GET_POSTS_REQUEST,
  GET_POSTS_RECEIVE,
  GET_POSTS_FAILURE,
  CLEAR_POSTS,
} from '../actions'

const postsReducer = (posts = { byId: undefined, isFetching: false }, action) => {
  switch (action.type) {
    case GET_POSTS_REQUEST:
      return { ...posts, isFetching: true }
    case GET_POSTS_RECEIVE:
      let newPosts = { byId: {}, isFetching: false }
      action.response.posts.map(post => newPosts.byId[post.id]=post)
      return newPosts
    case CLEAR_POSTS:
      return []
    default:
      return posts
  }
}

export default postsReducer
