import React from 'react'
import { Route, Switch } from 'react-router-dom'
import RouterConfig from './routerConfig'

const routers = () => (
  <Switch>
    {RouterConfig.map((item: any) => {
      return (
        <Route
          key={item.path}
          path={item.path}
          component={item.component}
        />
      )
    })}
  </Switch>
)
export default routers
