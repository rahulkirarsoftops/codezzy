import React from 'react';
import './style.css';
import Navbar from '../../common_comp./navbar';
import TopBanner from '../../common_comp./topBanner';
import obj from '../../common_comp./topBanner/data/data_courses'
import AmountBanner from '../../AmountBanner';
import Footer from '../../common_comp./footer';


const Courses = () => {
    return (
        <div>
            <Navbar />

            <TopBanner props={obj} />

            <AmountBanner />

            <Footer />
        </div>
    )
}

export default Courses;
