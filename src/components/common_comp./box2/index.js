import React from 'react'
import Card5 from '../card5';
import './index.css';
import Image from '../card5/data';

const Box2 = () => {
  return (
    <div className='inner-container'>
      <div className='sub-heading'>BLOG NEWS</div>
      <div className='heading1'>Latest From The Blog</div>
      <div className='pera'>The ultimate planning solution for busy women who want to reach their personal goals</div>
      <br />
      <br />
      <br />
      <div className='card5-div'>
        {
          Image.map((item,index)=>{
            return(
              <div key={index} ><Card5 props={item}/></div>
            );
          })
        }
      </div>
    </div>
  )
}

export default Box2;
