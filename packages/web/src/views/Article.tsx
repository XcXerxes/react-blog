import React, {useState, useEffect} from 'react'
// import styled from 'styled-components'
import marked from 'marked'
import api from 'api'

marked.setOptions({ // marked 设置
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
})

interface ArticleProps {
  location?: any;
  match?: any;
}
const Article:React.FC<ArticleProps> = (props) => {
  const [articleInfo, setarticleInfo] = useState<any>({})
  async function fetchArticleDetail () {
    try {
      console.log(props)
      const { id } = props.match.params
      const result:any = await api.articleDetailById({id})
      if (result.code === 200) {
        setarticleInfo(result.data)
      }
    } catch (error) {
      
    }
  }
  useEffect(() => {
    fetchArticleDetail()
  }, [])
  const strHtml = articleInfo.content ? marked(articleInfo.content) : ''
  return (
    <div className="container">
      <div dangerouslySetInnerHTML={{ __html: strHtml }} />
    </div>
  )
}
export default Article
