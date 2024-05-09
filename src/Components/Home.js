import Carousell from './Curousel'
import About from './About'
import Blog from './Blog'
import React from 'react'
import blogdata from '../blog.json';
const Home = ({user}) => {
    console.log(user);
  return (
    <div>
        {/* <h1>`$user`</h1> */}
      <Carousell />
      <About />
      <h1 className='ww'>Welcome to Mini Blog</h1>
      <div className="blog-list">
        
        {blogdata.map(blog => (
          <Blog blog={blog}/>
          
        ))}
        
      </div>
    </div>
  )
}

export default Home
