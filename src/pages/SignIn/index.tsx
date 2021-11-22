import React from 'react'
import {Col, Divider, Row} from 'antd'

import {SignInForm} from '../../components/Forms/SignInForm'

const SignIn = () => {
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
