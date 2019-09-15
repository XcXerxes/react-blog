import React from 'react'
import { StyledApp } from './App.style'
import XHeader from 'components/Layout/Header'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import About from 'views/About'
import Home from 'views/Home'
import TransitionRouter from 'components/TransitionRouter'

const App: React.FC = () => {
  return (
    <StyledApp>
      <Router>
        <XHeader />
          <Switch>
            <TransitionRouter path="/" exact component={Home} />
            <TransitionRouter path="/about" component={About} />
          </Switch>
      </Router>
    </StyledApp>
  )
}

export default App
