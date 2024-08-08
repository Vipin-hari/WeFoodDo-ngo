import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../Blog.css'
const About = () => {
  return (
 <>
    <h1 className='ww'>About Us</h1>
    <div className="blog-content">
      <p>
        Our platform, FooDo, aims to connect NGOs, charities, and donors to fight hunger and spread hope. 
        We facilitate the donation of food items from donors to NGOs and charities, helping those in need 
        and making a positive impact on society.
      </p>
      <p>
        At FooDo, we believe in the power of community and collaboration. By bringing together NGOs, charities, 
        and donors, we strive to make a meaningful difference in the lives of people facing food insecurity.
      </p>
      <p>
        Join us in our mission to make a difference and create a world where no one goes hungry.
        Join us in our mission to make a difference and create a world where no one goes hungry.
      </p>
      <span>
      <Link to="/join">
        <Button variant="outline-success" className='btn'>Join the community?</Button>
      </Link>
    </span>
    </div>
    </>
  );
}

export default About;
