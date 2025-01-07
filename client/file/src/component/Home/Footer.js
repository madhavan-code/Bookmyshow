
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="line-container">
      <div className="line"></div>
      <div className="gap">BookMyShow</div>
      <div className="line"></div>
    </div>
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()}  BigEntertainment. All Rights Reserved.</p>
        <p>The content of the images used on side are copyright protect and copyright verstes.The usage 
          of the content and the website intended to the promote works</p>
      </div>
    </footer>
  );
};

export default Footer;
