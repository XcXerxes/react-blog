import React, { useEffect, Component } from 'react'
import Nprogress from 'nprogress'
import { Route } from 'react-router-dom'

export interface TransitionRouterProps {
  component: any;
  path?: string;
  exact?: boolean;
}
const TransitionRouter:React.FC<TransitionRouterProps> = ({ component, ...rest }) => {
  const NComponent = component || Component
  Nprogress.start()
  useEffect(() => {
    console.log('------------1')
    Nprogress.done()
  })
  return (
    <Route {...rest} render={(routeProps: any) => <NComponent {...routeProps} />} />
  )
}

export default TransitionRouter
