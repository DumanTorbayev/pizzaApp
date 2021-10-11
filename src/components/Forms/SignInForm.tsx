import React, {FC} from 'react'
import styles from './form.module.scss'
import {Alert, Button, Form, Input} from "antd"
import {LockOutlined, UserOutlined} from "@ant-design/icons"
import {Link} from 'react-router-dom'
import StylizedFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import Title from "antd/lib/typography/Title";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {uiConfig} from "../../utils/firebaseUiConfig";
import firebase from "../../firebase";
import {routes} from "../RootRoutes";

export const SignInForm: FC = () => {
    const {setEmailAuth} = useActions()
    const {error} = useTypedSelector(state => state.auth)

    const onFinish = (values: any) => {
        setEmailAuth(values)
    };

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
                        prefix={<UserOutlined className="site-form-item-icon"/>}
                        placeholder="Email"
                        size="large"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{required: true, message: 'Please input your Password!'}]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon"/>}
                        type="password"
                        placeholder="Password"
                        size="large"
                    />
                </Form.Item>

                {
                    error &&
                    <Form.Item>
                        <Alert
                            message={error}
                            type="error"
                            showIcon
                        />
                    </Form.Item>
                }

                <Form.Item>
                    <Button type="primary" htmlType="submit" className={styles.btn}>
                        Sign in
                    </Button>
                    Not yet registered? <Link to={routes.signUp} className={styles.signup__link}>Sign up</Link>
                </Form.Item>
            </Form>

            <Title style={{textAlign: 'center'}} level={4}>OR</Title>

            <StylizedFirebaseAuth
                uiConfig={uiConfig}
                firebaseAuth={firebase.auth()}
            />
        </>
    );
};