
module.exports = (function() {

	var Player = function(name, position) {

		this.name = name;
		this.currentPosition = position || 0;
	
	};

	Player.prototype.getName = function() {

		return this.name;

	};

	Player.prototype.getSquare = function() {

		var result;
		
		if (this.currentPosition === 0) {
			result = "Go!";
		} else {
			result = "Square " + this.currentPosition;
		}

		return result;
	
	};

	Player.prototype.getStatus = function() {

		return this.getName() + ": " + this.getSquare();

	};

	Player.prototype.playTurn = function(step) {
		
		this.currentPosition += step || 1;
		this.currentPosition = this.currentPosition % 40;
	
	};

	return Player;

})();