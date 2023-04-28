import React from 'react'
import Card4 from '../card4';
import "./index.css";
import DATA from '../card4/data';

const Banner = () => {
  return (
    <div className='inner-container qwert'>
      <div className='sub-heading'>TRENDING COURSES</div>
      <div className='heading1'>Over 200+ New Online Courses</div>
      <div className='pera'>The ultimate planning solution for busy women who want to reach their personal goals</div>
      <div className='btn-list'>
        <button type='submit' >All</button>
        <button type='submit' >Printing</button>
        <button type='submit' >Web</button>
        <button type='submit' >Illustration</button>
        <button type='submit' >Media</button>
        <button type='submit' >Crafts</button>
      </div>
      <div className='banner-div'>
        {
          DATA.map((item) => {
            return (
              <Card4 props={item} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Banner;
