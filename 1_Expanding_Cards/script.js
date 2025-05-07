const panels = document.querySelectorAll('.panel')
// Use querySelectorAll to select all elements with the class 'panel'. This creates a NodeList of all the panel elements in the document that can be looped through like an array.

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()    // We create the function 'removeActiveClasses' (see the function below) because we want to remove the 'active' class from all other panels when one is clicked...
       panel.classList.add('active') // Adds the 'active' class to the clicked panel only, which triggers the CSS transition defined in the CSS file.
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
