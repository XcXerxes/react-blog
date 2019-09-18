import React from 'react'
import BasicLayout from 'layouts/BasicLayout'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import loadable from 'utils/loadable'

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signin" component={loadable(() => import('views/user/Login'))} />
        <BasicLayout />
      </Switch>
    </Router>
  )
}

export default App
