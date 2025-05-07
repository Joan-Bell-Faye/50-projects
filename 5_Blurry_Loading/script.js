const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

let loadingInterval = setInterval(blurring, 30); //blurring in 30ms intervals

function blurring() {
    load++;

    
        //This uses a number(num) as a scale: in_min (0%) & in_max (100%) are the load text. Out_min (1) & out_max (0) are the opacity of the text.
    //So when load is 0, the opacity is 1 (fully visible) and when load is 100, the opacity is 0 (invisible)
    const scale = (num, in_min, in_max, out_min, out_max) => {
        return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
    }

    if(load > 99) {
        clearInterval(loadingInterval); //stop the interval when load is 100%
    }

    //now to change the loading text
    loadText.innerHTML = `${load}%`

    //next map the opacity of the text to the load variable (opacity goes from 1 - fully visible to 0 - invisible, or vice versa)
    loadText.style.opacity = scale(load, 0, 100, 1, 0); //load is the number we are scaling, 0 and 100 are the in_min and in_max (the load text), 1 and 0 are the out_min and out_max (opacity of the text)

    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
    //load is the number we are scaling, 0 and 100 are the in_min and in_max (the load text), 30 and 0 are the out_min and out_max (blur of the background image). So when load is 0, the blur is 30px (fully blurred) and when load is 100, the blur is 0px (not blurred)  

    console.log(load);
    }


   
 


