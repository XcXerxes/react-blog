import React from 'react'
import styled from 'styled-components'
import XNav from './Nav'
import { Link } from 'react-router-dom'

const StyledHeader = styled.header`
  height: 60px;
  width: 100%;
  background-color: rgba(255,255,255,.95);
  box-shadow: 2px -3px 10px 0px rgba(0, 0, 0, .3);
`
const StyledContent = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
`
const StyledLogo = styled.div`
  height: 100%;
  padding: 12px 0%;
`
const StyledLink = styled.a`
  display: flex;
  width: 105px;
  height: 36px;
`
const StyledLogoImg = styled.img`
  max-height: 100%;
`

const XHeader:React.FC = () => {
  return (
    <StyledHeader>
      <div className="grid">
        <StyledContent>
          <StyledLogo>
            <StyledLink as={Link} href="/">
              <StyledLogoImg src={require('../../assets/images/o2logo@2x.png')} alt="xcxerxes"/>
            </StyledLink>
          </StyledLogo>
          <XNav />
        </StyledContent>
      </div>
    </StyledHeader>
  )
}

export default XHeader
