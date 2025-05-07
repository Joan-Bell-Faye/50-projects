const toggleBtn = document.querySelectorAll('.faq-toggle'); //Bring in the toggle buttons from HTML to create a node list

//console.log(toggleBtn); //Check if the buttons are being selected correctly

toggleBtn.forEach((btn) => { //For each button in the node list, add an event listener for a click
    btn.addEventListener('click', () => { //When the button is clicked
        btn.parentNode.classList.toggle('active'); //Toggle the active class on the parent node of the button
    });
}); //Close the forEach loop
//The active class is used to show the answer to the FAQ question. The CSS will handle the display of the answer based on the presence of this class.



