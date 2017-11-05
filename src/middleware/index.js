import { applyMiddleware } from 'redux'

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

const middleware = applyMiddleware(
  logger,
)

export {
  middleware as default,
}
