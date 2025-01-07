import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Data } from '../Home/Data'; 
import './Theater.css';
import { BsChevronLeft } from "react-icons/bs";
function Theaters() {
    const navigate = useNavigate();
    const location = useLocation();
    const movie = location.state.movie;

    const [selectedTheater, setSelectedTheater] = useState(null);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [filteredDates, setFilteredDates] = useState([]);

    useEffect(() => {
        filterDates();
    }, []);
    const filterDates = () => {
        const availableDates = [];
        const today = new Date();
    
        for (let i = 0; i < 8; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);
            availableDates.push({
                fullDate: date.toISOString().split('T')[0], 
                month: date.toLocaleString('default', { month: 'short' }),
                date: date.getDate(),
                day: date.toLocaleString('default', { weekday: 'short' }),
            });
        }
    
        setFilteredDates(availableDates);
    };
    
   
    const handleNext = () => {
        if (selectedTheater && selectedDate && selectedTime) {
            navigate('/seats', {
                state: { movie, theater: selectedTheater, date: selectedDate, time: selectedTime },
            });
        } else {
            alert('Please select all fields (Theater, Date, Time)');
        }
    };

    const handleTheaterClick = (theater) => {
        setSelectedTheater(theater);
    };

    const handleTimeClick = (time) => {
        setSelectedTime(time);
    };

    return (
        <div className="theaters-container">
            <div className="header">
                <button className="back-button" onClick={() => navigate(-1)}><BsChevronLeft /></button>
                <div className="movie-title">{movie.name}</div>
            </div>

            
            <div className="date-selector">
                {filteredDates.map((item) => (
                    <div
                        key={item.fullDate}
                        className={`date-button ${selectedDate === item.fullDate ? 'selected' : ''}`}
                        onClick={() => setSelectedDate(item.fullDate)}
                    >
                        <span className="month">{item.month}</span>
                        <span className="date">{item.date}</span>
                        <span className="day">{item.day}</span>
                    </div>
                ))}
            </div>

        
            <div className="theater-list">
                {Data.theaters.map((theater) => (
                    <div
                        key={theater.id}
                        className={`theater-card ${selectedTheater === theater ? 'selected' : ''}`}
                        onClick={() => handleTheaterClick(theater)}
                    >
                        <div className="theater-name">{theater.name}<div>{theater.location} </div></div>
                        <div ></div>
                        <div className="time-slots" onClick={handleNext}>
                            {theater.times.map((time) => (
                                <button
                                    key={time}
                                    className={`time-button ${selectedTime === time ? 'selected' : ''}`}
                                    onClick={() => handleTimeClick(time)}
                                >
                                    {time}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

           
        </div>
    );
}

export default Theaters;
