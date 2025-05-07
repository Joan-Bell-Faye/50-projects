const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

left.addEventListener('mouseenter', () => { 
    container.classList.add('hover-left');
}); // Adds the expanding effect on the left side when hovered

left.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left');
}); // Removes the expanding effect on the left side when not hovered

right.addEventListener('mouseenter', () => {
    container.classList.add('hover-right');
}); // Adds the expanding effect on the right side when hovered

right.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right');
}); // Removes the expanding effect on the right side when not hovered