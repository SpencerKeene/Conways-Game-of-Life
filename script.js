import GameOfLife from "./GameOfLife.js";

const game = new GameOfLife(12, false);
document.body.append(game.gameboardElement);

const interval = setInterval(() => {
  game.nextGeneration();
}, 100);
