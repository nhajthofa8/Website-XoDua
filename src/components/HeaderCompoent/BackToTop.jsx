
import React, { useState } from "react";
import './style.css';
import {  
    ArrowUpOutlined,
  } from '@ant-design/icons';
function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
// Xử lí Back To Top Button
  function handleScroll() {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  window.addEventListener("scroll", handleScroll);

  return (
    <div>
    <button
      className={`back-to-top ${isVisible ? "show" : ""}`}
      onClick={handleClick}
    >
      <ArrowUpOutlined className="sm:animate-bounce" icon={ArrowUpOutlined} />
    </button>
    
    </div>
  );
}

export default BackToTopButton;
