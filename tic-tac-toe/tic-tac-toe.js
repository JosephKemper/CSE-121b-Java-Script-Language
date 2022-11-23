const wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [6,4,2]
]

let turnCount = 0;
let gameOver = false;

function isGameOver(){
    return wins.filter(sequence =>{
        let cellA = document.getElementById("cell-" + sequence[0]).textContent;
        let cellB = document.getElementById("cell-" + sequence[1]).textContent;
        let cellC = document.getElementById("cell-" + sequence[2]).textContent;
        return (cellA != "" && cellA == cellB && cellA == cellC);
    }).length > 0;
}

function handleClick (e){
    let cell = e.target;
    if (cell.textContent == "" && !gameOver){
        let marker = (turnCount % 2 == 0) ? "X" : "O";
        cell.textContent = marker;
        gameOver = isGameOver();
        if (gameOver) {
            document.getElementById("caption").innerHTML = "Winner is " + marker;
        }
        turnCount++;
    }
}

document.querySelectorAll(".game-cell").forEach(cell => cell.addEventListener("click", handleClick));