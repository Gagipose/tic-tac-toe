
// game board 

const gameBoard = (function () {
    const board = ["", "", "", "", "", "", "", "", ""];

    const addCross = (index) =>{
        board.splice(index, 1, "X");
        console.log(board);
    }

    const addCircle = (index) => {
        board.splice(index, 1, "O"); 
        console.log(board);
    }
 
    const display = () => console.log(board);

    return {board, display, addCross, addCircle};
}())



gameBoard.display();
gameBoard.addCross(2);
gameBoard.addCross(8);
gameBoard.addCircle(3)
gameBoard.addCircle(4)
