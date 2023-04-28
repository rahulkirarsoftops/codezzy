import React from 'react'
import './index.css';


const Card3 = (props) => {
    return (
        <div className='card-wrapper'>
            <div className='flag'>
                <div className='i-div'><i class={props.props.icon}></i></div>
            </div>
            <div className='peragraph'>
                <div className='heading'>
                    {props.props.heading}
                </div>
                <div className='pera'>
                    Develop skills for career of various majors including computer
                </div>
            </div>
        </div>
    )
}

export default Card3
