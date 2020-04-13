// define the canvas
let canvas = document.getElementById("my-canvas")
// console.log(canvas)

// adjust the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// capture the drawing context in a variable
const c = canvas.getContext('2d')

// draw a circle
c.beginPath();
c.strokeStyle = "limegreen";
c.arc(800, 400, 50, 0, 2 * Math.PI);
c.stroke();

// TODO follow the instructions in the Canvas Pt. 2 Pre-Lesson to see how to build this project
const animate = () => {

}

// animate()












// Code to draw new circles on a click of the window
// *************************************************

// window.onclick = () => {
//   for(let i=0; i < 50; i++ ) {
//     const x = Math.random() * (window.innerWidth - 100)
//     const y = Math.random() * (window.innerHeight - 100)
//     // the first value will be null to accommodate for no 0 number being drawn
//     const colors = [null, "#8C0C3C", "#1B2968", "#4B9C2B", "#A4C89C", "#F8605F", "#F8B493", "#32B9B2", "#F85532", "#C2C8E4", "#357153", "#A061D4", "#404462"]
//     const randomIndex = Math.floor(Math.random() * (13 - 1)) + 1;

//     // Draw Circle
//     c.beginPath();
//     // replace "black" with the random color selected from the list
//     c.strokeStyle = colors[randomIndex];
//     c.arc(x, y, 50, 0, 2 * Math.PI);
//     c.stroke();
//   }
// }