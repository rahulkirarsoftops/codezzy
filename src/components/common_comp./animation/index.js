import React from 'react'
import './index.css';
import VideoCamp from '../../assets/PNG/video-camera.png';
import Stack from '../../assets/PNG/icons8.png';
import Flag from '../../assets/PNG/flag.png';
import Circle from '../../assets/PNG/lifesaver.png';

const Animation = () => {
    return (
        <div className='animation-div' >
            <div className='inner-border' data-aos="slide-up" >
                <div className='wer'>
                    <div><img src={VideoCamp}alt='custom'/></div>
                    <div id='value'>100</div>
                    <div>Instructors</div>
                </div>
                <div className='wer'>
                    <div><img src={Stack}alt='custom'/></div>
                    <div id='value'>100</div>
                    <div>Total Courses</div>
                </div>
                <div className='wer'>
                    <div><img src={Flag}alt='custom'/></div>
                    <div id='value'>100</div>
                    <div>Registered Enrolls</div>
                </div>
                <div className='wer'>
                    <div><img src={Circle}alt='custom'/></div>
                    <div id='value'>100</div>
                    <div>Satisfaction Rate</div>
                </div>
            </div>
        </div>
    )
}

export default Animation
