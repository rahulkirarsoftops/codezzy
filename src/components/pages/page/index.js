import Footer from '../../common_comp./footer';
import React from 'react';
import Navbar from '../../common_comp./navbar';
import Login from '../../Login';
import './style.css';

const Pages = () => {
    return (
        <div>
            <Navbar />

            <Login />

            <Footer />
        </div>
    )
}

export default Pages;
