var assert = require('assert');
var Deck = require('../deck');

describe('card', function(){
	it('can be filled with cards', function(){
		var deck = new Deck();
		deck.fillDeck();
		assert.equal(deck.cards.length, 52);
	})
	it('can be shuffled', function(){
		var deck = new Deck();
		deck.fillDeck();
		var cards1 = deck.cards.slice();
		deck.shuffleCards();
		var cards2 = deck.cards.slice();
		assert.notEqual(cards1, cards2);
	})
	it('can deal a specific card', function(){
		var deck = new Deck();
		deck.fillDeck();
		assert.equal(deck.getCard(9).name(), "jack of hearts");
	})
})