
// module to contain game board 

const GameBoard = (function() {
    let board = []; 
    // creates an array with 9 elements 
    for (i = 0; i < 9; i++) {
        board.push('');
  
    }
    console.log(board)
    //create a div for each element in the "board" array
    board.forEach( (value, index) => { 
        {
            let boardContainer = document.getElementById("boardContainer")
            let gridUnit = document.createElement("div")
            gridUnit.setAttribute("id", `id-${index}`);
            console.log("id: ", index);
            // let div = document.createElement('div');
            gridUnit.classList.add('box');
            gridUnit.addEventListener("click", function (e) {console.log("clicked: ", e.path[0])} )
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
