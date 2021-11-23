import React from 'react'
import {Col, Divider, Row} from 'antd'
import {Navigate} from 'react-router-dom'

import {SignUpForm} from '../../components/Forms/SignUpForm'
import {routes} from '../../components/RootRoutes'

import {useTypedSelector} from '../../hooks/useTypedSelector'

const SignUp = () => {
  const {user} = useTypedSelector((state) => state.auth)

  if (user) return <Navigate to={routes.menu} replace={true} />

  return (
    <div className="page-wrapper">
      <div className="container">
        <Divider className="pages-title" orientation="left">
          Sigh up
        </Divider>
        <Row>
          <Col xs={{span: 24}} md={{span: 12, offset: 6}}>
            <SignUpForm />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default SignUp
