import React from 'react';
import Curousel from './Curousel';
import Blog from './Blog';
import blogdata from '../blog.json';
import About from './About';

const Home = () => {
  return (
    <div>
      <Curousel />
      <About />
      <h1 className='ww'>Welcome to Mini Blog</h1>
      <div className="blog-list">
        
        {blogdata.map(blog => (
          <Blog blog={blog}/>
          
        ))}
        
      </div>
    </div>
  );
}

export default Home;
