import React, { FormEvent, useState } from 'react'
import styles from './user.module.less'
import { Form, Icon, Input, Button, Card, Col, Row } from 'antd'
import { FormComponentProps } from 'antd/es/form'

interface LoginProps {
  form?: any;
}
const Login:React.FC<LoginProps> = ({ form }) => {
  const { getFieldDecorator, validateFields } = form
  // 提交登录
  function handleSubmit (e: FormEvent) {
    e.preventDefault()
    validateFields((err: any, values: any) => {
      if (!err) {
        console.log('-----------------', values)
      }
    })
  }
  // input 改变时
  return (
    <Row type="flex" justify="center" className={styles['user-wrapper']}>
      <Col xs={24} sm={16} md={12} lg={10} xl={8} xxl={6}>
        <Card title="后台系统管理" className={styles['login-card']}>
          <Form onSubmit={handleSubmit} className={styles['login-form']}>
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: '请输入用户名!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="用户名"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="密码"
                />,
              )}
            </Form.Item>
            <Form.Item>
              <Button block type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  )
}

export default Form.create<FormComponentProps>({name: 'login'})(Login)
