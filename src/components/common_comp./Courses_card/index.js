import { Col, Row } from 'antd';
import React from 'react'
import './style.css';

const CourseCard = (props) => {
    return (

            <Col xl={8} lg={12} md={12} sm={24} xs={24}>
                <div>
                    <div className='wrapper-card'>
                        <div className='wrapper-img'>
                            <img src={props.props.img} />
                            <span className='amount'>{props.props.amount}</span>
                        </div>
                        <div className='closer'>
                            <div className='bottom-div'>
                                <span><i className='fa fa-user'></i> 340 Students</span>
                                <span><i className='fa fa-file-text-o'></i> 82 Lessons</span>
                            </div>
                            <br />
                            <div className='heading3'>{props.props.heading}</div>
                            <br />
                            <div className='pera1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, alias.</div>
                            <br />
                        </div>
                    </div>
                </div >
            </Col>
    )
}

export default CourseCard;
