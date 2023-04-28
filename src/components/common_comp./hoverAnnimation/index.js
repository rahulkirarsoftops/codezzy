import { Col, Row } from 'antd';
import React from 'react';
import './style.css'
import data from './data'

const HoverAnnimation = (props) => {
    return (
        <div className='adarsh'>
            <Row gutter={{ xs: 8, sm: 16, md: 32, lg: 32 }}>
                {
                    data.map((item) => {
                        return (
                            <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={24} >
                                <div className='feature-item'>
                                    <div className='feature-icon'>
                                        <img src={item.img} />
                                    </div>
                                    <div className='feature-text'>
                                        <h4>{item.heading}</h4>
                                        <p>{item.subheading}</p>
                                    </div>
                                </div>

                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    )
}

export default HoverAnnimation;