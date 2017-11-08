const View = require('./ttt-view.js'); // require appropriate file
const Game = require('./game.js'); // require appropriate file

$( () => {
  // Your code here
  const currentGame = new Game();
  const $el = $('.ttt');
  const currentView = new View(currentGame, $el);

  // console.log(currentGame);
  // console.log($el);
});
