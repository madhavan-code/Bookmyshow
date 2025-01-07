import React, { useState } from "react";
import { categories, items } from "./Category";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 
import "./Event.css"; // 
import { Carousel } from "react-bootstrap";
const Event = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  
  const handleCategoryClick = (category) => {
    setSelectedCategory(category); 
  };


  const filteredItems = items.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  );
const [activeIndex, setActiveIndex] = useState(0); // 

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex); // 
  };
  return (
    <div className="event-container">
      <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
            <Carousel.Item>
            <img src="./images/gl2.png" alt="Slide 1" className="carousel-img" />

            </Carousel.Item>
            <Carousel.Item>
            <img src="./images/avg.jpg" alt="Slide 2" className="carousel-img" />

            </Carousel.Item>
           </Carousel>

      
      

    
      <div className="category-buttons">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => handleCategoryClick(category)}
            className={`category-btn ${
              selectedCategory === category ? "active" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Items Grid */}
      <div className="items-grid">
        {filteredItems.map((item) => (
          <div className="item-card" key={item.id}>
            <img src={item.img} alt={item.name} className="item-img" />
            <div className="item-name">{item.name}</div>
            <button className="book-btn">Book</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;
