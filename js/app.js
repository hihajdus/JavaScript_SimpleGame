var self;



function Game() {
  this.width = 10;
  this.height = 10;
  this.board = document.querySelectorAll('#board div');

  this.furry = new Furry();
  this.coin = new Coin();
  this.score = 0;

  this.scoreElement = document.querySelector('#score span');

  //start game



}


Game.prototype.position = function() {
  return x + y * 10;
}

Game.prototype.position = function() {
  for (var i = 0; i < this.board.length; i++) {
    this.board[i].classList.remove('furry');
  }

  var coinField = this.position(this.coin.x, this.coin.y);
  this.board[coinfield].classList.add('coin');

  var furryField = this.position(this.furry.x, this.furry.y);
  this.board[furryField].classList.add('furry');

};

Game.prototype.keyboard = function(event) {
  var key = event.whitch;
  switch (key) {
    case 97:
      self.furry.direction = 'left';
      break;
    case 119:
      self.furry.direction = 'up';
      break;
    case 100:
      self.furry.direction = 'right';
      break;
    case 115:
      self.furry.direction = 'down';
      break;
  }
};




function Furry() {
  this.x = 0;
  this.y = 0;
  this.direction = 'right';
}

function Coin() {
  this.x = Math.floor(Math.random() * 10);
  this.y = Math.floor(Math.random() * 10);
}


document.addEventListener("DOMContentLoaded", function() {

  console.log('it works');

  var game = new Game();

});
