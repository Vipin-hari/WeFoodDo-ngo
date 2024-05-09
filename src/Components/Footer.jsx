import React from 'react';
import { Link } from 'react-router-dom'; 
const Footer = () => {

  
  return (
    <footer className="bg-dark text-light text-center py-4" >
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h6 className="text-uppercase mb-4">About</h6>
            <p className="mb-0">WeFooDo is a platform connecting NGOs, charities, and donors to fight hunger and spread hope.</p>
          </div>
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h6 className="text-uppercase mb-4">Community</h6>
            <ul className="list-unstyled mb-0">
              <li><Link to="/ngos">NGOs</Link></li>
              <li><Link to="/charity">Charities</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h6 className="text-uppercase mb-4">Follow us</h6>
            <ul className="list-unstyled mb-0">
              <li><Link to="/fb" >Facebook</Link></li>
              <li><Link to="/insta" >Instagram</Link></li>
              <li><Link to="/twitter" >Twitter</Link></li>
              <li><Link to="/mail" >Mail</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-1">
        <div className="container">
            <small>"Connecting Hearts, Nourishing Hope: Donate Food, Spread Love!"</small><br />
          <small>© 2024 WeFooDo. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
