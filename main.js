
let player = 0;
let pointPlayer1 = 0;
let pointPlayer2 = 0;
let point = document.getElementById("point");
let win = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]

point.innerHTML = "Puntos Player X: " + pointPlayer1 + "<br>Puntos Player O: " + pointPlayer2;

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
            ChosseWinner("X");
            player = 1;
        } else if(player === 1){
            itemChange.innerHTML = "O";
            player = 0;
            ChosseWinner("O");
        }
        
    }
}

function End () {
    endGame = 0;

    for(i = 1; i <= 9 ; i++) {
        status = document.getElementById(i).innerHTML
        if(status != "-"){
            endGame = 2;
        }else {
            endGame = 0;
        }
    }

    if(endGame === 2){
        alert("Empate!!")
    }
}

function ChosseWinner (player) {
    let counter = 0;
    console.log(player);
    for(i = 0; i < win.length; i++) {
        for(p = 0; p < win[i].length; p++){
            let item = document.getElementById(win[i][p]).innerHTML;
            if( item === player){
                
                counter++;
            }else {
                console.log(item);
                counter = 0;
            }

            if(counter === 3){
                alert("Gano el Player " + player)
                if(player === "X"){
                    pointPlayer1++;
                    point.innerHTML = "Puntos Player X: " + pointPlayer1 + "<br>Puntos Player O: " + pointPlayer2;
                }else  if(player === "Y"){
                    pointPlayer2++;
                    point.innerHTML = "Puntos Player X: " + pointPlayer1 + "<br>Puntos Player O: " + pointPlayer2;
                }
            }

        }
    }
}