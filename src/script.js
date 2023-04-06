// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of Express app
const app = express();

// Set up middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define authorized username and password
const authorizedUsername = 'Daniel.Wong3@aecom.com';
const authorizedPassword = 'aecom';

// Serve static files (HTML, CSS)
app.use(express.static('public'));

// Define login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Perform server-side validation
  if (!username || !password) {
    return res.status(400).json({ error: 'Both username and password are required' });
  }

  if (username !== authorizedUsername || password !== authorizedPassword) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }

  // Authentication successful
  res.json({ message: 'Login successful' });
});

// Start the server
const port = 3000; // replace with your desired port number
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
