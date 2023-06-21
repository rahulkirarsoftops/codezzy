import React from 'react'
import "./style.css";
import { AppInput } from '../atom/appInput'
import { AppButton } from '../atom/appButton'
import { Col, Row } from 'antd';

const ContactForm = () => {
    return (
        <div className='contact'>
            <Row gutter={[32, 32]}>
                <Col xl={16} lg={16} md={24} sm={24} xs={24}>
                    <div className='section_padding'>
                        <div className='section_heading'>
                            <span className='subheading'>Contact</span>
                            <h3>For More Information About Our Courses, Get In Touch</h3>
                        </div>
                        <div className='border-div'>
                            <div className='input_wrapper'>
                                <div className='input_border'>
                                    <AppInput lable="Name:" type={"text"} placeholder={'Your Name'} />
                                </div>
                                <div className='input_border'>
                                    <AppInput lable='Email id:' type={"email"} placeholder={'Email Address'} />
                                </div>
                            </div>
                            <div>
                                <AppInput lable='Subject:' type={"text"} placeholder={'Subject'} />
                            </div>
                            <div className='app-input1'>
                                <label>Message:</label>
                                <textarea id="" name="" className='input-text1' placeholder='Your Message'></textarea>
                            </div>
                            <div className='button_border'>
                                <AppButton title={"SEND MESSAGE"} type={"submit"} />
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xl={8} lg={8} md={24} sm={24} xs={24}>
                   {/* <div className='email_us'>
                        <p>Email Us:</p>
                        <h4>nancy@softopstechnologies.com</h4>
                        </div>*/}
                    <div className='email_us'>
                        <p>Make a Call</p>
                        <h4>+91 9580364089 </h4>
                    </div>
                    <div className='email_us'>
                        <p>Corporate Office</p>
                        <h4>Address:- Satguru Parinay,5th floor (507) PVVR+MPC, AB Rd, Scheme 54 PU4, Indore, 452011</h4>
                    </div>
                </Col>
            </Row>
        </div>

    )
}

export default ContactForm;