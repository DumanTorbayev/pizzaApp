import React from 'react'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {Redirect} from 'react-router-dom'
import {Col, Divider, Row} from 'antd'
import {SignInForm} from '../../components/Forms/SignInForm'
import {routes} from '../../components/RootRoutes'

const SignIn = () => {
  const {user} = useTypedSelector((state) => state.auth)

  if (user) return <Redirect to={routes.menu} />

  return (
    <div className="page-wrapper">
      <div className="container">
        <Divider className="pages-title" orientation="left">
          Sigh in
        </Divider>
        <Row>
          <Col xs={{span: 24}} md={{span: 12, offset: 6}}>
            <SignInForm />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default SignIn
