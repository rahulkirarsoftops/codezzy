import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./index.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Crousel = (props) => {
  return (
    <div className="flix-o-lorem">
      <div className="flix-o-lorem1">
        <div className="sub-heading">TESTIMONIALS</div>
        <div className="heading1">Our Successful Students</div>
        <div className="pera">
          Our institute takes pride in the success of our students who have
          secured top positions in various IT companies. These students have
          displayed exceptional skills and knowledge in their respective fields.
          Their achievements are a testament to the quality of education and
          training provided by our institute.
        </div>
        <div className="pera">
          Help you to get the best course that fits you.
        </div>
        <div>
          <i class="fa-solid fa-greater-than"></i>
        </div>
      </div>

      <div className="flix-o-lorem2">
        <Carousel
          autoPlay="true"
          emulateTouch="true"
          showStatus={false}
          infiniteLoop
        >
          {props.item?.map((innerItem) => {
            return (
              <div className="crousel-wrapper">
                <div>
                  <i className="fa fa-quote-right testimonial"></i>
                </div>
                <div className="crousel-heading">{innerItem.heading}</div>
                <div className="crousel-pera">{innerItem.subheading}</div>
                <div className="people1">
                  <div className="poiu">
                    <img src={innerItem.img} className="lkj" alt="custom" />
                  </div>
                  <div className="name1">{innerItem.auther}</div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Crousel;
