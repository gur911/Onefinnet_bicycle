import React from 'react';
import "../styles.css";
import Image1 from "../Assets/Images/model-y(2).jpg";
import Image2 from "../Assets/Images/model-x(1).webp";
import Image3 from "../Assets/Images/model-y(3).jpeg";
import Image4 from "../Assets/Images/model-z(4).jpeg";

function NewArrivals() {
  return (
    <div className="new-arrivals-section">
      <h2>New Arrivals</h2>
      <div className="product-row">
        <div className="product">
          <img src={Image1} alt="Bike 1" />
          <p>Bicycles</p>
          <p>Kryo X26 MTB - Model K</p>
          <p>☆☆☆☆☆</p>
          <p>$350.00</p>
        </div>
        <div className="product">
          <img src={Image2} alt="Bike 2" />
          <p>Bicycles</p>
          <p>Kryo X26 MTB - Model X</p>
          <p>☆☆☆☆☆</p>
          <p>$350.00</p>
        </div>
        <div className="product">
          <img src={Image3} alt="Bike 3" />
          <p>Bicycles</p>
          <p>Kryo X26 MTB - Model Y</p>
          <p>☆☆☆☆☆</p>
          <p>$350.00</p>
        </div>
        <div className="product">
          <img src={Image4} alt="Bike 4" />
          <p>Bicycles</p>
          <p>Kryo X26 MTB - Model Z</p>
          <p>☆☆☆☆☆</p>
          <p>$350.00</p>
        </div>
      </div>
    </div>
  );
}

export default NewArrivals;
