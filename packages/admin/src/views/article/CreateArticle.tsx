import React, { useState, ChangeEvent, FormEvent, useEffect, useRef, useCallback } from 'react'
import { Card, Form, Input, Select, Upload, Icon, Button, Col, Modal } from 'antd'
import { FormComponentProps } from 'antd/lib/form/Form'
import SimpleMDE from 'simplemde'
import { useMappedState } from 'redux-react-hook'
import api from 'api'

export interface IAdverCreateProps extends FormComponentProps {
  test: string;
  history?: any;
  location?: any;
}

const AdverCreate:React.FC<IAdverCreateProps> = (props) => {
  // const [name, setname] = useState('')
  // const [caption, setCaption] = useState('')
  const [cateId, setcateId] = useState(1)
  // const [url, setUrl] = useState('')
  const [thumbnail, setthumbnail] = useState('')
  const [loading, setLoading] = useState(false)
  const [cardLoading, setCardLoading] = useState(false)
  const [previewVisible, setPreviewVisible] = useState(false)
  const [fileList, setFileList] = useState<any>([])
  const [simplemd, setsimplemd] = useState<any>(null)
  // const [content, setcontent] = useState('')
  const editorRef = useRef<any>()
  const { categroy } = useMappedState(
    useCallback(
      (state: any) => ({
        categroy: state.categroy
      }),
      []
    )
  )
  console.log('----------=============', categroy)
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 2 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 12 },
    },
  }
  const contentItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 2 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 22 },
    },
  }
  const ButtonItemLayout = {
    wrapperCol: {
      xs: { span: 24},
      sm: { span: 8, offset: 3 }
    }
  }
  useEffect(() => {
    setsimplemd(new SimpleMDE({ element: editorRef.current }))
    const { location } = props
    if (location.search) {
      const id = location.search.split('=')[1]
      getInfo(id)
    }
  }, [])
  /**
   * 获取单个的信息
   * @param id
   */
  async function getInfo (id: string) {
    try {
      setCardLoading(true)
    } catch (error) {
      setCardLoading(false)
      throw error
    }
  }
  /**
   * 提交信息
   * @param e 
   */
  function handleSubmit (e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    props.form.validateFields(async(err, values) => {
      if (!err) {
        debugger
        console.log(simplemd.value)
        const { location } = props
        if (location.search) {
          const id = location.search.split('=')[1]
          updateAdver(id)
        } else {
          createArticle(values)
        }
      }
    })
  }
  async function createArticle (params: any) {
    try {
      setLoading(true)
      const result = await api.createArticle({...params, content: simplemd.value()})
      debugger
    } catch (error) {
      setLoading(false)
      throw error
    }
  }
  async function updateAdver (id: string) {
    try {
      setLoading(true)
    } catch (error) {
      setLoading(false)
      throw error
    }
  }
  function handleSelectChange (value: number) {
    console.log('======================')
    setcateId(value)
  }
  /**
   * 上传图片
   * @param info 
   */
  const uploadHandleChange = (info:any) => {
    debugger
    setFileList(info.fileList)
    if (info.file.status === 'uploading') {
      setLoading(true)
    }
    console.log('========================', info)
    if (info.file.status === 'done') {
      debugger
      setLoading(false)
      setthumbnail(info.file.name)
    }
  }
  /**
   * 取消预览
   */
  function handleCancel () {
    setPreviewVisible(false)
  }
  /**
   * 打开预览
   */
  function handlePreview () {
    setPreviewVisible(true)
  }
  const { getFieldDecorator } = props.form
  const uploadButton = (
    <div>
      <Icon type={loading ? 'loading' : 'plus'} />
      <div className="ant-upload-text">上传图片</div> 
    </div>
  )
  const previewImage:string = 'http://localhost:7001/public/' + thumbnail
  return (
    <Card loading={cardLoading}>
      <Form onSubmit={handleSubmit} {...formItemLayout}>
        <Form.Item label="文章名称" hasFeedback={true}>
          {getFieldDecorator('name', {
            rules: [
              {
                required: true,
                message: '请输入文章名称!'
              },
            ],
          })(<Input placeholder="请输入文章名称" />)}
        </Form.Item>
        <Form.Item label="文章描述" hasFeedback={true}>
          {getFieldDecorator('caption', {
            rules: [
              {
                required: true,
                message: '请输入描述!'
              },
            ],
          })(<Input.TextArea placeholder="请输入描述" rows={4} />)}
        </Form.Item>
        <Form.Item label="作者名称" hasFeedback={true}>
          {getFieldDecorator('author', {
            rules: [
              {
                required: true,
                message: '请输入作者名称!'
              },
            ],
          })(<Input placeholder="请输入作者名称" />)}
        </Form.Item>
        <Form.Item label="文章分类" hasFeedback={true}>
          {getFieldDecorator('cateId', {
            initialValue: cateId,
            rules: [
              {
                required: true,
                message: '请选择分类!',
              },
            ],
          })(<Select
            placeholder="请选择分类"
            onChange={handleSelectChange}
          >
            {categroy.cateList.map((item: any) => (
              <Select.Option key={item._id} value={item.sortNum}>{item.name}</Select.Option>
            ))}
          </Select>)}
        </Form.Item>
        <Form.Item label="缩略图">
          {getFieldDecorator('thumbnail', {
          })(
            <div className="clearfix">
              <Upload name="logo" action={`/api/upload`} listType="picture-card" onChange={uploadHandleChange}
                fileList={fileList}
                onPreview={handlePreview}
              >
                { thumbnail ? null : uploadButton }
              </Upload>
              <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
              </Modal>
            </div>
          )}
        </Form.Item>
        <Form.Item {...contentItemLayout} label="文章内容">
        {getFieldDecorator('content', {
            rules: [
              {
                required: false,
                message: '请输入名称!'
              },
            ],
          })(<textarea ref={editorRef} />)}
        </Form.Item>
        <Form.Item {...ButtonItemLayout}>
          <Col xs={24} sm={8}>
            <Button block={true}>重置信息</Button>
          </Col>
          <Col xs={24} sm={8} offset={2}>
            <Button loading={loading} block={true} htmlType="submit" type="primary">提交信息</Button>
          </Col>
        </Form.Item>
      </Form>
    </Card>
  )
}
const WrapperAdverCreateForm = Form.create({name: 'adverCreate'})(AdverCreate)
export default (WrapperAdverCreateForm)
