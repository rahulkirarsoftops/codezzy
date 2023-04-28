import React from 'react'
import { Date } from '../../atom/date';
import './index.css';

const Card5 = (props) => {
  return (
    <div className='wrapper1'>
            <div className='wrapper-img1'>
                <img src={props.props.img} alt='custom'/>
            </div>
            <div className='closer'>
                <Date />
                <div className='heading3'>How to become a best sale marketer in a month!</div>
            </div>

        </div>
  )
}

export default Card5
