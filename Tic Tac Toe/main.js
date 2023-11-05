const boxes = document.querySelectorAll('.box');
const statusEvent = document.querySelector('#status');
const btnRestart = document.querySelector('#restart');
let x = "<img src='./assets/X.png'>";
let o = "<img src='./assets/O.png'>";

const win = [[0, 1, 2],
             [0, 3, 6],
             [0, 4, 8],
             [1, 4, 7],
             [2, 4, 6],
             [2, 5, 8],
             [3, 4, 5],
             [6, 7, 8]];

let options = ["", "", "", "", "", "", "", "", ""];
let playerImage = x;
let player = "X";
let running = false;
init();

function init() {
    boxes.forEach(box => box.addEventListener('click', boxClick));
    running = true;
    btnRestart.addEventListener('click', restartGame);
    statusEvent.textContent = `${player} Your Turn`;
}


function boxClick() {
    const index = this.dataset.index;
    if (options[index] != "" || !running) {
        return;
    }
    updateBox(this, index);
}

function updateBox(box, index) {
    options[index] = player;
    box.innerHTML = playerImage;
    checkWinner();

}


function changePlayer() {
    player = (player == "X") ? "O" : "X";
    playerImage = (playerImage == x) ? o : x;
    statusEvent.textContent = `${player} Your Turn`;

}


function checkWinner() {
    let isWon = false;
    for (let i = 0; i < win.length; i++) {
        const winChance = win[i];
        const box1 = options[winChance[0]];
        const box2 = options[winChance[1]];
        const box3 = options[winChance[2]];
        if (box1 == "" || box2 == "" || box3 == "") {
            continue;
        }
        if (box1 == box2 && box2 == box3) {
            isWon = true;
            boxes[winChance[0]].classList.add('win');
            boxes[winChance[1]].classList.add('win');
            boxes[winChance[2]].classList.add('win');
        }
    }
    if (isWon) {
        statusEvent.textContent = `${player} is Won`;
        running = false;

    }
    else if (!options.includes("")) {
        statusEvent.textContent = `Game Draw....!`;
        running = false;
    }
    else {
        changePlayer();
    }

}

function restartGame() {
options = ["", "", "", "", "", "", "", "", ""];
playerImage = x;
player = "X";
running = false;
init();
statusEvent.textContent = `${player} Your Turn`;
boxes.forEach(box=>{
    box.innerHTML="";
    box.classList.remove('win');
});
}