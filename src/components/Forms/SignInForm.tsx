import React, {FC} from 'react'
import styles from './form.module.scss'
import {Alert, Button, Form, Input} from 'antd'
import {LockOutlined, UserOutlined} from '@ant-design/icons'
import {Link} from 'react-router-dom'
import StylizedFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import Title from 'antd/lib/typography/Title'
import {useActions} from '../../hooks/useActions'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {uiConfig} from '../../utils/firebaseUiConfig'
import firebase from '../../firebase'
import {routes} from '../RootRoutes'

export const SignInForm: FC = () => {
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
            Войти
          </Button>
          Еще не зарегистрировались?{' '}
          <Link to={routes.signUp} className={styles.signupLink}>
            Регистрация
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
