const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.focus();

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value); // Call createTags function with the current value of the textarea

    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''; // Clear the textarea after a short delay
        }, 10)

        randomSelect(); // Call randomSelect function when Enter key is pressed
    }
})

function createTags(input) {
    const tags = input.split(',') // Split the input by commas
    .filter(tag => tag.trim() !== '') // Filter out empty tags
    .map(tag => tag.trim()); // Trim whitespace from each tag

    tagsEl.innerHTML = '' // Clear the existing tags

    tags.forEach(tag => {
        const tagEl = document.createElement('span'); // Create a new span element for each tag
        tagEl.classList.add('tag'); // Add the 'tag' class to the new span element
        tagEl.innerText = tag; // Set the text of the span to the tag
        tagsEl.appendChild(tagEl); // Append the new span element to the tags container
        
    });
}

function randomSelect() {
 const times = 30; // Number of times to select a random tag

 const interval = setInterval (() => {
    const randomTag = pickRandomTag()
    highlightTag(randomTag); // Highlight the random tag

    setTimeout(() => {
        unhighlightTag(randomTag); // Unhighlight the random tag
    }, 100);

    setTimeout(() => {
        clearInterval(interval); // Clear the interval after the specified number of times
        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100)
    }, 100 * times); // Set a timeout to clear the interval after the specified number of times
})}

 function pickRandomTag () {
    const tags = document.querySelectorAll('.tag'); // Select all tags
    return tags[Math.floor(Math.random() * tags.length)]; // Return a random tag
 }

 function highlightTag(tag) {
    tag.classList.add('highlight'); // Add the 'highlight' class to the tag
 }

 function unhighlightTag(tag) {
    tag.classList.remove('highlight'); // Remove the 'highlight' class from the tag
 }
