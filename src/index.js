import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import {  createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import * as serviceWorker from './serviceWorker'
import Reducer from './store/reducer'
import { createEpicMiddleware } from 'redux-observable'
import {rootEpic} from './store/epics'

const observableMiddleware = createEpicMiddleware();
const store = createStore(Reducer, applyMiddleware(observableMiddleware))

observableMiddleware.run(rootEpic);

ReactDOM.render(
  <Provider store={store}>
    <Router>
        <App />
    </Router>
  </Provider>
  ,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
