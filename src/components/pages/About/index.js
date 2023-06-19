import React from 'react';
import HoverAnnimation from '../../common_comp./hoverAnnimation';
import Navbar from '../../common_comp./navbar';
import TopBanner from '../../common_comp./topBanner';
import VideoPlayer from '../../videoPlayer';
import BestTeam from '../../common_comp./bestTeam';
import Crousel from '../../common_comp./crousel-banner';
import CROUSEL from '../../common_comp./crousel-banner/data';
import Box from '../../common_comp./simple-box';
import FaceCard from '../../FaceCard';
import obj from '../../common_comp./topBanner/data/data'
import Footer from '../../common_comp./footer/index';

const About = () => {
  return (
    <div>
      <Navbar />

      <TopBanner props={obj}/>

      <HoverAnnimation />

      <VideoPlayer />

      <br/>
      <br/>
      <br/>

      <BestTeam /> 

      <FaceCard />

      <Crousel item={CROUSEL}/>

      <Box />

      <Footer />
    </div>
  )
}

export default About;
