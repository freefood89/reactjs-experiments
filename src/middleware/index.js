import { applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

function callAPIMiddleware({ dispatch, getState }) {
  return next => action => {
    const {
      types,
      callAPI,
      shouldCallAPI = () => true,
      payload = {}
    } = action

    if (!types) {
      // Normal action: pass it on
      return next(action)
    }

    if (
      !Array.isArray(types) ||
      types.length !== 3 ||
      !types.every(type => typeof type === 'string')
    ) {
      throw new Error('Expected an array of three string types.')
    }

    if (typeof callAPI !== 'function') {
      throw new Error('Expected callAPI to be a function.')
    }

    if (!shouldCallAPI(getState())) {
      return
    }

    const [requestType, successType, failureType] = types

    dispatch(
      Object.assign({}, payload, {
        type: requestType
      })
    )

    return callAPI()
      .then(response => response.json())
      .then(data =>
        dispatch(
          Object.assign({}, payload, {
            response: data,
            type: successType
          })
        ))
      .catch(error =>
        dispatch(
          Object.assign({}, payload, {
            error,
            type: failureType
          })
        ))
  }
}

const middleware = applyMiddleware(
  logger,
  thunkMiddleware,
  callAPIMiddleware,
)

export {
  middleware as default,
}
