document.getElementById('signup-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form data
  const username = document.querySelector('[name="username"]').value;
  const user_id = document.querySelector('[name="user_id"]').value;
  const password = document.querySelector('[name="password"]').value;
  const email = document.querySelector('[name="email"]').value;

  // Add your logic to handle the sign-up functionality here
  console.log('Sign Up submitted with data:', { username, user_id, password, email });
});
