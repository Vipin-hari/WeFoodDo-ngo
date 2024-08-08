import React from 'react';
import '../Blog.css';
const Blog = ({ blog }) => {
  return (
   <>
    
    <div className="blog">
        <img src={blog.img} alt="" />
      <div className="blog-details">
      <h2 className="blog-title" style={{fontWeight:'600',fontSize:40}}>{blog.title}</h2>
      <p className="blog-author">Author: {blog.author} </p>
      <p className="blog-content">{blog.content}</p>
      </div>
    </div>
    </>
  );
}

export default Blog;
