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
    <div className='h'>
    <div className="movie-detail">
      
      <img src={item.img} alt={item.name}  />
      <div>{item.name}</div>
      <button onClick={()=>handleMovieSelect(item)}>Book Ticket</button>
    </div>
    </div>
  );
};

export default MovieDetail;
