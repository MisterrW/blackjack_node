var assert = require('assert');
var Card = require('../card');

describe('card', function(){
	it('can have a suit and a value', function(){
		var testCard = new Card("Spades", "Ace");
		assert.equal(testCard.name(), "Ace of Spades");
	})
})