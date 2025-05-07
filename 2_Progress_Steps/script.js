const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1; // starting from 1

// Add events listener to 'next' button when clicked then run a function
next.addEventListener('click', () => {
    currentActive ++; // increment currentActive by 1

   //add condition so that it doesn't go beyond the max number of circles
   if (currentActive > circles.length) {
    currentActive = circles.length;
   } // if you run this in the console, it will stop at 4

    update(); // call the update function to update the progress bar and circles
})

// Add events listener to 'prev' button when clicked then run a function
prev.addEventListener('click', () => {
    currentActive --; // decrease currentActive by 1

   //add condition so that it doesn't go beyond the min number of circles
   if (currentActive < 1) {
    currentActive = 1;
   } // if you run this in the console, it will stop at 1 and won't go into negative numbers

   update(); // call the update function to update the progress bar and circles
})

function update() { // remember, circles are a node list, like an array that can be looped through and the currentActive starting index is set to 1
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active') 
            } else {
                circle.classList.remove('active') 
            }
    })
    // At this point having looped from 1 to 4, the active class has been added to all of the circles and they are all highlighted in blue.

    const actives = document.querySelectorAll('.active'); // get all the circles with the active class

    progress.style.width = (actives.length -1) / (circles.length -1) * 100 + '%'; // pulls .progress style and targets the width property from css

    if(currentActive === 1) {
        prev.disabled = true; // disable the previous button when currentActive is 1
    } else if (currentActive === circles.length) {
        next.disabled = true; // disable the next button when currentActive is equal to the number of circles
    } else {
        prev.disabled = false; // enable the previous button when currentActive is not 1
        next.disabled = false; // enable the next button when currentActive is not equal to the number of circles
    }


}