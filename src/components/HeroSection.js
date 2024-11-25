import React from 'react';
import "../styles.css";
import { RiRecordCircleLine } from "react-icons/ri";


function HeroSection() {
  return (
    <div className="hero-section">
      <div className="content">
        <div className="new-launch">Newly Launched</div>
        <div className="product-name">Kryo X26</div>
        <div className="product-category">MTB</div>
        <div className="specs">
          <strong>Specifications:</strong>
          <ul>
            <li><RiRecordCircleLine /> Lightweight 18' Frame</li>
            <li><RiRecordCircleLine /> Steel Suspension Fork</li>
            <li><RiRecordCircleLine /> Steel Hardtail Frame</li>
          </ul>
        </div>
        <button className="red-btn">Buy Now</button>
      </div>
    </div>
  );
}

export default HeroSection;
