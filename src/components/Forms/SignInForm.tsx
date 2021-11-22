import React from 'react'
import {Alert, Button, Form, Input} from 'antd'
import Title from 'antd/lib/typography/Title'
import {LockOutlined, UserOutlined} from '@ant-design/icons'
import {Link} from 'react-router-dom'
import StylizedFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

import firebase from '../../firebase'
import {uiConfig} from '../../utils/firebaseUiConfig'
import {useActions} from '../../hooks/useActions'
import {useTypedSelector} from '../../hooks/useTypedSelector'

import {routes} from '../RootRoutes'

import styles from './form.module.scss'

export const SignInForm = () => {
  const {setEmailAuth} = useActions()
  const {error} = useTypedSelector((state) => state.auth)

  const onFinish = (values: any) => {
    setEmailAuth(values)
  }

  return (
    <>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{remember: true}}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
            size="large"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{required: true, message: 'Please input your Password!'}]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            size="large"
          />
        </Form.Item>

        {error && (
          <Form.Item>
            <Alert message={error} type="error" showIcon />
          </Form.Item>
        )}

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className={`${styles.btn} primary-btn`}
          >
            Sign in
          </Button>
          Not yet registered?{' '}
          <Link to={routes.signUp} className={styles.signupLink}>
            Sign up
          </Link>
        </Form.Item>
      </Form>

      <Title style={{textAlign: 'center'}} level={4}>
        OR
      </Title>

      <StylizedFirebaseAuth
        uiConfig={uiConfig}
        firebaseAuth={firebase.auth()}
      />
    </>
  )
}
