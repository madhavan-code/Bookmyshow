import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { categories, items} from "./Category";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 
import "./Event.css"; // 
import { Carousel } from "react-bootstrap";
const Event = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const navigate=useNavigate();
  const handleCategoryClick = (category) => {
    setSelectedCategory(category); 
  };

  const handleMovieSelect = (movie) => {
    navigate('/theaters', { state: { movie } });
};
  const filteredItems = items.filter(
    (movie) => selectedCategory === "All" || movie.category === selectedCategory
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
        {filteredItems.map((movie) => (
          <div className="item-card" key={movie.id}>
            <img src={movie.img} alt={movie.name} className="item-img" />
            <div className="item-name">{movie.name}</div>
            <button className="book-btn" onClick={()=>handleMovieSelect(movie)}>Book Ticket</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;
