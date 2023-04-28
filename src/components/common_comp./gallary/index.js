import React from 'react'
import './index.css';
import image1 from "../../assets/PNG/Gallary/feature1.png"
import image2 from "../../assets/PNG/Gallary/feature2.png"
import image3 from "../../assets/PNG/Gallary/feature3.png"
import image4 from "../../assets/PNG/Gallary/feature4.jpeg"

const Gallary = () => {
    return (
        <div className='container3'>
            <div className='card-container'>
                <div className='div1'>
                    <img src={image1} />
                    <img src={image2} />
                </div>
                <div className='div2'>
                    <img src={image3} />
                    <img className='img4' src={image4} />
                </div>
            </div>

            <div className='header inner-container'>
                <div className='sub-heading1'>SELF DEVELOPMENT COURSE</div>
                <div className='heading2'>Get Instant Access To Expert solution</div>
                <div className='pera2'>The ultimate planning solution for busy women who want to reach their personal goals.Effortless comfortable eye-catching unique detail.Take the control of their life back and start doing things</div>
                <div className='btn'><button className='btn2'>JOIN NOW</button></div>
            </div>
        </div>
    )
}

export default Gallary
