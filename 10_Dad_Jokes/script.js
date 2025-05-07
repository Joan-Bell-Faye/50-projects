const jokeElement = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke); // Add an event listener to the button to call the function when clicked

generateJoke(); // Call the function to generate a joke on page load



// ALTERNATIVE METHOD USING ASYNC/AWAIT
async function generateJoke() {  // use async function to handle 'asynchronous code' (doesn't need to wait for main thread to finish)
    const config = {
        headers: { 
        'Accept': 'application/json'
      }  
    };
       
    const response = await fetch('https://icanhazdadjoke.com', config)
    const data = await response.json(); // Convert the response to JSON
    jokeElement.innerHTML = data.joke;
}




/* USING .THEN() METHOD
// function generateJoke() { 
    const config = {
        headers: { 
        'Accept': 'application/json'
      }  // Create a variable to set the headers to accept JSON response
    };
       
    // The API URL is 'https://icanhazdadjoke.com' and we are using the fetch method to get the joke
    fetch('https://icanhazdadjoke.com', config)
    .then((res) => res.json()) // Convert the response to JSON
    .then((data) => {
        jokeElement.innerHTML = data.joke; // Set the inner HTML of the joke element to the joke from the API
    });
}
*/

