import React from 'react'
import Navbar from "../../common_comp./navbar"
import TopBanner from "../../common_comp./topBanner";
import { obj } from "../../common_comp./topBanner/data/data_contact"
import ContactForm from '../../contactForm';
import Footer from "../../common_comp./footer"

const Contact = () => {
  return (
    <div>
        <Navbar />

        <TopBanner props={obj}/>

        <ContactForm />

        <Footer />
    </div>
  )
}

export default Contact