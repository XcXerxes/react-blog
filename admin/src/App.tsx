import React from 'react'
import BasicLayout from 'layouts/BasicLayout'
import { BrowserRouter as Router } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <Router>
       <BasicLayout />
    </Router>
  )
}

export default App
