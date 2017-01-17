var Card = require('./card');

var Deck = function(){
	this.cards = [];

	this.fillDeck = function(){
		var suits = ["hearts", "diamonds", "spades", "clubs"];
		var values = ["two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king", "ace"];

		for(suit of suits){
			for(value of values){
				this.cards.push(new Card(suit, value));
			}

		}
	}

	this.shuffleCards = function() {
		for (var i = this.cards.length; i; i--) {
			var randomPlace = Math.floor(Math.random() * i);
			var lastPlace = this.cards[i - 1];
			this.cards[i - 1] = this.cards[randomPlace];
			this.cards[randomPlace] = lastPlace;
		}
	}

	this.getCard = function(n){
		return this.cards[n];
	}

	this.dealCard = function(){
		return this.cards.pop();
	}

	this.getDeck = function(){
		return this.cards;
	}

	this.returnCardToBack = function(card){
		this.cards.unshift(card);
		return card + " returned!";
	}
}

module.exports = Deck;


