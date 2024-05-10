document.getElementById("loginForm").addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Perform validation here (e.g., check username and password against database)

  if (username === "Vishal" && password === "5678") {
    showMessage("Login successful!");
  } else {
    showMessage("Incorrect username or password. Please try again.");
  }
}

function showMessage(message) {
  const messageDiv = document.getElementById("message");
  messageDiv.innerHTML = message;
}

function togglePasswordVisibility() {
  const passwordField = document.getElementById("password");
  const eyeIcon = document.getElementById("eye");

  if (passwordField.type === "password") {
    passwordField.type = "text";
    eyeIcon.src = "eye-open.png";
  } else {
    passwordField.type = "password";
    eyeIcon.src = "eye-closed.png";
  }
}