
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
            // console.log("id: ", index);
            // let div = document.createElement('div');
            gridUnit.classList.add('box');
            // listens for click on each square 
            gridUnit.addEventListener("click", function (e) {
                //clicked = the id of the square that was clicked 
                let clicked = e.target.id
                console.log(clicked)
                //once clicked, changes state of square (in this case background colour)
                gridUnit.style.backgroundColor = "red";
                board[clicked] = "red"
                console.log(board)
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
    
    const playerTurn = (function () {

    }

    )
}

)();






const Gameplay = () => {}
