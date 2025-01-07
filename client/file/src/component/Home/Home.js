import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Data } from './Data';
import { useState } from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Carousel } from "react-bootstrap"
;

const Home=()=> {
    const navigate = useNavigate();

    
    const handleMovieSelect = (movie) => {
        navigate('/theaters', { state: { movie } });
    };

    
    const recommendedMovies = Data.movies.slice(0, 5); 
    const comedyShows = Data.movies.slice(5, 9); 
    const musicShows = Data.movies.slice(9, 14);
    const popular = Data.movies.slice(14, 18);
    const outDoor = Data.movies.slice(18, 22);
    const [activeIndex, setActiveIndex] = useState(0); 

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex); 
  };

    return (
        <div>
            <div className="movies-container">
            <div className='pic'>
           <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
            <Carousel.Item>
            <img src="./images/gl2.png" alt="Slide 1" className="carousel-img" />

            </Carousel.Item>
            <Carousel.Item>
            <img src="./images/avg.jpg" alt="Slide 2" className="carousel-img" />

            </Carousel.Item>
           </Carousel>
           </div>
  <h3>Recommended Movies</h3>
                <div className="movies-grid">
                    {recommendedMovies.map((movie) => (
                        <div className="movie-card" key={movie.id}>
                            <img src={movie.img} alt={movie.name} />
                            <p className="name">{movie.name}</p>
                            <button onClick={() => handleMovieSelect(movie)}>Book</button>
                        </div>
                    ))}
                </div>

            
                <h3>Laughter Therapy</h3>
                <div className="movies-grid">
                    {comedyShows.map((movie) => (
                        <div className="movie-card" key={movie.id}>
                            <img src={movie.img} alt={movie.name} />
                            <p className="name">{movie.name}</p>
                            <button onClick={() => handleMovieSelect(movie)}>Book</button>
                        </div>
                    ))}
                </div>

        
                <h3>Your Music Studio</h3>
                <div className="movies-grid">
                    {musicShows.map((movie) => (
                        <div className="movie-card" key={movie.id}>
                            <img src={movie.img} alt={movie.name} />
                            <p className="name">{movie.name}</p>
                            <button onClick={() => handleMovieSelect(movie)}>Book</button>
                        </div>
                    ))}
                </div>

        
                <h3>Popular Events</h3>
                <div className="movies-grid">
                    {popular.map((movie) => (
                        <div className="movie-card" key={movie.id}>
                            <img src={movie.img} alt={movie.name} />
                            <p className="name">{movie.name}</p>
                            <button onClick={() => handleMovieSelect(movie)}>Book</button>
                        </div>
                    ))}
                </div>

                
                <h3>Outdoor Events</h3>
                <div className="movies-grid">
                    {outDoor.map((movie) => (
                        <div className="movie-card" key={movie.id}>
                            <img src={movie.img} alt={movie.name} />
                            <p className="name">{movie.name}</p>
                            <button onClick={() => handleMovieSelect(movie)}>Book</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
