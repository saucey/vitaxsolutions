import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import LoginOld from './pages/login/login-old'
import Login from './pages/login/login'
import { WithAuthorization } from './pages/home/home'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login-old" exact component={LoginOld} />
      <Route path="/" exact component={Login} />
      <Route path="/home" exact component={WithAuthorization} />
      <Route path="/sectors" exact component={WithAuthorization} />
    </Switch>
  </BrowserRouter>
)
