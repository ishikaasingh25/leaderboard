import React, { useEffect, useRef } from 'react';
import './AutoScrollFooter.css'; // Ensure this is imported if in a separate CSS file

const AutoScrollFooter = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;
    let scrollAmount = 0;

    const scrollFooter = () => {
      footer.scrollLeft = scrollAmount;
      scrollAmount += 1;
      if (scrollAmount >= footer.scrollWidth - footer.clientWidth) {
        scrollAmount = 0;
      }
    };

    const interval = setInterval(scrollFooter, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="footer" ref={footerRef}>
      <div className="footer-content">
        <div className="footer-text">
          <p>© 2024 Your Company. All rights reserved.</p>
        </div>
        <div className="footer-links">
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </div>
  );
};

export default AutoScrollFooter;
