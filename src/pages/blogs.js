import React from "react";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import Blog from "./bloginfo";
  
const Blogs = () => {
  return (
    <div className="container">
      <h1 id="post-disp">
        Add a post?
      </h1>
      <Blog/>
    </div>
  );
};
  
export default Blogs;