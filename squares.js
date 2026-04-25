let squareArea;
let topZ = 0;

window.onload = function() {
    squareArea = document.querySelector("#squarearea");

    document.querySelector("#addsquare").onclick = addSquare;
    document.querySelector("#changecolors").onclick = changeColors;

//let squareArea = document.querySelector("#squarearea");
//let squareArea = document.getElementById("squarearea");

let squareCount = parseInt(Math.random()*21)+30; //30-50

for (let i =0;i<squareCount;i++){
    addSquare();
}
};

function randomColor() {
    let red = parseInt(Math.random() * 256);
    let green = parseInt(Math.random() * 256);
    let blue = parseInt(Math.random() * 256);

    return "rgb(" + red + "," + green + "," + blue + ")";
}
function addSquare () {
    let square = document.createElement("div");
    square.className = "square";

    let size = parseInt(Math.random() * 11 +45);

    square.style.width = size + "px";
    square.style.height = size + "px";
    square.style.backgroundColor = getRandomColor();

    square.style.left = parseInt(Math.random() * (700 - size))+"px";
    square.style.top = parseInt(Math.random()* (300 - size))+"px";
    
    squareArea.appendChild(square);
}

    //I can put a onclick and a function(this)
    //put it on the screen
   // squareArea.append(square);
//}

//function getRandomColor(){
    //Make a Color string?
    //let letters = "0123456789ABCDEF";
    //let color = "#";
   // for (let i = 0;i <6;i++){
   //     color+=letters.charAt(parseInt(Math.random()*letters.length));
   // }
    //return that string
   // return color;
//}
//Make a function to add 1 square
//Make sure that i set that as the onclick for thebutton

//Make a Function that changes all the colors of all the squares
//Make sure the button calls it
//function changeColors(){
    //Make an array
   // let allSquares = document.querySelectorAll(".square");
    //For of loop or just do a regular for loop with index
    //Change the color
//}