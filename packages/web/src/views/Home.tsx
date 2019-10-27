import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Tabs from 'components/Tab'
import Aside from 'components/Layout/Aside'
import ArticleItem from 'components/ArticleItem'
import InfiniteScroll from 'react-infinite-scroll-component'
import Loading from 'components/Loading'
import api from 'api'


const StyledBannerWrapper = styled.div`
  height: 500px;
  @media only screen and (max-width: 992px) {
    height: 200px;
  }
`
const StyledBannerImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  @media only screen and (max-width: 768px) {
    object-fit: cover;
  }
`
const StyledContent = styled.div`
  display: flex;
  @media only screen and (max-width: 992px) {
    flex-direction: column;
  }
`
const StyledMain = styled.main`
  width: 930px;
  margin-right: 20px;
  @media only screen and (min-width: 1600px) {
    width: 1230px;
  }
  @media (max-width: 1200px) and (min-width: 992px) {
    width: 730px;
  }
  @media only screen and (max-width: 992px) {
    width: 100%;
  }
`
const StyledTabs = styled.div`
  margin-top: 20px;
  @media only screen and (max-width: 992px) {
    padding: 0 15px;
  }
`
const StyledPost = styled(InfiniteScroll)`
  display: flex;
  margin-top: 20px;
  flex-wrap: wrap;
`
const tabs = [
  {
    id: 1,
    name: '全部文章'
  },
  {
    id: 2,
    name: 'Web开发'
  },
  {
    id: 3,
    name: '移动开发'
  },
  {
    id: 4,
    name: 'H5游戏开发'
  }
]
const data = Array.from({ length: 12}).map((_item, index: number) => {
  return {
    id: index + 1,
    title: '从程序员角度去看项目管理',
    desc: '“没时间了，这个需求放在二期吧”，“亲，这是老板的需求”',
    media: 'https://img13.360buyimg.com/ling/jfs/t1/44465/15/9966/106511/5d7483fcEcb019de5/3050c6744e25cf56.png'
  }
})
const Home:React.FC = () => {
  const [list, setlist] = useState(data)
  const [cateList, setcateList] = useState([])
  function fetchMoreData () {
    console.log('-----')
    // setTimeout(() => {
    //   setlist(list.concat(data))
    // }, 1500)
  }
  async function fetchCate () {
    try {
      const result:any = await api.cateList({})
      if (result.code === 200) {
        setcateList(result.data)
      }
    } catch (error) {
      
    }
  }
  useEffect(() => {
    fetchCate()
  }, [])
  return (
    <div className="container">
      <StyledBannerWrapper>
        <StyledBannerImg src={require('../assets/images/banner.jpg')} alt="banner" />
      </StyledBannerWrapper>
      <div className="grid">
        <StyledContent>
          <StyledMain>
            <StyledTabs>
              <Tabs tabs={cateList} />
            </StyledTabs>
            <StyledPost
              dataLength={list.length}
              next={fetchMoreData}
              hasMore={true}
              loader={<Loading />}
            >
              {list.map((item, index: number) => (
                <ArticleItem key={index} {...item} />
              ))}
            </StyledPost>
          </StyledMain>
          <Aside />
        </StyledContent>
      </div>
    </div>
  )
}

export default Home
