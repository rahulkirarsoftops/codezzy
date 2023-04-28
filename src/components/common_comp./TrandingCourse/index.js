import React from 'react'
import './index.css';

const TrandingCourse = ({heading,subheading,paragraph}) => {
    return (
        <div className='inner-container'>
            <div className='sub-heading'>{heading}</div>
            <div className='heading1'>{subheading}</div>
            <div className='pera'>{paragraph}</div>
        </div>
    )
}

export default TrandingCourse;
