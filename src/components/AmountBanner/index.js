import React from 'react'
import './style.css';
import data from '../common_comp./Courses_card/data'
import CourseCard from '../common_comp./Courses_card'
import { Row } from 'antd';

const AmountBanner = () => {
    return (
        <div className='body'>
            <div className='head'>
                <div className='search-result'>
                    <span>Showing 1-6 of 8 results</span>
                </div>
                <div className='topbar-search'>
                    <form>
                        <input type='text' placeholder='Search our Courses' className='form-control' />
                        <label>
                            <i className='fa fa-search'></i>
                        </label>
                    </form>
                </div>
            </div>
            <div className='Course-card'>
                <Row gutter={[{ xs: 8, sm: 16, md: 32, lg: 32 },{ xs: 8, sm: 16, md: 32, lg: 32 }]}>
                    {
                        data.map((item) => {
                            return (
                                <CourseCard props={item} />
                            )
                        })
                    }
                </Row>
            </div>
            <div className='circle'>
                <div className='numbers'>1</div>
                <div className='numbers'>2</div>
                <div className='numbers'>3</div>
                <div className='numbers'><i className='fa fa-angle-right'></i></div>
            </div>
        </div>
    )
}

export default AmountBanner;
