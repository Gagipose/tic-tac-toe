
/* ---- GAME BOARD MODULE ---- */

const gameBoard = (function () {
    let board = ["", "", "", "", "", "", "", "", ""];

    const addCross = (index) => {
        board.splice(index, 1, "X");
        console.log(board);
    }

    const addCircle = (index) => {
        board.splice(index, 1, "O"); 
        console.log(board);
    }

    const reset = () => {
        board.fill("");
        currentMarker = "X";
    }

    //places marker and changes user
    let currentMarker = "X"
    const addMarker = (index) => {
        // Prevent placing marker if cell is already filled
        if (board[index] !== "") {
            return false;
        }
        board.splice(index, 1, currentMarker);
        currentMarker = currentMarker === "X" ? "O" : "X";
        console.log("player changed to: " + currentMarker);
        console.log(board);
        return true;
    }

    const getCurrentMarker = () => currentMarker;

    // Getter function to return a copy of the board (prevents direct mutation)
    const getBoard = () => [...board];
 
    return {getBoard, addCross, addCircle, addMarker, reset, getCurrentMarker};
}());


/* ---- WIN CONDITION MODULE ---- */

const winCondition = (function () {
    const win = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
        [0, 4, 8], [2, 4, 6] // diagonal
    ]
    // const tie = "all are o or x" <--- fix later

    //check for winning match - returns "X", "O", "tie", or null
    const checkWin = () => {
        const board = gameBoard.getBoard();
        
        // Check for win first
        for (let i = 0; i < win.length; i++) {
            const pattern = win[i];
            const a = board[pattern[0]];
            const b = board[pattern[1]];
            const c = board[pattern[2]];

            // if a = empty string, its falsy
            if (a && a === b && a === c) {
                return a; // Return "X" or "O" who won
            }
        }

        // Check for tie (board full but no winner)
        if (!board.includes("")) {
            return "tie";
        }

        return null; // Game still ongoing
    }

    return {checkWin}
}())


/* ---- DOM / DISPLAY CONTROLLER ---- */
//query selectors
const cells = document.querySelectorAll(".cell");
const resetBtn = document.querySelector(".reset-button");
const statusMessage = document.getElementById("status-message");
const gameRoot = document.getElementById("game-root");

// Game state
let gameOver = false;

//shows user the current board
const updateDom = () => {
    const board = gameBoard.getBoard();
    for (let x in board) {
        cells[x].textContent = board[x];
    }
};

// Update status message and game state
const updateStatus = (result) => {
    if (result === "X" || result === "O") {
        statusMessage.textContent = `${result} won!`;
        gameRoot.classList.add("game-over");
        gameOver = true;
    } else if (result === "tie") {
        statusMessage.textContent = "It's a tie!";
        gameRoot.classList.add("game-over");
        gameOver = true;
    } else {
        statusMessage.textContent = "";
        gameRoot.classList.remove("game-over");
        gameOver = false;
    }
};

/* ---- EVENT LISTENERS ---- */
// event listeners
cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
        // Don't allow moves if game is over
        if (gameOver) return;
        
        // Try to place marker (returns false if cell is filled)
        if (!gameBoard.addMarker(index)) return;
        
        updateDom();
        
        // Check for win/tie
        const result = winCondition.checkWin(); // responds with: a or b or tie or null
        if (result) {
            updateStatus(result);
        }
    });
});

resetBtn.addEventListener("click", () => {
    gameBoard.reset();
    updateDom();
    updateStatus(null); // Clear status message and reset game state
});


/* ---- INITIALIZATION / GAME START ---- */
// initialize functions


/* ---- TESTS / DEBUGGING ---- */


// gameBoard.display();
// gameBoard.addCross(0);
// gameBoard.addCross(1);
// gameBoard.addCross(2);
// gameBoard.addCircle(3);

// gameBoard.display(); // Display the initial empty board

// gameBoard.addMarker(0); // Player 1 (X) marks position 0 (top-left)
// gameBoard.addMarker(4); // Player 2 (O) marks position 4 (center)
// gameBoard.addMarker(1); // Player 1 (X) marks position 1 (top-center)
// gameBoard.addMarker(8); // Player 2 (O) marks position 8 (bottom-right)
// gameBoard.addMarker(2); // Player 1 (X) marks position 2 (top-right) - possibly winning move for X

// winCondition.checkWin();
// console.log(gameBoard.board.includes("")); // <---- use this to decide if it has "" or not. 
// console.log(gameBoard.board.includes("")); // <---- use this to decide if it has "" or not. 