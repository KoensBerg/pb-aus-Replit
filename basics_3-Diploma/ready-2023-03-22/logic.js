let players = ['x', 'o'];
let activePlayer = 0;

let gameboard = [];  // Игровое поле
let boardSize = 3;   // Размер поля (строк/столбцов)

function startGame() {
  /*
  1. Выберем активного игрока.
  2. Создадим новое игровое поле.
  3. Отрисуем игровое поле.
  */
  activePlayer = 0;
  setGameboard();
  renderBoard(gameboard);
}

// Действия по клику
function click(rowNumber, columnNumber) {
  /*
  1. Поставим метку игрока в игровом поле.
  2. Отрисуем игровое поле.
  3. Проверим, не выиграл ли игрок.
  3.1 Если выиграл, то поздравим его.
  3.2 Если ещё не выиграл — передадим ход следующему игроку.
  */
  let label = players[activePlayer];

  gameboard[rowNumber][columnNumber] = label;
  renderBoard(gameboard);

  if (checkTheVictory(label, rowNumber, columnNumber)) {
    showWinner(activePlayer);
  }

  activePlayer = activePlayer === 0 ? 1 : 0;
}

// Создадим игровое поле заданного размера
function setGameboard() {
  gameboard = [];
  for (let i = 0; i < boardSize; i++) {
    const currentRow = [];
    for (let j = 0; j < boardSize; j++) {
      currentRow.push('');
    }
    gameboard.push(currentRow);
  }
}

// Проверим, победил ли игрок
function checkTheVictory(label, rowNumber, columnNumber) {
  let playerWon = false;

  // 1
  for (let i = 0; i < boardSize; i++) {
    if (gameboard[i][i] === label) {
      playerWon = true;
    } else {
      playerWon = false;
      break;
    }
  }

  if (playerWon === true) {
    return true;
  }

  // 2
  for (let i = 0; i < boardSize; i++) {
    if (gameboard[i][boardSize - i - 1] === label) {
      playerWon = true;
    } else {
      playerWon = false;
      break;
    }
  }

  if (playerWon === true) {
    return true;
  }

  // 3
  for (let i = 0; i < boardSize; i++) {
    if (gameboard[rowNumber][i] === label) {
      playerWon = true;
    } else {
      playerWon = false;
      break;
    }
  }

  if (playerWon === true) {
    return true;
  }

  // 4
  for (let i = 0; i < boardSize; i++) {
    if (gameboard[i][columnNumber] === label) {
      playerWon = true;
    } else {
      playerWon = false;
      break;
    }
  }

  return playerWon;
}