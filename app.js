
var Dice = require("./libs/dice"),
	Player = require("./libs/player"),
	Monopoly = require("./libs/monopoly"),
	View = require("./libs/view");

var dice = new Dice();
var monopoly = new Monopoly(dice);

var player1 = new Player("Mr. Black");
monopoly.addPlayer(player1);
var player2 = new Player("Mrs. White");
monopoly.addPlayer(player2);
var player3 = new Player("Sr. Dog");
monopoly.addPlayer(player3);
var player4 = new Player("Super Fish");
monopoly.addPlayer(player4);

var view = new View(monopoly);