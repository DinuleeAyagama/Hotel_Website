// JavaScript for handling the "Book Now" button click
document.getElementById('book-now-button').addEventListener('click', function () {
  const checkIn = document.getElementById('check-in').value;
  const checkOut = document.getElementById('check-out').value;
  const rooms = document.getElementById('rooms').value;
  const persons = document.getElementById('persons').value;

  // Basic validation
  if (!checkIn || !checkOut || rooms === "Rooms" || persons === "Persons") {
    alert("Please fill out all fields before booking.");
    return;
  }

  // Display confirmation message
  const confirmationMessage = document.getElementById('confirmation-message');
  confirmationMessage.style.display = 'block';

  // Clear form fields
  document.getElementById('check-in').value = '';
  document.getElementById('check-out').value = '';
  document.getElementById('rooms').value = 'Rooms';
  document.getElementById('persons').value = 'Persons';
});

// Optional: Add a confirmation message when the location button is clicked
document.querySelector('nav a[href*="maps"]').addEventListener('click', function (e) {
  e.preventDefault(); // Prevent the default link behavior
  const confirmLocation = confirm("Do you want to view the hotel's location on Google Maps?");
  if (confirmLocation) {
    window.open(this.href, '_blank'); // Open the Google Maps link in a new tab
  }
});