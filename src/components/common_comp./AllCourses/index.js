import React from 'react'
import { Link } from 'react-router-dom';
import './index.css'

const Courses = () => {
    return (
        <div className='inner-container'>
            <p className='pera'>Take the control of their life back and start doing things to make their dream come true. <Link to={"/"} style={{ color: "#26AB95" }}>View all courses</Link></p>
        </div>
    )
}

export default Courses;
