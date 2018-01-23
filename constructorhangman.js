//var inquirer = require("inquirer");
//var require = require("/commandline.js");
var answers = [
	"Yeti",
 	"Menehune",
  	"Sasquatch",
   	"Chupacabra",
   	"Kraken"
    ];


var randomItem = answers[Math.floor(Math.random() * answers.length)];

console.log(randomItem);
