
// module to contain game board 

const GameBoard = (function() {
    let board = []; 
    // creates an array with 9 elements 
    for (i = 0; i < 9; i++) {
        board.push('');
    }
    
    //create a div for each element in the "board" array
    board.forEach( (value, index) => { 
        {
            let boardContainer = document.getElementById("boardContainer")
            let gridUnit = document.createElement("div")
            gridUnit.setAttribute("id", `${index}`);
            gridUnit.classList.add('box');
            // listens for click on each square 
            gridUnit.addEventListener("click", function (e) {
                //clicked = the id of the square that was clicked 
                let clicked = e.target.id
                console.log(clicked)
                console.log("turns = " + turns)
                console.log(winner)
                
                //check for draw
                const DrawCheck = (function () {
                    if (turns === 8 && winner == false) {
                    console.log("its a draw!")
                    }
                    })();
                //updates "board" array with status of each square
                if (turns%2 === 0 && board[clicked] === ""){
                    //once clicked, changes state of square (in this case background colour)
                    gridUnit.style.backgroundColor = "red";
                    board[clicked] = "o";
                    turns ++;
                    console.log(board)
                    chickenDinna()
                    }
                else if (turns%2 === 1 && board[clicked] === ""){
                    gridUnit.style.backgroundColor = "blue";
                    board[clicked] = "x";
                    console.log(board)
                    turns ++;
                    chickenDinna()
                }
                
            })
            boardContainer.appendChild(gridUnit)
        }
    }); 

    //player factory
    const Player = (name, piece) => {
        return {name, piece}
    }

    const playerOne = Player('player 1', "x")
    const playerTwo = Player('Player 2', "o") 
    
    //check for winning combination 
    var turns = 0

    var winner = false

    const winningCombos = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
    ]

    function chickenDinna() {
        winningCombos.forEach(combo => {
            if((board[combo[0]] === "x" && (board[combo[1]]) === "x" && (board[combo[2]])) === 'x'){
                console.log("winner is blue")
                winner = true 
            }

            else if((board[combo[0]] === "o" && (board[combo[1]]) === "o" && (board[combo[2]])) === 'o'){
                console.log("winner is red")
                winner = true 
            }
            else if(turns === 9 && winner === false){
                console.log("it's a draw")
            }
        })  
    }

}

)();






const Gameplay = () => {}
