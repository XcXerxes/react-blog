import React from 'react'
import { StyledApp } from './App.style'
import XHeader from 'components/Layout/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from 'views/About'
import Home from 'views/Home'

const App: React.FC = () => {
  return (
    <StyledApp>
      <Router>
        <XHeader />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </StyledApp>
  )
}

export default App
