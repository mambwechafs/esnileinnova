// Get the form element
const form = document.querySelector('.php-email-form');

// Get the loading and message elements
const loading = form.querySelector('.loading');
const sentMessage = form.querySelector('.sent-message');
const errorMessage = form.querySelector('.error-message');

// Add a submit event listener to the form
form.addEventListener('submit', async (event) => {
  // Prevent the default form submission
  event.preventDefault();
  
  // Show the loading message
  loading.style.display = 'block';
  
  // Send a POST request to the server
  try {
    const response = await fetch(event.target.action, {
      method: 'POST',
      body: new FormData(event.target),
    });

    // Check if the request was successful
    if (response.ok) {
      // Hide the loading message and show the success message
      loading.style.display = 'none';
      sentMessage.style.display = 'block';
      
      // Reset the form
      form.reset();
    } else {
      // Hide the loading message and show the error message
      loading.style.display = 'none';
      errorMessage.style.display = 'block';
    }
  } catch (error) {
    // Hide the loading message and show the error message
    loading.style.display = 'none';
    errorMessage.style.display = 'block';
  }
});