const counterS = document.querySelectorAll('.counter');

counterS.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = function() {
        const target = +counter.getAttribute('data-target'); // Uses the '+' operator to convert the string to a number

        const c = +counter.innerText;

        const increment = target / 200; // Divides the data-target (defined in HTML) by 200 to get the increment value, this also sets the speed of the counter (the higher the number, the slower the counter will be). It means that despite the different data-target values, the counter will always take the same amount of time to reach the target.

        if(c < target) { // If the current counter value is less than the target
            counter.innerText = `${Math.ceil(c + increment)}`; // Updates the counter value by adding the increment and rounding it up with Math.ceil so that is doesn't show decimal values.

            // But, we don't want it to stop after the first increment, so we call the function again using requestAnimationFrame
            requestAnimationFrame(updateCounter); // This will call the updateCounter function again, creating a loop until the target is reached.

            //OR..., we can add a setTimeout function to call the updateCounter function again after a certain amount of time.
            // setTimeout(updateCounter, 1); } else { counter.innerText = target; } // This will call the updateCounter function again after 1 millisecond, creating a loop until the target is reached.

        }
    
    }

    updateCounter();

});