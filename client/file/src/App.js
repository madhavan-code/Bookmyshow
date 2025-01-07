import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./component/Navbar/Login ";
import Footer from "./component/Home/Footer";
import Theaters from "./component/Theater/Theater";
import Seats from "./component/Seat/Seats";
import Ticket from "./component/Ticket/Ticket";
import Home from "./component/Home/Home";
import MovieDetail from "./component/Navbar/MovieDetail";
import  Event  from "./component/Events/Event";
import CustomNavbar from "./component/Navbar/Navbar";
import Register from "./component/Navbar/Register";
import Movie from "./component/movie/Movie";
import Reward from "./component/Navbar/Reward";

function App() {
  return (
    <Router>
      <CustomNavbar/>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/theaters" element={<Theaters/>}/>
        <Route path="/seats" element={<Seats/>}/>
        <Route path="/ticket" element={<Ticket/>}/>
<Route path="/movies" element={<Movie />} />
<Route path="/details" element={<MovieDetail />} />
        <Route path="/events" element={<Event/>} />
        <Route path="/rewards" element={<Reward />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
