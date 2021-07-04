import GameOfLife from "./GameOfLife.js";

delete window.nextGeneration;

const game = new GameOfLife(12, false);
document.body.append(game.gameboardElement);

const interval = setInterval(() => {
  game.nextGeneration();
}, 100);
