
var should = require("should"),
	sinon = require("sinon"),
	Dice = require("../libs/dice"),
	Player = require("../libs/player"),
	Monopoly = require("../libs/monopoly");

describe("Monopoly", function() {

	beforeEach(function() {

		this.dice = new Dice();
		this.player = new Player("testPlayer");
		this.monopoly = new Monopoly(this.dice);

	});

	it("should be able to add a user", function() {
		
		this.monopoly.addPlayer(this.player);

		this.monopoly.players.length.should.be.equal(1);

	});

	it("should be able to add two users", function() {
		
		this.monopoly.addPlayer(this.player);
		this.monopoly.addPlayer(this.player);

		this.monopoly.players.length.should.be.equal(2);

	});

	it("should go to the next player on each turn", function() {
		
		var player1 = new Player("player1");
		this.monopoly.addPlayer(player1);
		var player2 = new Player("player2");
		this.monopoly.addPlayer(player2);
		this.monopoly.playTurn();

		this.monopoly.currentPlayer().getName().should.be.equal("player2");

	});

	it("should go to the next player on each turn", function() {
		
		var player1 = new Player("player1");
		this.monopoly.addPlayer(player1);
		var player2 = new Player("player2");
		this.monopoly.addPlayer(player2);
		this.monopoly.playTurn();
		this.monopoly.playTurn();

		this.monopoly.currentPlayer().getName().should.be.equal("player1");

	});
	
	it("should print the current players position", function() {
		
		this.monopoly.addPlayer(this.player);
		var result = this.monopoly.getStatus();

		result.should.be.equal("testPlayer: Go!\n");

	});

	it("should move the player to 'Square 7' when playTurn is called", function() {

		sinon.stub(this.dice, "roll").returns(7);

		this.monopoly.addPlayer(this.player);
		var result = this.monopoly.playTurn();

		result.should.be.equal("testPlayer: Square 7, dice: 7");

	});

});