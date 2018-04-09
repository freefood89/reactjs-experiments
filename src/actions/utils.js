// reference: https://redux.js.org/docs/recipes/ReducingBoilerplate.html#generating-action-creators
export function makeActionCreator(type, ...argNames) {
  return function (...args) {
    let action = { type }
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index]
    })
    return action
  }
}

export function makeBasicAjaxActionCreator(promisedApiCall, requestAction, successAction, failureAction) {
  return dispatch => {
    dispatch(requestAction())
    return promisedApiCall()
      .then(response => dispatch(successAction(response)))
      .catch(error => failureAction(error))
  }
}
