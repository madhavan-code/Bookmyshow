import React from 'react';
import { Details } from './Detail';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './Movie.css';
import { Carousel } from "react-bootstrap";

const Movie = () => {
  const navigate = useNavigate();


  const handleMovieSelect = (movie) => {
    navigate('/theaters', { state: { movie } });
  };
  const [activeIndex, setActiveIndex] = useState(0); // 

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex); // 
  };
  return (
    <div className="cont">
      <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
        {Details.map((movie, index) => (
          <Carousel.Item
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
            key={movie.id}
          >
            <iframe

              src={`https://www.youtube.com/embed/${movie.youtubeId}`}
              title={movie.name}
              className='d-block w-100'
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>


          </Carousel.Item>


        ))}

      </Carousel>


      
      <div className="grid">

        {Details.map((movie) => (
          <div className="card" key={movie.id}>
            {/* Movie Poster */}
            <img src={movie.img} alt={movie.name} className="img-fluid" />
            <p>{movie.name}</p>
            {/* Book Button */}
            <button
              className="btn btn-primary"
              onClick={() => handleMovieSelect(movie)}
            >
              Book Ticket
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movie;
