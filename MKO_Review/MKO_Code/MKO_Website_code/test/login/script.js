// Get the login form and add an event listener for submit
const form = document.querySelector('form');
form.addEventListener('submit', login);

// Get the register button and add an event listener for click
const registerButton = document.getElementById('register-button');
registerButton.addEventListener('click', register);

// Load the logins from local storage, or initialize an empty array if none exist
let logins = JSON.parse(localStorage.getItem('logins')) || [];

// Function that handles the login
function login(event) {
  event.preventDefault();

  // Get the values of the username and password inputs
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Check if the username and password are correct
  if (logins.some(login => login.username === username && login.password === password)) {
    alert('Logged in successfully!');
    // Redirect to the home page or do whatever you need to do after the user logs in
  } else {
    alert('Invalid username or password. Please try again.');
  }
}

// Function that handles the registration
function register() {
  // Get the values of the username and password inputs
  const username = prompt('Enter a username:');
  const password = prompt('Enter a password:');

  // Check if the username is already taken
  if (logins.some(login => login.username === username)) {
    alert('Username already taken. Please choose a different username.');
    return;
  }

  // Add the new login to the array and save it to local storage
  logins.push({ username, password });
  localStorage.setItem('logins', JSON.stringify(logins));
  alert('Registration successful!');
}