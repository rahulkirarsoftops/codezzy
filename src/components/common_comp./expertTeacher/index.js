import React from 'react'
import './index.css';
import ICON from '../card3/data'
import Card3 from '../card3'

const ExpertTeacher = () => {
    return (
        <div className='inner-container'>
            <div className='card3'>
                {
                    ICON.map((item) => {
                        return (
                            <Card3 props={item} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ExpertTeacher;
