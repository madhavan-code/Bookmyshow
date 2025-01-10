import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./seats.css"; 
import { BsChevronLeft } from "react-icons/bs";
function Seats() {
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { movie, theater, date, time } = location.state;
    const seatPrice = 120;

    const soldSeats = ["A-1", "B-5", "C-7"]; // Example of sold seats
    const secondClassRows = ["M", "N"]; // Rows for second class seats

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleSeatClick = (seat) => {
        if (soldSeats.includes(seat)) {
            alert("This seat is already sold.");
            return;
        }
        setSelectedSeats((prev) =>
            prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
        );
    };

    const handlePayment = () => {
        if (!isLoggedIn) {
            alert("Please log in to proceed with payment.");
            navigate("/register");
            return;
        }
        const backendURL = process.env.REACT_APP_BACKEND_URL;

        const totalAmount = selectedSeats.length * seatPrice;
        const ticketDetails = {  movie: { name: movie.name, img: movie.img },  theater, date, time, seats: selectedSeats, amount: totalAmount };
        axios
            .post(`${backendURL}/api/bookings`, ticketDetails, {
                headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` },
            })
            .then(() => {
                alert(
                    `Payment successful! You have been charged ₹${totalAmount}. Your ticket has been booked.`
                );
                navigate("/ticket", { state: { ticketDetails } });
            })
            .catch((error) => console.error("Error during payment:", error));
    };

    const rows = "ABCDEFGHIJKL".split(""); // First class rows
    const columns = Array.from({ length: 12 }, (_, i) => i + 1); // Column numbers

    const renderSeats = (rowList, isSecondClass = false) => (
        <>
            {rowList.map((row) => (
            
                <div key={row} className="row">
                    <span className="row-label">{row}</span>
                  
                    {columns.map((col) => {
                        const seat = `${row}-${col}`;
                        const isSold = soldSeats.includes(seat);
                        const isSelected = selectedSeats.includes(seat);

                        return (
                            <button
                                key={seat}
                                className={`seat ${
                                    isSold ? "sold" : isSelected ? "selected" : "available"
                                } ${isSecondClass ? "second-class" : ""}`}
                                onClick={() => handleSeatClick(seat)}
                                disabled={isSold}
                            >
                                {col}
                            </button>
                        );
                    })}
                </div>
                
                
            ))}
        </>
    );

    return (
       <>
            <div className="hd">
            <span>
            <button className="back-button" onClick={() => navigate(-1)}><BsChevronLeft /></button>
           
                <strong> {movie.name} </strong>
                </span>
            <div>
           
            <strong>{theater.name}</strong> 
            
            <div>
                <strong> {date} </strong>
            
            
                <strong>{time} </strong> 
          </div>
            </div>
            </div>
             <div className="seat-selection">
            <div className="legend">
                <div className="legend-item">
                    <div className="legend-color available"></div>
                    <span>Available</span>
                </div>
                <div className="legend-item">
                    <div className="legend-color selected"></div>
                    <span>Selected</span>
                </div>
                <div className="legend-item">
                    <div className="legend-color sold"></div>
                    <span>Sold</span>
                </div>
            </div>
           
            <div className="seat-container-wrapper">
            <h5 className="left">First Class</h5>
               {renderSeats(rows)}
                <h5 className="left">Second Class</h5>
                {renderSeats(secondClassRows, true)}
            </div>
            
            <div className="total-amount">Total Amount: ₹{selectedSeats.length * seatPrice}</div>
           <center> <button
                className="pay-button"
                onClick={handlePayment}
                disabled={selectedSeats.length === 0}
            >
                Pay
            </button></center>
        </div>
        </>
    );
}

export default Seats;
