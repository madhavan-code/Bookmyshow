// MovieDetail.js
import React from 'react';
import {useNavigate, useLocation } from 'react-router-dom';
import'./MovieDetail.css'
const MovieDetail = () => {
  const location = useLocation();
  const {item}  = location.state; 
const navigate= useNavigate();

  const handleMovieSelect = (movie) => {
    navigate('/theaters', { state: { movie } });
};

  return (
    <div className="movie-detail">
      <h5>{item.name}</h5>
      <img src={item.img} alt={item.name}  />

      <button onClick={()=>handleMovieSelect(item)}>Book Now</button>
    </div>
  );
};

export default MovieDetail;
