
// game board 
const gameBoard = (function () {
    const board = ["", "", "", "", "", "", "", "", ""]; // <---> change back to empty strings later

    const addCross = (index) =>{
        board.splice(index, 1, "X");
        console.log(board);
    }

    const addCircle = (index) => {
        board.splice(index, 1, "O"); 
        console.log(board);
    }

    //places marker and changes user
    let currentMarker = "X"
    const addMarker = (index) => {
        board.splice(index, 1, currentMarker);
        currentMarker = currentMarker === "X" ? "O" : "X";
        console.log("player changed to: " + currentMarker);
        console.log(board);
    }
 
    const display = () => console.log(board);

    return {board, display, addCross, addCircle, addMarker};
}());


// check win & tie conditions
// "if these index positions are the same = win"
const winCondition = (function () {
    const win = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
        [0, 4, 8], [2, 4, 6] // diagonal
    ]
    // const tie = "all are o or x" <--- fix later

    //check for winning match
    const checkWin = () => {
        const board = gameBoard.board;
        
        // Return tie and retun/stop
        if (!gameBoard.board.includes("")) {
            return console.log("TIE!");
        }

        for (let i = 0; i < win.length; i++) {
            const pattern = win[i];
            const a = board[pattern[0]];
            const b = board[pattern[1]];
            const c = board[pattern[2]];

            // if a = empty string, its falsy
            if (a && a === b && a === c) {
                console.log("WIN!!")
            }
        }

    }

    return {checkWin}
}())



// ---- TODO: ----
// module: make gameboard
// module: check win or tie
// function: create new game with 2 players



// ---- TESTS ----


// gameBoard.display();
// gameBoard.addCross(0);
// gameBoard.addCross(1);
// gameBoard.addCross(2);
// gameBoard.addCircle(3);

gameBoard.display(); // Display the initial empty board

gameBoard.addMarker(0); // Player 1 (X) marks position 0 (top-left)
gameBoard.addMarker(4); // Player 2 (O) marks position 4 (center)
gameBoard.addMarker(1); // Player 1 (X) marks position 1 (top-center)
gameBoard.addMarker(8); // Player 2 (O) marks position 8 (bottom-right)
gameBoard.addMarker(2); // Player 1 (X) marks position 2 (top-right) - possibly winning move for X

winCondition.checkWin();
// console.log(gameBoard.board.includes("")); // <---- use this to decide if it has "" or not. 