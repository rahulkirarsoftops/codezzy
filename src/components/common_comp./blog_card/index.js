import React from 'react'
import "./style.css";
import { Date } from "../../atom/date"
import { blogdata } from '../../pages/Blog/data/blogdata'
import { Col } from 'antd';
import image1 from "../../assets/PNG/post-thumb-2.jpeg"
import image2 from "../../assets/PNG/post-thumb-3.jpeg"
import { useNavigate } from 'react-router-dom';
import { listData } from './data/data';

export const Blog_card = () => {
  let navigate = useNavigate()
  return (
    <>

      <Col xl={16} lg={16} md={24} sm={24} xs={24}>
        {
          blogdata.map((item) => {
            return (
              <div className='blog-post-item'>
                <div>
                  <img src={item.img} className='img-fluid' />
                </div>
                <div className='post-item'>
                  <div>
                    <Date />
                  </div>
                  <div className='post-title'>
                    <h2>{item.heading}</h2>
                  </div>
                  <div className='post-content'>
                    <p>{item.pera}</p>
                    <span>
                      <label>More Details </label>
                      <i className='fa fa-angle-right'></i>
                    </span>
                  </div>
                </div>
              </div>
            )
          })
        }
      </Col>
      <Col xl={8} lg={8} md={24} sm={24} xs={24}>
        <div className='widget-search'>
          <form className='search-forms'>
            <input type="text" placeholder='Search' />
            <button type='submit'>
              <i className='fa fa-search'></i>
            </button>
          </form>
        </div>
        <div className='widget-search widget'>
          <div className='widget-title'>
            <h4>Latest Posts</h4>
            <ul className='recent-posts'>
              <li>
                <div className='widget-post-thumb'>
                  <img src={image1} className="img_fluid" onClick={() => navigate("/")} />
                </div>
                <div className='widget-post-body'>
                  <h6>Organic Food in your door</h6>
                  <span>10 april 2020</span>
                </div>
              </li>

              <li>
                <div className='widget-post-thumb'>
                  <img src={image2} className="img_fluid" onClick={() => navigate("/")} />
                </div>
                <div className='widget-post-body'>
                  <h6>Organic Food in your door</h6>
                  <span>10 april 2020</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className='widget-search widget-categories'>
          <div className='widget-title'>
            <h4>Categories</h4>
            <ul>
              <li className='cat_item' onClick={() => navigate("/")}>
                <div>
                  <i className='fa fa-angle-right'></i>
                  Web Design
                </div>
                (4)
              </li>

              <li className='cat_item' onClick={() => navigate("/")}>
                <div>
                  <i className='fa fa-angle-right'></i>
                  Wordpress
                </div>
                (14)
              </li>
              <li className='cat_item' onClick={() => navigate("/")}>
                <div>
                  <i className='fa fa-angle-right'></i>
                  Marketing
                </div>
                (24)
              </li>
              <li className='cat_item' onClick={() => navigate("/")}>
                <div>
                  <i className='fa fa-angle-right'></i>
                  Design & dev
                </div>
                (6)
              </li>
            </ul>
          </div>
        </div>

        <div className='widget-search tag_cloud'>
          <div className='widget-title'>
            <div>
              <h4>Tags</h4>
            </div>
            <div className='buttons_list'>
              {listData.map((item) => {
                return (
                  <div className='cloud' onClick={() => alert("dfghjkl")}>
                    <h4 className='inputs'>{item.name}</h4>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </Col>

    </>
  )
}
