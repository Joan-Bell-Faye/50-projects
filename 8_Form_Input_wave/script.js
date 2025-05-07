const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
    label.innerHTML = label.innerText
    .split('') // Split the text into an array of characters
    .map((letter, index) => `<span style = "transition-delay:${index * 50}ms">${letter}</span>`) // Wrap each character in a span
    .join('');// Join the array back into a string
})