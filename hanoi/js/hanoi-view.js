class View {
  constructor(game, rootEl) {
    this.game = game;
    this.rootEl = rootEl;
    this.selectedTower = undefined;
    this.setupTowers(rootEl);
    this.clickTower(rootEl);
  }

  setupTowers(rootEl) {
    const towersArr = [];
    for (var i = 0; i < 3; i++) { // generates three ul elements (towers)
      let $ul = $('<ul></ul>');
      $ul.addClass(`tower-${i} tower`);
      $ul.attr('tower', i);
      rootEl.append($ul);
      towersArr.push($ul);

      if (i === 0) {
        for (var j = 0; j < 3; j++) {
          let $li = $('<li></li>');
          $li.addClass(`disk-${j}`);
          $li.attr('size', j);
          $ul.append($li);
        }
      }
    }
    // console.log(towersArr);

    return towersArr;
  }

  render(){
    // to alter the DOM elements to reflect the current game state.
    // You should call this in your constructor, too.
  }

  clickTower(rootEl) {
    const that = this;
    $('ul').each((idx, el) => {
      const currentTower = $(el);
      currentTower.on("click", event => {

        if (that.selectedTower) {   // second click
          console.log(`second click: `);
          console.log(event.currentTarget);
          const startNum = Number($(that.selectedTower).attr('tower'));
          const endNum = Number($(event.currentTarget).attr('tower'));
          that.game.move(startNum, endNum);
          that.selectedTower = undefined;
          debugger;
        } else {                    // first click
          console.log(`first click: `);
          that.selectedTower = event.currentTarget;
          console.log(that.selectedTower);
        }
      });
    });
  }
}

module.exports = View;
