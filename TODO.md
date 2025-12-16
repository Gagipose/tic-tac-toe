## Tic Tac Toe – Checklist

### Setup
- [x] Create Git repo
- [x] Create project folder structure
- [x] Add `src/main.js`
- [x] Add `index.html` (loads `src/main.js`)
- [x] Add `style.css` and basic styling

### Core game logic (console)
- [x] Create `gameBoard` module (IIFE) with `board` array
- [x] Add functions to place `X` and `O` (`addCross`, `addCircle`)
- [x] Add win patterns and `checkWin` logic
- [ ] Add tie (draw) detection
- [ ] Change initial `board` to start as all empty cells
- [ ] Create `Player` factory (`Player(name, marker)`)
- [ ] Create `gameController` module to manage turns, moves, win/tie, restart
- [ ] Test full games via console (no DOM yet)

### DOM / UI
- [ ] Build 3×3 grid in HTML for the board
- [ ] Create inputs for player names
- [ ] Add Start / Restart button
- [ ] Add status / message area (whose turn, win, tie)
- [ ] Create `displayController` module for all DOM updates
- [ ] Render `gameBoard.board` into the grid

### Hooking logic to UI
- [ ] On cell click, call `gameController` to play a move
- [ ] Prevent playing in already-filled cells
- [ ] After each move, re-render board and update status text
- [ ] On Start, read names, create players, and begin game
- [ ] On Restart, reset board and state

### Polish
- [ ] Hide or remove temporary `console.log` debugging
- [ ] Ensure only needed modules are in global scope
- [ ] Improve styling (hover effects, highlight winner, etc.)
- [ ] Final review and commit to GitHub


