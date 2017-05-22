var p1button = document.querySelector("#p1");
var p2button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var score1 = document.querySelector(".p1scoree");
var score2 = document.querySelector(".p2scoree");
var numInput = document.querySelector("input");
var p = document.querySelector("p");
var winningScoreDisplay = document.querySelector("p span");
var p1score = 0;
var p2score = 0;
var gameOver = false;
var winningScore = 5;
p1button.addEventListener("click", function () {
    if (!gameOver) {
        p1score++;
        if (p1score === winningScore) {
            score1.classList.add("winner");
            gameOver = true;
        }
        score1.textContent = p1score;
    }
});
p2button.addEventListener("click", function () {
    if (!gameOver) {
        p2score++;
        if (p2score === winningScore) {
            score2.classList.add("winner");
            gameOver = true;
        }
        score2.textContent = p2score;
    }
});
resetButton.addEventListener("click", function () {
    reset();
});
function reset(){
    p1score = 0;
    p2score = 0;
    score1.textContent = 0;
    score2.textContent = 0;
    score1.classList.remove("winner");
    score2.classList.remove("winner");
    gameOver = 0;
}
numInput.addEventListener("change", function () {
    winningScoreDisplay.textContent = numInput.value;
    winningScore =Number(numInput.value);
    reset();
});