const class_X = "x";
const class_CIRCLE = "circle";
let circleTurn;
const cellElement = document.querySelectorAll("[data-cell]");
const board = document.getElementById("board");

startGame();

function startGame() {
  circleTurn = false;
  cellElement.forEach((cell) => {
    cell.addEventListener("click", handleClick, { once: true });
  });
  setBoardHover();
}

function handleClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? class_CIRCLE : class_X;
  placeMark(cell, currentClass);
  swapTurns();
  setBoardHover();
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

function swapTurns() {
  circleTurn = !circleTurn;
}

function setBoardHover() {
  board.classList.remove(class_X);
  board.classList.remove(class_CIRCLE);

  if (circleTurn) {
    board.classList.add(class_CIRCLE);
  } else {
    board.classList.add(class_X);
  }
}
