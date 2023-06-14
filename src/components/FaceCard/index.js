import { Col, Row } from 'antd'
import React from 'react'
import './style.css'
import photo from './data'
import { Link } from 'react-router-dom'

const FaceCard = () => {
    return (
        <div className='body'>
            <Row gutter={{ xs: 8, sm: 16, md: 32, lg: 32 }}>
                {
                    photo.map((item) => {
                        return (
                            <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24} >
                                <div className='team-item'>
                                
                                    <img src={item.img} alt={item.img} style={{width:"200px",height:"250px"}}/>
                                    <div className='team-info'>
                                        <h5>{item.name}</h5>
                                        <p>{item.post}</p>
                                        <ul className='team-socials'>
                                            <li className='list-inline-item1'>
                                                <Link to={'https://www.facebook.com/softopstechnologies/'} className='link-tag'>
                                                    <i className='fa fa-facebook'></i>
                                                </Link>
                                            </li>
                                            <li className='list-inline-item1'>
                                                <Link to={'https://twitter.com/SoftopsT/status/1579746050222751748'} className='link-tag'>
                                                    <i className='fa fa-twitter'></i>
                                                </Link>
                                            </li>
                                            <li className='list-inline-item1'>
                                                <Link to={'https://in.linkedin.com/company/softops-technologies?original_referer=https%3A%2F%2Fwww.google.com%2F'} className='link-tag'>
                                                    <i className='fa fa-linkedin'></i>
                                                </Link>
                                            </li>
                                        </ul>
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

export default FaceCard;
