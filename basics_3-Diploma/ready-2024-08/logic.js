let players = ['x', 'o']; // метки игроков
let activePlayer = 0; // активный игрок

let gameboard = []; // пустое игровое поле
let boardSize = 3; // размер поля (строк / столбцов)

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

function setGameboard() {
  /*
  1. Очистим игровое поле
  2. Создадим поле заданной размерности
  */
  gameboard = [];

  for (let i = 0; i < boardSize; i++) {
    const currentRow = [];
    for (let j = 0; j < boardSize; j++) {
      currentRow.push('');
    }
    gameboard.push(currentRow);
  }
}

function click(rowNumber, columnNumber) {
  /*
  1. Поставим в ячейку метку игрока.
  2. Отрисуем игровое поле.
  3. Проверим, не выиграл ли игрок.
  4. Если выиграл, то поздравим его.
  5. Иначе передадим ход следующему игроку.
  */
  let label = players[activePlayer];
  gameboard[rowNumber][columnNumber] = label;
  renderBoard(gameboard);

  if (checkTheVictory(label)) {
    showWinner(activePlayer);
  }

  activePlayer = (activePlayer === 0) ? 1 : 0;
}

function checkTheVictory(label) {
  // есть ли выигрыш по горизонтали?
  for (let i = 0; i < gameboard.length; i++) {
    for (let j = 0; j < gameboard.length; j++) {
      if (gameboard[i][j] !== label) {
        break;
      } else {
        if (j === gameboard.length - 1) {
          return true;
        }
      }
    }
  }

  // есть ли выигрыш по вертикали?
  for (let i = 0; i < gameboard.length; i++) {
    for (let j = 0; j < gameboard.length; j++) {
      if (gameboard[j][i] !== label) {
        break;
      } else {
        if (j === gameboard.length - 1) {
          return true;
        }
      }
    }
  }

  // есть ли выигрыш по диагонали?
  for (let i = 0; i < gameboard.length; i++) {
    if (gameboard[i][i] !== label) {
      break;
    } else {
      if (i === gameboard.length - 1) {
        return true;
      }
    }
  }

  // есть ли выигрыш по второй диагонали?
  for (let i = 0; i < gameboard.length; i++) {
    if (gameboard[i][gameboard.length - i - 1] !== label) {
      break;
    } else {
      if (gameboard.length - i - 1 === 0) {
        return true;
      }
    }
  }

  return false;
}
