
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
                //once clicked, changes state of square (in this case background colour)
                console.log("turns = " + turns)
                //updates "board" array with status of each square
                //ADD if statement declaring red or blue depending on turn 
                if (turns%2 === 0 && board[clicked] === ""){
                    gridUnit.style.backgroundColor = "red";
                    board[clicked] = "o";
                    turns ++;
                    console.log(board)
                    }
                else if (turns%2 === 1 && board[clicked] === ""){
                    gridUnit.style.backgroundColor = "blue";
                    board[clicked] = "x";
                    console.log(board)
                    turns ++;
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
    
    //define what happens 
    const playerCount = (function () {

    }

    )

    var turns = 0
}

)();






const Gameplay = () => {}
