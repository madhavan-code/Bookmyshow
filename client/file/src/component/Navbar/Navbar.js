import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Offcanvas } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Data } from "../Home/Data";
import './Navbar.css'
import { BsFillPersonFill,BsFillPersonPlusFill,BsSearch } from "react-icons/bs";

const CustomNavbar=()=> {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("authToken"));
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query.trim() === "") {
      setSearchSuggestions([]);
      return;
    }

    // Filter movies and events based on the search query
    const moviesSuggestions = Data.movies.filter((movie) =>
      movie.name.toLowerCase().includes(query)
    );

    setSearchSuggestions([...moviesSuggestions]);
  };

  const handleSuggestionClick = (item) => {
    setSearchQuery(item.name);
    setSearchSuggestions([]);
    navigate("/details", { state: { item } }); 
  };

  return (
    <>
    <div>
    <Navbar  className="top" expand="lg">
      <Navbar.Brand as={Link} to="/">
        BookMyShow
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="offcanvasNavbar" />
      <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
           Home
            </Nav.Link>
            <Nav.Link as={Link} to="/movies">
              Movies
            </Nav.Link>
            <Nav.Link as={Link} to="/events">
              Events
            </Nav.Link>
            {isLoggedIn ? (
              <NavDropdown
                title={
                  
                  <BsFillPersonFill className="i"/>}
                  >
                
              
                <NavDropdown.Item as={Link} to="/ticket">
                  Your Order
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/rewards">
                  Rewards
                </NavDropdown.Item>
                <NavDropdown.Item >
                  Notifications
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link as={Link} to="/register">
                <BsFillPersonPlusFill />Login
              </Nav.Link>
            )}
            {/* Search Bar */}
            <div className="box" >
            <BsSearch className="box-icon"/>
              <input
                type="search"
                placeholder="search"
                className="box-input"
                style={{height:"30px",margin:"5px"}}
                value={searchQuery}
                onChange={handleSearchChange}
                
              />
              </div>
              {searchSuggestions.length > 0 && (
                <div
                  className="dropdown-menu show search-suggestions"
                 
                >
                  {searchSuggestions.map((item, index) => (
                    <button
                      key={index}
                      className="dropdown-item"
                      onClick={() => handleSuggestionClick(item)}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              )}
            

            
            
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Navbar>
    </div>
    </>
  );
}

export default CustomNavbar;
