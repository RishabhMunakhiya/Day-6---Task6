document.querySelector(".contact-form").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent default form submission

  // Clear previous error messages
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";
  document.getElementById("successMessage").textContent = "";

  // Get input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  let isValid = true;

  // Name validation
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    isValid = false;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    isValid = false;
  }

  // Message validation
  if (message === "") {
    document.getElementById("messageError").textContent = "Message is required.";
    isValid = false;
  }

  // If all valid, show success message
  if (isValid) {
    document.getElementById("successMessage").textContent = "Form submitted successfully!";
    e.target.reset(); // reset the form
  }
});

// Optional: Add focus on the first invalid field
document.querySelectorAll(".contact-form input, .contact-form textarea").forEach(input => {
  input.addEventListener("input", function () {
    if (this.nextElementSibling && this.nextElementSibling.classList.contains("error")) {
      this.nextElementSibling.textContent = ""; // clear error message on input
    }
  });
}  );