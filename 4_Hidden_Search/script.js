const search = document.querySelector('.search');
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    search.classList.toggle('active'); //The active class is defined in the CSS file, which makes the search bar visible when the button is clicked.
    input.focus(); // Focus on the input field when the search bar is active, displays the cursor or opens the keyboard on mobile devices
})