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
    title: '排序',
    dataIndex: 'sort',
    key: 'sort',
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
    title: `Web开发 ${index}`,
    sort: `移动开发 ${index}`,
    createdAt: '2019-09-23'
  }
})

const Categroies:React.FC = () => {
  const [list, setlist] = useState([])
  // 分页配置
  const paginationOptions = {
    showQuickJumper: true,
    showTotal: (total: number) => `总条数 ${total}`
  }
  useEffect(() => {
    setlist(data)
  }, [])
  return (
    <Content>
      <Form layout="inline">
        <Form.Item>
          <Button type="primary">创建分类</Button>
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

export default Categroies
