import { combineReducers } from 'redux'

const GET_POSTS_RECEIVE = 'GET_POSTS_RECEIVE'

const stuffReducer = (stuff = [], action) => {
  switch (action.type) {
    case GET_POSTS_RECEIVE:
      stuff = action.response
        // .then(function(data) {
        //   stuff = data
        // })
      return stuff
    case 'CLEAR_STUFF':
      return []
    default:
      return stuff
  }
}

const dataReducer = combineReducers({
  stuff: stuffReducer,
})

export default dataReducer
