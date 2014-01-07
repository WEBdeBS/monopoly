
module.exports = (function() {

	var listen = function() {

		var self = this;

		process.stdin.resume();
		process.stdin.setEncoding('utf8');
		process.stdin.on("data", function(chunk) {
			self.execute(chunk.replace("\n", ""));
		});
		process.stdin.on("end", function() {
			console.log("bye");
		});

	};

	var View = function(monopoly) {

		this.monopoly = monopoly;
		this.execute("Status");

		listen.call(this);

	};

	View.prototype.execute = function(name) {

		this.commands = {
			"Status": this.monopoly.getStatus,
			"Play turn": this.monopoly.playTurn,
			"": this.monopoly.playTurn
		};

		var command = this.commands[name];

		if (command) {
			var result = command.call(this.monopoly);
			console.log(result);
		} else {
			console.log("UNKNOWN COMMAND: " + name);
		}

	};

	return View;

})();