
module.exports = (function() {
	
	var Dice = function() {};

	Dice.prototype.roll = function() {

		return Math.floor((Math.random() * 12) + 2); 

	};

	return Dice;

})();