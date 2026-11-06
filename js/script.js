document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("registrationForm");
  const feedback = document.getElementById("formFeedback");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("fullName").value;
    const eventName = document.getElementById("eventChoice").value;
    
    if (name.trim() === "" || eventName === "") {
      feedback.textContent = "Please complete all required fields to register.";
      feedback.style.color = "#e74c3c";
    } else {
      feedback.textContent = "Thank you, " + name + "! Your registration for " + eventName + " is successful.";
      feedback.style.color = "#27ae60";
      form.reset();
    }
  });
});
