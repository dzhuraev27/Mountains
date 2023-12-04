






document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form data
  const email = document.querySelector('[name="email"]').value;
  const password = document.querySelector('[name="password"]').value;

  // Add your logic to handle the login functionality here
  console.log('Login submitted with data:', { email, password });
});

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5iVhxrgr2fjmcRhYJXDy5UMw3_EqXK6I",
  authDomain: "project1-90f73.firebaseapp.com",
  databaseURL: "https://project1-90f73-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "project1-90f73",
  storageBucket: "project1-90f73.appspot.com",
  messagingSenderId: "469161293784",
  appId: "1:469161293784:web:204b685195725683e224ad",
  measurementId: "G-2J5GRG2843"
};
