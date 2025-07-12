function handleSubmit(event) {
  event.preventDefault();

  // Show success message
  alert("Thank you for contacting us!");

  // Clear the form after alert
  event.target.reset();
}