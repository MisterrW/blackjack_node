var Card = function(suit, value){
	this.suit = suit;
	this.value = value;

	this.name = function(){
		return this.value + " of " + this.suit;
	}
}

module.exports = Card;