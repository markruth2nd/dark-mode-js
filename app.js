/* I have copied the below from the original moon SVG I created in Figma, removed the rest of the SVG code from the HTML file and created the below Const variable ready for it's function */
const moonPath = "M17 27.5C17 42.6878 27.5 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.5 0 17 12.3122 17 27.5Z";

/* I have also copied the below from the SUN SVG as we will need to be able to revert back to light mode when required */
const sunPath = "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z";

const darkMode = document.querySelector('#darkMode');

let toggle = false;

/* The below will be the event listener which will listen out for the user to click the SVG to then action a function to switch between dark and light mode. I will need to use the anime.js file for this */
darkMode.addEventListener('click', () => {

    const timeline = anime.timeline({
        /* Below I will set up the timeline for the animations */
        duration : 750, /* This will ensure my animations last 750 milliseconds */
        easing : "easeOutExpo"
    });

    /* Below is where I will add the animations to the timeline */
    timeline.add({
        targets: ".sun", /* This is grabing my class of sun like queryselector works */

        /* Below I will create an array of objects. All these objects are my data points  */
        d: [
            {value: moonPath},
        ]
    })
});