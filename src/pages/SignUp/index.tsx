import React from 'react'
import {Col, Divider, Row} from 'antd'

import {SignUpForm} from '../../components/Forms/SignUpForm'

const SignUp = () => {
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
