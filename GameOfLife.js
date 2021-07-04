export default class GameOfLife {
  constructor(CELL_SIZE, BOARD_WRAPS) {
    this.BOARD_WRAPS = BOARD_WRAPS;
    this.CELL_SIZE = CELL_SIZE;
    this.ROWS = Math.floor(window.innerHeight / CELL_SIZE);
    this.COLS = Math.floor(window.innerWidth / CELL_SIZE);

    this.#setupStyle();

    this.#createGameboard();

    this.previousGens = [];
    this.currentGen = this.#make2dArray(this.ROWS, this.COLS);
    this.#randomizeBoard();
  }

  #make2dArray(rows, cols) {
    const array = new Array(rows);
    for (let i = 0; i < rows; i++) {
      array[i] = new Array(cols);
    }
    return array;
  }

  #setupStyle() {
    const style = document.createElement("style");
    document.head.append(style);
    style.sheet.insertRule(`
      .gameboard { 
        grid-template-columns: repeat(${this.COLS}, ${this.CELL_SIZE}px); 
      }`);
    style.sheet.insertRule(`
      .cell {
        width: ${this.CELL_SIZE - 2}px; /* -2 for border on each side */
        height: ${this.CELL_SIZE - 2}px;
      }`);
  }

  #randomizeBoard(alivePercentage = 50) {
    for (let i = 0; i < this.ROWS; i++) {
      for (let j = 0; j < this.COLS; j++) {
        this.currentGen[i][j] = Math.random() * 100 < alivePercentage;
      }
    }
  }

  #createGameboard() {
    this.gameboard = document.createElement("div");
    this.gameboard.classList.add("gameboard");

    for (let i = 0; i < this.ROWS; i++) {
      for (let j = 0; j < this.COLS; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.setAttribute("id", `cell${i}_${j}`);

        this.gameboard.append(cell);
      }
    }
  }

  #countNeighbours(x, y) {
    let sum = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        let a, b;
        if (this.BOARD_WRAPS) {
          a = (x + i + this.ROWS) % this.ROWS;
          b = (y + j + this.COLS) % this.COLS;
        } else {
          a = x + i;
          b = y + j;
          if (a < 0 || a >= this.ROWS || b < 0 || b >= this.COLS) continue;
        }
        sum += this.currentGen[a][b];
      }
    }
    sum -= this.currentGen[x][y];
    return sum;
  }

  #render() {
    let i = 0;
    let j = 0;
    const children = this.gameboard.childNodes;

    children.forEach((child) => {
      if (this.currentGen[i][j]) {
        child.classList.add("alive");
      } else {
        child.classList.remove("alive");
      }

      j++;
      if (j >= this.COLS) {
        j = 0;
        i++;
      }
    });
  }

  get gameboardElement() {
    return this.gameboard;
  }

  nextGeneration() {
    this.previousGens.push(this.currentGen);
    this.currentGen = this.currentGen.map((row, x) => {
      return row.map((alive, y) => {
        const n = this.#countNeighbours(x, y);
        if (alive && (n < 2 || n > 3)) return 0;
        if (!alive && n === 3) return 1;
        return alive;
      });
    });
    this.#render();
  }

  previousGeneration() {
    if (this.previousGens.length === 0) {
      console.error("No previous generation");
      return;
    }
    this.currentGen = this.previousGens.pop();
    this.#render();
  }
}
