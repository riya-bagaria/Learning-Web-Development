var numberSquares=6;
var colors = generateRandomColors(numberSquares);
var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
//var easyBtn = document.querySelector("#easyBtn");
//var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");

for(var i=0;i<modeButtons.length;i++){
    modeButtons[i].addEventListener("click",function(){
modeButtons[0].classList.remove("selected");
modeButtons[1].classList.remove("selected");
this.classList.add("selected");
this.textContent === "Easy" ? numberSquares=3: numberSquares=6;
/*if(this.textContent==="Easy"){
    numberSquares=3;
}
else{
    numberSquares=6;
}*/
reset();
//figure out how many square to show
//pick new colors
//pick a new pickedColor
//update page to reflect changes
    });
}

function reset(){
    colors = generateRandomColors(numberSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent="New Colors";
    messageDisplay.textContent="";
    for (var i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.display="block";
        squares[i].style.background = colors[i];

    }
    else{
        squares[i].style.display="none";
    }
    }
    h1.style.background = "steelblue";
}
/*easyBtn.addEventListener("click", function () {
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numberSquares=3;
    colors = generateRandomColors(numberSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function () {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numberSquares=6
    colors = generateRandomColors(numberSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {

        squares[i].style.background = colors[i];
        squares[i].style.display = "block";

    }
});*/



resetButton.addEventListener("click", function () {
    reset();
})
colorDisplay.textContent = pickedColor;


for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.background;
        console.log(pickedColor, clickedColor);
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct";
            resetButton.textContent = "Played Again";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
        } else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}