import React from 'react'
import './index.css'

const Card1 = (props) => {
  return (
    <div className='outer-div'>
        <img src={props.props.image} alt='custom'/>
    </div>
  )
}

export default Card1;
