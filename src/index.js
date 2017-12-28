import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { MuiThemeProvider } from 'material-ui/styles'
import registerServiceWorker from './registerServiceWorker'

import App from 'views'
import reducers from 'reducers'
import middleware from 'middleware'
import theme from './theme'
import './index.css'

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
