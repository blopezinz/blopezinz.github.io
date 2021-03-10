
let player = 0;
let pointPlayer1 = 0;
let pointPlayer2 = 0;
let point = document.getElementById("point");
const win = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]

point.innerHTML = "Puntos Player X: " + pointPlayer1 + "<br><br>Puntos Player O: " + pointPlayer2;

function start() {
    for(i = 1; i <= 9 ; i++) {
        document.getElementById(i).innerHTML = "-"
    }
    player = 0;

}

function handleClick (value) {
    let item = document.getElementById(value).innerHTML;
    let itemChange = document.getElementById(value);
    if(item === "-"){
        if(player === 0) {
            itemChange.innerHTML = "X";            
            player = 1;
            ChosseWinner("X");
        } else if(player === 1){
            itemChange.innerHTML = "O";
            player = 0;
            ChosseWinner("O");
        }
        
    }
}

function End () {
    endGame;

    for(i = 1; i <= 9 ; i++) {
        status = document.getElementById(i).innerHTML
        if(status != "-"){
            endGame = 1;
        }else {
            endGame = 0;
        }
    }

    if(endGame === 1){
        alert("Empate!!")
        endGame = 0;
    }
}

function ChosseWinner () {
    let counterX = 0;
    let counterO = 0;
    for(i = 0; i < win.length; i++) {
        for(p = 0; p < win[i].length; p++){
            let item = document.getElementById(win[i][p]).innerHTML;
            if(item === "X"){
                counterX++;
            } else if(item === "O"){
                counterO++;
            }
        }
        if (counterX < 3 && counterO < 3){
            counterX = 0;
            counterO = 0;
        }

        if(counterX === 3){
            alert("Gano player 1");
            counterO = 0;
            counterX = 0;
            pointPlayer1++;
            point.innerHTML = "Puntos Player X: " + pointPlayer1 + "<br><br>Puntos Player O: " + pointPlayer2;
        }else if(counterO === 3){
            alert("Gano player 2");
            counterX = 0;
            counterO = 0;
            pointPlayer2++;
            point.innerHTML = "Puntos Player X: " + pointPlayer1 + "<br><br>Puntos Player O: " + pointPlayer2;
        }
    }

    
}