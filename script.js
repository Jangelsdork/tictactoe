
// module to contain game board 

const GameBoard = (function() {
    let board = []; 
    // creates an array with 9 elements 
    for (i = 0; i < 9; i++) {
        board.push('');
  
    }
    console.log(board)
    //create a div for each element in the "board" array
    board.forEach( () => { 
        {
            let boardContainer = document.getElementById("boardContainer")
            let gridUnit = document.createElement("div")
            // let div = document.createElement('div');
            gridUnit.classList.add('box');
            boardContainer.appendChild(gridUnit)
        }

    }); 
})();


const Player = (name, piece) => {
    const playerName = () => name; 
    const playerPiece = () => piece;

    return {name, piece}
}

const Gameplay = () => {}
