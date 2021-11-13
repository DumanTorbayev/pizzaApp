import React, {FC} from 'react'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {Redirect} from 'react-router-dom'
import {Col, Divider, Row} from 'antd'
import {SignUpForm} from '../../components/Forms/SignUpForm'
import {routes} from '../../components/RootRoutes'

export const SignUp: FC = () => {
  const {user} = useTypedSelector((state) => state.auth)

  if (user) return <Redirect to={routes.menu} />

  return (
    <div className="page-wrapper">
      <div className="container">
        <Divider className="pages-title" orientation="left">
          Sigh up
        </Divider>
        <Row>
          <Col span={12} offset={6}>
            <SignUpForm />
          </Col>
        </Row>
      </div>
    </div>
  )
}
