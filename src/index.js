import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { MuiThemeProvider } from 'material-ui/styles'
import registerServiceWorker from './registerServiceWorker'

import App from 'views'
import middleware from 'middleware'
import theme from './theme'
import './index.css'

import { combineReducers } from 'redux'
import { updateDialogVisibility, updateDialogContent } from 'views/dialog/reducers'
import { updateDrawerVisibility } from 'views/drawer/reducers'
import postsReducer from 'views/devices/reducers'

const reducers = combineReducers({
  data: combineReducers({
    posts: postsReducer,
  }),
  view: combineReducers({
    dialog: combineReducers({
      open: updateDialogVisibility,
      content: updateDialogContent,
    }),
    drawer: combineReducers({
      open: updateDrawerVisibility,
    })
  })
})

let store = createStore(
  reducers,
  middleware,
)

function Root() {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </Provider>
  );
}

render(<Root />, document.querySelector('#root'));
registerServiceWorker();
