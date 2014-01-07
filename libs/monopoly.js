
module.exports = (function() {

	var next = function() {

		this.currentPlayerIndex = ++this.currentPlayerIndex % this.players.length;

	};

	var Monopoly = function(dice) {

		this.dice = dice;
		this.players = [];
		this.currentPlayerIndex = 0;

	};

	Monopoly.prototype.addPlayer = function(player) {

		this.players.push(player);

	};

	Monopoly.prototype.currentPlayer = function() {

		return this.players[this.currentPlayerIndex];

	};

	Monopoly.prototype.getStatus = function() {

		var result = "";
		this.players.forEach(function(player) {
			result += player.getStatus() + "\n";
		});
		return result;

	};

	Monopoly.prototype.playTurn = function() {

		var step = this.dice.roll();
		var player = this.currentPlayer();
		player.playTurn(step);
		var result = player.getStatus() + ", dice: " + step;
		next.call(this);
		return result;

	};

	return Monopoly;

})();