document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // Perform login validation, e.g., by sending the form data to a server-side endpoint using AJAX
  
    // Example validation - check if email and password are not empty
    if (email === '' || password === '') {
      document.getElementById('errorMessage').textContent = 'Email and password are required.';
    } else {
      document.getElementById('errorMessage').textContent = '';
      // Perform successful login action, e.g., redirect to dashboard page
      window.location.href = '/dashboard';
    }
  });
  