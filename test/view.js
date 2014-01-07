
var should = require("should"),
	sinon = require("sinon"),
	Monopoly = require("../libs/monopoly"),
	View = require("../libs/view");

describe("View", function() {

	beforeEach(function() {

		sinon.spy(console, "log");

		this.monopoly = new Monopoly();
		sinon.stub(this.monopoly, "playTurn").returns("");

		this.view = new View(this.monopoly);

	});

	it("should execute the playTurn function when called with 'Play turn'", function() {
		
		this.view.execute("Play turn");

		/*jshint expr: true */
		this.monopoly.playTurn.calledOnce.should.be.ok;

	});

	it("should execute the playTurn function when called with nothing", function() {
		
		this.view.execute("");

		/*jshint expr: true */
		this.monopoly.playTurn.calledOnce.should.be.ok;

	});

	it("should print an error when called with an unknown command", function() {

		this.view.execute("notExistingCommand");

		/*jshint expr: true */
		console.log.calledWith("UNKNOWN COMMAND: notExistingCommand").should.be.ok;

	});

	afterEach(function() {

		console.log.restore();
		this.monopoly.playTurn.restore();

	});

});