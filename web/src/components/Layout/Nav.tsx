import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const navs = [
  {
    name: '首页',
    path: '/'
  },
  {
    name: '资讯',
    path: '/message'
  },
  {
    name: 'H5案例',
    path: '/demo'
  },
  {
    name: '关于',
    path: '/about'
  },
  {
    name: '联系',
    path: '/conncat'
  },
]

const StyledNav = styled.div`
  height: 100%;
  padding-left: 50px;
`
const StyledUl = styled.ul`
  display: flex;
  height: 100%;
`
const StyledLi = styled.li`
  margin: 0 10px;
  height: 100%;
  display: flex;
  align-items: center;
`
const StyledLink = styled.a`
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 15px;
  transition: color .25s ease;
  &:hover {
    color: #6190e8;
  }
`

const XNav:React.FC = () => {
  return (
    <StyledNav>
      <StyledUl>
        { navs.map((item: any) => (
          <StyledLi key={item.path}>
            <StyledLink as={Link} href={item.path} >{item.name}</StyledLink>
          </StyledLi>
        ))}
      </StyledUl>
    </StyledNav>
  )
}

export default XNav
