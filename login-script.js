document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form data
  const email = document.querySelector('[name="email"]').value;
  const password = document.querySelector('[name="password"]').value;

  // Add your logic to handle the login functionality here
  console.log('Login submitted with data:', { email, password });
});
