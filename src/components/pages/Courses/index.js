import React from 'react';
import './style.css';
import Navbar from '../../common_comp./navbar';
import TopBanner from '../../common_comp./topBanner';
import obj from '../../common_comp./topBanner/data/data_courses'
import AmountBanner from '../../AmountBanner'; 
import Footer from '../../common_comp./footer';
// import Coursecomponent from '../../common_comp./CourseContent/index.js';



const Courses = () => {
    return (
        <div>
            <Navbar />

            {/* <TopBanner props={obj} /> */}

            {/* <Coursecomponent /> */}

            <Footer />
        </div>
    )
}

export default Courses;
