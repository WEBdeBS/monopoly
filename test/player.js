
var should = require("should"),
	sinon = require("sinon"),
	Player = require("../libs/player");

describe("Player", function() {

	beforeEach(function() {

		this.player = new Player("testPlayer");

	});

	it("should return the name of the player", function() {

		this.player.getName().should.be.equal("testPlayer");

	});
	
	it("should be on the 'Go!' square when created", function() {

		this.player.getSquare().should.be.equal("Go!");

	});

	it("should move to 'Square 1' when playTurn is called", function() {

		this.player.playTurn();

		this.player.getSquare().should.be.equal("Square 1");

	});

	it("should move to 'Go!' when playTurn is called and current square is 'Square 39'", function() {

		var player = new Player("", 39);
		player.playTurn();

		player.getSquare().should.be.equal("Go!");

	});

	it("should move to 'Square 1' when playTurn is called twice and current square is 'Square 39'", function() {

		var player = new Player("", 39);
		player.playTurn();
		player.playTurn();

		player.getSquare().should.be.equal("Square 1");

	});

	it("should move to 'Square 7' when playTurn is called with 7", function() {

		this.player.playTurn(7);

		this.player.getSquare().should.be.equal("Square 7");

	});

	it("should return the status of the player", function() {

		this.player.getStatus().should.be.equal("testPlayer: Go!");

	});

});