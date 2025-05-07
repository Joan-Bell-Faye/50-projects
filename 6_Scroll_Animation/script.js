const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes(); // Call it once to check boxes on page load

// Now define the checkBoxes funtion by defining the scroll trigger point on the screen
function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4; // This is the point where the boxes will be triggered to show up. It's less than the total viewport height as it needs to scroll into view before the user has reached the bottom of the page.

    boxes.forEach(box => { //Takes the boxes that we created a node list from earlier in our variable and loops through them.
        const boxTop = box.getBoundingClientRect().top; // This gets the top position of the box relative to the viewport.
        if (boxTop < triggerBottom) { 
            box.classList.add('show');  // If the box is above the trigger point, add the 'show' class to it.
        } else {
            box.classList.remove('show'); // If the box is below the trigger point, remove the 'show' class from it.
        }
})
}