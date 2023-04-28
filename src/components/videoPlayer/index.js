import React from 'react'
import './style.css';
import ReactPlayer from 'react-player'
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';

const VideoPlayer = () => {
    return (
        <div className='adarsh'>
            <Row gutter={{ xs: 8, sm: 16, md: 32, lg: 32 }}>
                <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24} >
                    <div className='video-div'>
                        <ReactPlayer url='https://www.youtube.com/watch?v=TrsCXBKp7CA' width={'100%'} height={'480px'} />
                    </div>
                </Col>
                <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                    <div className='top-most-container'>
                        <div className='subheading'>
                            SELF DEVELOPMENT COURSE
                        </div>
                        <div className='heading'>
                            <h3>Get Instant Access To <span>Expert solution</span></h3>
                        </div>
                        <div className='peragraph'>
                            <p>The ultimate planning solution for busy women who want to reach their personal goals.Effortless comfortable eye-catching unique detail</p>
                        </div>
                        <ul className='about-feature'>
                            <li>
                                <i className='fa fa-check' ></i>
                                <h5>High Quality Video Details</h5>
                            </li>
                            <li>
                                <i className='fa fa-check' ></i>
                                <h5>Powerful Audiance</h5>
                            </li>
                            <li>
                                <i className='fa fa-check' ></i>
                                <h5>Premium Content Worldwide</h5>
                            </li>
                        </ul>
                        <button type='submit' className='btn3'>Our Courses</button>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default VideoPlayer
