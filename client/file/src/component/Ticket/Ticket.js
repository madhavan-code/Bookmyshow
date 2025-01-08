import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Ticket.css';

function Ticket() {
    const [ticketDetails, setTicketDetails] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:6060/api/bookings')
            .then((response) => setTicketDetails(response.data))
            .catch((error) => console.error('Error fetching bookings:', error));
    }, []);

    
    const handleDelete = (ticketId) => {
        if (window.confirm("Are you sure you want to delete this ticket?")) {
            axios
                .delete(`https://bookmyshow-4mei.onrender.com/delete/${ticketId}`)
                .then((response) => {
                    console.log(response.data)
                    setTicketDetails(ticketDetails.filter((ticket) => ticket.id !== ticketId));
                    alert('Ticket deleted successfully!');
                })
                .catch((error) => console.error('Error deleting the ticket:', error));
        }
    };
    
    return (
        <div className="ticket-container">
            {ticketDetails.map((detail) => (
                <div key={detail.id} className="ticket-card">
                    <h5>Ticket Confirmation</h5>
                    <img src={detail.movie_img} alt={detail.movie_name} className="movie-image" />
                    <p>{detail.movie_name}</p>
                    <p> {detail.theater_name}</p>
                    <p><strong>Date:</strong> {detail.date}</p>
                    <p><strong>Time:</strong> {detail.time}</p>
                    <p><strong>Seats:</strong> {Array.isArray(detail.seats) ? detail.seats.join(', ') : detail.seats}</p>
                    <p><strong>Total Amount:</strong> ₹{detail.amount}</p>
                    
                    <button onClick={() => handleDelete(detail.id)} className="delete-button">Delete</button>
                </div>
            ))}
        </div>
    );
}

export default Ticket;
