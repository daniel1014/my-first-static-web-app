const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Set up body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files from public directory
app.use(express.static('public'));

// Handle login form submission
app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // Perform login validation, e.g., by checking against a database or other authentication mechanism
  // For demonstration purposes, we'll use hardcoded authorized username and password
  if (email === 'Daniel.Wong3@aecom.com' && password === 'aecom') {
    res.json({ success: true, message: 'Login successful!' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid email or password.' });
  }
});

// Start the server
const port = 3000; // You can change this to any port number you prefer
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
