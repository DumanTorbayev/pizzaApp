import React from 'react'
import styles from './form.module.scss'
import {Alert, Button, Form, Input} from 'antd'
import {LockOutlined, UserOutlined} from '@ant-design/icons'
import {Link} from 'react-router-dom'
import Title from 'antd/lib/typography/Title'
import StylizedFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import {uiConfig} from '../../utils/firebaseUiConfig'
import firebase from '../../firebase'
import {routes} from '../RootRoutes'
import {useActions} from '../../hooks/useActions'
import {useTypedSelector} from '../../hooks/useTypedSelector'

export const SignUpForm = () => {
  const {setRegister} = useActions()
  const {error} = useTypedSelector((state) => state.auth)

  const onFinish = (values: any) => {
    delete values.confirm

    setRegister(values)
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
              message: 'Некорректный email',
            },
            {
              required: true,
              message: 'Введите свой email',
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
          rules={[{required: true, message: 'Введите пароль'}]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Пароль"
            size="large"
          />
        </Form.Item>
        <Form.Item
          name="confirm"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Подтвердите введенный пароль',
            },
            ({getFieldValue}) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve()
                }

                return Promise.reject(new Error('Пароли не совпадают'))
              },
            }),
          ]}
        >
          <Input
            type="password"
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Подтвердите пароль"
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
            Зарегистрироваться
          </Button>
          Уже зарегистрирован?{' '}
          <Link to={routes.signIn} className={styles.signupLink}>
            Войти
          </Link>
        </Form.Item>
      </Form>

      <Title style={{textAlign: 'center'}} level={4}>
        ИЛИ
      </Title>

      <StylizedFirebaseAuth
        uiConfig={uiConfig}
        firebaseAuth={firebase.auth()}
      />
    </>
  )
}
