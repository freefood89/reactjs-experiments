import { combineReducers } from 'redux'
import dataReducer from './data'
import viewReducer from './view'

const reducers = combineReducers({
  view: viewReducer,
  data: dataReducer,
})

export default reducers
