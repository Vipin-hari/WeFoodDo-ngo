import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h6 className="text-uppercase mb-4">About</h6>
            <p className="mb-0">WeFooDo is a platform connecting NGOs, charities, and donors to fight hunger and spread hope.</p>
          </div>
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h6 className="text-uppercase mb-4">Community</h6>
            <ul className="list-unstyled mb-0">
              <li><a href="/ngos">NGOs</a></li>
              <li><a href="/charity">Charities</a></li>
              <li><a href="/gallery">Gallery</a></li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h6 className="text-uppercase mb-4">Follow us</h6>
            <ul className="list-unstyled mb-0">
              <li><a href="https://www.facebook.com/officialfacebookpage">Facebook</a></li>
              <li><a href="https://www.twitter.com/officialtwitterpage">Twitter</a></li>
              <li><a href="https://www.instagram.com/officialinstagrampage">Instagram</a></li>
              <li><a href="mailto:official@wefoodo.com">Mail</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-2">
        <div className="container">
            <small>"Connecting Hearts, Nourishing Hope: Donate Food, Spread Love!"</small><br />
          <small>© 2024 WeFooDo. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
