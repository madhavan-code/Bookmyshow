const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express()


app.use(cors());
app.use(express.json());




const db = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "Madhav@54",
    database: process.env.DB_NAME || "booking",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL database.");
});
// Use JWT for token generation

app.post('/register', async (req, res) => {
    const { email, password } = req.body;

    try {
      const checkQuery = 'SELECT * FROM users WHERE email = ?';
    db.query(checkQuery, [email], async (err, existingUsers) => {
      if (err) {
        console.error('Error checking existing user:', err);
        return res.status(500).json({ success: false, message: 'Server error' });
      }

      if (existingUsers.length > 0) {
        return res.status(409).json({ success: false, message: 'User already exists' });
      }
       
        const query = 'INSERT INTO users (email, password) VALUES (?, ?)';
        db.query(query, [email, password], (err, results) => {
            if (err) {
                console.error('Error registering user:', err);
                return res.status(500).json({ success: false, message: 'Registration failed' });
            }

            // Generate a token for the user
           

            res.status(201).json({
                success: true,
                message: 'User registered successfully',
                
            });
          });
        });
    } catch (err) {
        console.error('Error hashing password:', err);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});



app.post("/login", (req, res) => {
    const { email, password } = req.body;
    const query = "SELECT * FROM users WHERE email = ? AND password = ? ";
    db.query(query, [email, password], (err, results) => {
      if (err) throw err;
      if (results.length > 0) {
        res.json({ success: true, message: "Login successful!" });
      } else {
        res.json({ success: false, message: "Invalid username or password" });
      }
    });
  
});

app.get("/api/bookings", (req, res) => {
    const query = 'SELECT * FROM bookings';
    db.query(query, (err, results) => {
      if (err) throw err;
      results.forEach((result) => {
        result.seats = result.seats.split(', ');
        result.date = new Date(result.date).toLocaleDateString('en-GB'); 
      });
      res.json(results);
    });
});



app.post('/api/bookings', (req, res) => {
  const { movie, theater, date, time, seats, amount } = req.body;

  const seatsString = seats.join(', ');
  const sql = 'INSERT INTO bookings (movie_name, theater_name, date, time, seats, amount, movie_img) VALUES (?, ?, ?, ?, ?, ?, ?)';
  const values = [movie.name, theater.name, date, time, seatsString, amount, movie.img];

  db.query(sql, values, (err, result) => {
      if (err) {
          console.error('Error inserting booking:', err);
          return res.status(500).send('Error saving booking');
      }
      res.status(200).json({ message: 'Booking saved successfully', result });
  });
});


app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM bookings WHERE id = ?";

  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Error deleting booking:', err);
      return res.status(500).send('Error deleting booking');
    }

    if (result.affectedRows > 0) {
      res.status(200).send({ message: 'Booking deleted successfully' });
    } else {
      res.status(404).send({ message: 'Booking not found' });
    }
  });
});

app.listen(6060, () => {
    console.log("Server is running on port 6060");
});
