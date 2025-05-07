const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

updateBigCup(); // Call the function to update the big cup when the page loads and again when the user clicks on a small cup.

smallCups.forEach((cup, index) => { 
    cup.addEventListener('click', () => highlightCups(index))
}); // Loop through each cup using their index (starting at 0) and add click event to each cup.

function highlightCups(index) {
if(smallCups[index].classList.contains('full') && !smallCups[index].nextElementSibling.classList.contains('full')) { // If the clicked cup is full and the next cup is not full, remove the full class from the clicked cup
    index--; // Decrease index to remove the full class from the clicked cup
}

    smallCups.forEach((cup, index2) => {
        if(index2 <= index) {
            cup.classList.add('full'); // Add full class to all cups up to the clicked cup
        } else {
            cup.classList.remove('full'); // Remove full class from all cups after the clicked cup
        }
    });

    updateBigCup(); // Call the function to update the big cup after the user clicks on a cup.
}

// Now to create the upateBigCup function that is called above. We need to calculate the amount of water in liters and the percentage of the big cup that is filled. This function will be called when the application is loaded and when the user clicks on a cup - hence it is placed at the top of the script and called in the highlightCups function.

function updateBigCup () {
    const fullCups = document.querySelectorAll('.cup-small.full').length; // Get the number of full cups by counting the number of small cups from the node list with the class 'full'
    const totalCups = smallCups.length; // Get the total number of small cups in the node list

    if(fullCups === 0) {
        percentage.style.visibility = 'hidden'; // Hide the percentage text if no cups are full.
        percentage.style.height = 0; // Hide the percentage text if no cups are full.
    } else {
        percentage.style.visibility = 'visible'; // Show the percentage text if at least one cup is full.
        percentage.style.height = `${fullCups / totalCups * 330}px`; // Set the height of the percentage text based on the number of full cups and total cups (e.g. height of the big cup in CSS is 330px, so 6 full cups/ 8 total cups = 0.75 * 330 = 255px).
        percentage.innerText = `${fullCups / totalCups * 100}%`; // Set the inner text of the percentage element to show the percentage of the big cup that is filled (e.g. 6 full cups/ 8 total cups = 0.75 * 100 = 75%).
    }

    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden'; // Hide the remained text if all cups are full.
        remained.style.height = 0; // Hide the remained text space if all cups are full.
    } else {
        remained.style.visibility = 'visible'; // Show the remained text if not all cups are full.
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`; // Set the inner text of the liters element to show the amount of water left in liters (e.g. 2L - (250ml * number of full cups) / 1000 = liters left).
    }
    }