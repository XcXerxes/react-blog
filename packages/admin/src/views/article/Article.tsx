import React, { useState, useEffect } from 'react'
import { Table, Form, Divider, Layout, Button } from 'antd'
const { Content } = Layout
const columns = [
  {
    title: '标题',
    dataIndex: 'title',
    key: 'title',
    align: 'center' as 'center'
  },
  {
    title: '描述',
    dataIndex: 'caption',
    key: 'caption',
    align: 'center' as 'center'
  },
  {
    title: '创建时间',
    dataIndex: 'createdAt',
    key: 'createdAt',
    align: 'center' as 'center'
  },
  {
    title: '操作',
    dataIndex: 'actions',
    key: 'actions',
    align: 'center' as 'center',
    render: (_text: any, record:any) => (
      <span>
        <Button size="small" type="primary">编辑</Button>
        <Divider type="vertical" />
        <Button size="small" type="danger">删除</Button>
      </span>
    )
  }
]

const data:any = Array.from({ length: 6 }).map((_item, index: number) => {
  return {
    id: index + 1,
    title: `第一技术 ${index}`,
    caption: `第一生产力 ${index}`,
    createdAt: '2019-09-23'
  }
})

export interface ArticleProps {
  history?: any;
}
const Article:React.FC<ArticleProps> = ({ history }) => {
  const [list, setlist] = useState([])
  // 分页配置
  const paginationOptions = {
    showQuickJumper: true,
    showTotal: (total: number) => `总条数 ${total}`
  }
  // 发布文章
  function createArticle () {
    history.push('/article/create')
  }
  useEffect(() => {
    setlist(data)
  }, [])
  return (
    <Content>
      <Form layout="inline">
        <Form.Item>
          <Button type="primary" onClick={createArticle}>发布文章</Button>
        </Form.Item>
      </Form>
      <Table
        size="small"
        rowKey="id"
        columns={columns}
        dataSource={list}
        pagination={paginationOptions}
      />
    </Content>
  )
}

export default Article
