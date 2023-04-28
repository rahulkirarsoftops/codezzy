import React from 'react'
import BlogBanner from '../../blogBanner'
import Footer from "../../common_comp./footer"
import Navbar from '../../common_comp./navbar'
import TopBanner from '../../common_comp./topBanner'
import { obj } from '../../common_comp./topBanner/data/data_Blog'
import "./style.css";

export const Blog = () => {
    return (
        <div>
            <Navbar />

            <TopBanner props={obj} />

            <BlogBanner />

            <div className='circle1'>
                <div className='numbers'>1</div>
                <div className='numbers'>2</div>
                <div className='numbers'>3</div>
            </div>

            <Footer />
        </div>
    )
}
