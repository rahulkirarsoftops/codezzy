import { Col, Row } from 'antd'
import React from 'react'
import './index.css';
import { AppInput, AppButton } from '../atom'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='adarsh form'>
            <Row gutter={{ xs: 8, sm: 16, md: 16, lg: 32 }}>
                <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                    <div>
                        <h2 className='font-weight-bold'>Login</h2>
                        <form className='eduhash-form'>
                            <AppInput lable="Username or email address*" placeholder="Username or Email" />
                            <AppInput type="password" lable="Password*" placeholder="password" />
                            <AppButton title={"Login"} type={"submit"} />

                            <label>
                                <input type='checkbox' /> Remember me
                            </label>
                            <div className='pass'>
                                <Link to={'/pages'} className="forget-password">Lost your password?</Link>
                            </div>
                        </form>
                    </div>
                </Col>
                <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                    <div>
                        <h2 className='font-weight-bold'>Register</h2>
                        <form className='eduhash-form'>
                            <AppInput lable="User Name *" placeholder="Username" />
                            <AppInput type="email" lable="Email address *" placeholder="Email" />
                            <AppInput type="password" lable="Password*" placeholder="password" />
                            <AppButton title={"Register"} type={"submit"} />
                        </form>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Login
