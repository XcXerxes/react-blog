import React from 'react'
import styled from 'styled-components'
import Col from './Layout/Col'

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  @media only screen and (max-width: 992px) {
    margin: 0 15px 20px;
    box-shadow: 0 1px 2px rgba(0,0,0,.1);
  }
`
const StyledMedia = styled.div`
  width: 100%;
  overflow: hidden;
  height: 113px;
  @media (min-width: 992px) and (max-width: 1200px) {
    height: 130px;
  }
  @media only screen and (max-width: 992px) {
    height: auto;
  }
`
const StyledImg = styled.img`
  width: 100%;
`
const StyledFooter = styled.div`
  padding: 10px;
`
const StyledTitle = styled.h2`
  height: 24px;
  line-height: 24px;
  font-size: 1.1em;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 5px;
  text-overflow: ellipsis;
`
const StyledDesc = styled.p`
  height: 40px;
  line-height: 20px;
  font-weight: 300;
  overflow: hidden;
  text-overflow: ellipsis;
  line-clamp: 2;
  box-orient: vertical;
  word-wrap: break-word;
`
export interface ArticleItemProps {
  title: string;
  desc: string;
  media: string;
}

const ArticleItem:React.FC<ArticleItemProps> = ({ title, desc, media }) => {
  return (
    <Col sm="12" md="6" lg="4" xlg="3" gutter={20}>
      <StyledArticle>
        <StyledMedia>
          <StyledImg src={media}  alt={title} />
        </StyledMedia>
        <StyledFooter>
          <StyledTitle>{title}</StyledTitle>
          <StyledDesc>{desc}</StyledDesc>
        </StyledFooter>
      </StyledArticle>
    </Col>
  )
}

export default ArticleItem
