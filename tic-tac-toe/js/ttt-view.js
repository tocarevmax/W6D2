class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    let $ul = this.setupBoard();
    $el.append($ul);
    this.bindEvents();
  }

  bindEvents() {
    let $ul = $('.main-ul');
    console.log($ul);
    let that = this;
    $ul.on('click','li', event => {
      console.log(event.target);
      that.makeMove($(event.target));

    });
  }

  makeMove($square) {
    let posStr = $square.attr('pos');
    let pos = [];
        pos[0] = Number(posStr[0]);
        pos[1] = Number(posStr[2]);
        // console.log(pos);
    try {
      this.game.playMove(pos);
    } catch (e) {
      window.alert('Is not an empty position!');
    }

    $square.text(this.game.currentPlayer);
    $square.css('background-color','white');
    if (this.game.isOver()) {
      let winner = this.game.currentPlayer;
      window.alert(`Congratulations, ${winner} won!`);
    }
  }

  setupBoard() {
    let $ul = $('<ul></ul>');
    $ul.addClass('main-ul');
      for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
        let $li = $('<li></li>');
        $li.attr("pos", [i,j]);
        $ul.append($li);
        }
      }
    $ul.css('background-color','red');
    return $ul;
  }
}

// console.log("hello");

module.exports = View;
