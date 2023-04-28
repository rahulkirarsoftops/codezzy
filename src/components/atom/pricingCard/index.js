import React from 'react'
import './style.css'

export const PricingCard = (props) => {
  return (
    <div className='card-div'>
    <div className='image'>
        <img src={props.props.image}alt='custom'/>
    </div>
    <div className='charges'>
        <div className='amount'>
            <span className='amount1'>{props.props.discountPrice}</span>
            <span className='amount2'>{props.props.Price}</span>
        </div>
        <h4>
            <a href='/'>{props.props.heading}</a>
        </h4>
        <div className='name'>
            <span>By
                <a href='/' >William</a>
            </span>
            <span>
                <i className='far fa-file-alt'></i>
                82 Lessons
            </span>
        </div>
    </div>
</div>
  )
}
