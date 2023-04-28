import React from "react";
import { Row } from "antd";
import { Blog_card } from "../common_comp./blog_card";

const BlogBanner = () => {
  return (
    <div className="adarsh">
      <Row gutter={[24, 12]}>
        <Blog_card />
      </Row>
    </div>
  );
};

export default BlogBanner;
