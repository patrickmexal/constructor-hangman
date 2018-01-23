//var inquirer = require("inquirer");
var prompt = require("prompt");
var commandline = require("./commandline.js");
var inputs = [];
var cryptidArray = [
	"Yeti",
 	"Menehune",
  	"Sasquatch",
   	"Chupacabra",
   	"Kraken"
    ];


var randomItem = cryptidArray[Math.floor(Math.random() * cryptidArray.length)];

prompt.start();

function gamePlay() {
	const initial = randomItem;
	if (inputs = true) {
		console.log(inputs);
	} else {
		console.log("A hit!");
	}
}
/*function gameAction() {
	if (inputs === randomItem.index) {
		console.log(randomItem.match());
	}
}
gameAction()*/

/*function ArrayConstructor(item1, item2, item3, item4, item5, item6, item7, item8, item9, item10) {
	this.item1 = inputs[0],
	this.item2 = inputs[1],
	this.item3 = inputs[2],
	this.item4 = inputs[3],
	this.item5 = inputs[4],
	this.item6 = inputs[5],
	this.item7 = inputs[6],
	this.item8 = inputs[7],
	this.item9 = inputs[8],
	this.item10 = inputs[9]
}*/

var newArray = new ArrayConstructor("h", "a", "p", "p", "y");

console.log(newArray);
console.log(randomItem);
console.log(cryptidArray[3].length);
