import React from 'react';

const Footer = () => {
  return (
    <footer className="text-light py-4 mt-5" style={{backgroundColor:"#00A78E",height:'100px'}}>
      <div className="container text-center">
        <p className="mb-2" style={{color:"black"}}>&copy; {new Date().getFullYear()} Sathiyabama Ramanujam. All rights reserved.</p>
        <div>
          <a href="https://github.com/Sathiya-11?tab=repositories" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github fa-sm text-dark"></i>
      </a>
      <a href="https://www.linkedin.com/in/sathiya2002/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin fa-sm text-dark"></i>
      </a>
      <a href="mailto:bamasathiya37@gmail.com">
        <i className="fas fa-envelope fa-sm text-dark"></i>
      </a>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
