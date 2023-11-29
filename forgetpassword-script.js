document.getElementById('forget-password-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get email
  const email = document.querySelector('[name="email"]').value;

  // Add your logic to handle the forget password functionality here
  console.log('Forget Password submitted for email:', email);
});
