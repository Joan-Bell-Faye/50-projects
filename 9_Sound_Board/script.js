const sounds = ['kiss', 'traffic', 'moo', 'water', 'soda', 'choir','birds'];

sounds.forEach(sound => { // Loop through each sound
    const btn = document.createElement('button'); // Create a button element
    btn.classList.add('btn') // Add a class to the button for styling
    btn.innerText = sound; // Set the button text to the sound name from the array

    btn.addEventListener('click', () => {
        // Remove the 'playing' class from all buttons so they aren't playing at the same time - see the function stopSongs below.
        stopSongs()

        document.getElementById(sound).play()
    })
    document.getElementById('buttons').appendChild(btn); // Append the button to the buttons container

   

} )

function stopSongs() { // Function to stop all sounds/songs
    sounds.forEach(sound => {
        const song = document.getElementById(sound); // Get the audio element by sound name
        song.pause(); // Pause the sound
        song.currentTime = 0; // Reset the sound to the beginning (0 seconds)
    })
}