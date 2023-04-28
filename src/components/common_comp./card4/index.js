import React from 'react'
import './index.css'

const Card4 = (props) => {
    return (
        <div className='wrapper'>
            <div className='wrapper-img'>
                <img src={props.props.img} />
                    <span className='asd'>{props.props.amount}</span>

            </div>
            <div className='closer'>
                <div className='header-1' >{props.props.subHeading}</div>
                <div className='heading3'>{props.props.heading}</div>
                <div className='pera1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, alias.</div>
                <div className='bottom-div'>
                    <span><i className='fa fa-user'></i> 340 Students</span>
                    <span><i className='fa fa-file-text-o'></i> 82 Lessons</span>
                </div>
            </div>
        </div>
    )
}

export default Card4
