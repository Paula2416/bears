let currPlantTile;
let currMoleTile;
let score = 0;
let gameOver = false;


window.onload = function() {
    setGame();
}

function setGame() {
   
    for (let i = 0; i < 9; i++) { 
        let tile = document.createElement("div");
        tile.id = i.toString();
       document.getElementById("board").appendChild(tile);
    }
}function getRandomTile() {
    //math.random --> 0-1 --> (0-1) * 9 = (0-9) --> round down to (0-8) integers
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}


function setPlant() {
   
    if (currPlantTile) {
        currPlantTile.innerHTML = "";
    }
    let plant = document.createElement("img");
     plant.src = "../assets/images/flabby2.png";

    let num = getRandomTile();
   
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}

function setMole() {
   
    if (currMoleTile) {
        currMoleTile.innerHTML = "";
    }
    let mole = document.createElement("img");
    mole.src = "../assets/images/flabby.png";

    let num = getRandomTile();
   
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}

function selectTile() {
    }
    if (this == currMoleTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString(); //update score html
    }
    else if (this == currPlantTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString(); //update score html
        gameOver = true;
    }
