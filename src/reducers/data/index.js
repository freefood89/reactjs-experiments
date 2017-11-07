import { combineReducers } from 'redux'

const RECEIVE_STUFF = 'RECEIVE_STUFF'

const stuffReducer = (stuff = [], action) => {
  switch (action.type) {
    case RECEIVE_STUFF:
      return action.stuff
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
