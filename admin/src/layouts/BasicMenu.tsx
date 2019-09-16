import React from 'react'
import {matchMenuPath} from 'router/util'
import RouterConfig from 'router/routerConfig'
import { Menu, Icon } from 'antd'
const {SubMenu, ItemGroup} = Menu

const initialState = { defaultSelectedKeys: '/'}
type State = Readonly<typeof initialState>

interface PropsType {
  title?: string,
}

class BasicMenu extends React.Component <PropsType, State> {
  readonly state: State = initialState
  componentWillMount () {
    // const {pathname} = this.injected.routerStore.history.location
    this.setState({
      defaultSelectedKeys: matchMenuPath('')
    })
  }

  render () {
    return (
      <Menu
        defaultSelectedKeys={[this.state.defaultSelectedKeys]}
        mode="inline"
        style={{ height: '100%', borderRight: 0 }}
      >
        {
          RouterConfig.map(MenuSub)
        }
      </Menu>
    )
  }
}

type SubPropsType = {
  routes?: any
  name: string,
  path?: string,
  icon?: string | any
}

const MenuSub: React.FC<SubPropsType> = ({routes, name, path, icon}) => {
  if (path && routes && routes.length > 0) {
    return (
    <SubMenu key={path} title={<TitleRender {...{name, icon}} />}>
        {routes.map(MenuSub)}
      </SubMenu>
    )
  } else if (!path && routes && routes.length > 0) {
    return (
      <ItemGroup key={name} title={name}>
        {routes.map(MenuSub)}
      </ItemGroup>
    )
  } else {
    return (
      <Menu.Item key={path}>
        <TitleRender {...{name, icon}} />
      </Menu.Item>
    )
  }
}

type TitlePropsType = {
  name: string,
  icon?: string | any
}

const TitleRender: React.FC<TitlePropsType> = ({name, icon}) => {
  if (icon && typeof icon === 'string') {
    return (
      <span>
        <Icon type={icon} />
        <span>{name}</span>
      </span>
    )
  } else if (icon && typeof icon === 'object' && icon.type) {
    return (
      <span>
        <Icon type={icon.type} theme={icon.theme} />
        <span>{name}</span>
      </span>
    )
  } else {
    return (
      <span>
        <span>{name}</span>
      </span>
    )
  }
}


export default BasicMenu
