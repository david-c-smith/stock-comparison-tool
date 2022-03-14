import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './store'

/**
* The easiest way of getting the State type is to define
* the root reducer in advance and extract its ReturnType.
*/
export type RootState = ReturnType<typeof store.getState>;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
)