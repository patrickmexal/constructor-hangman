var inquirer = require("inquirer");
var count = 0;
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

console.log("Welcome! Guess the word I am thinking of! Give me a letter to begin!");

var askQuestion = function() {
  // if statement to ensure that our questions are only asked five times
  if (count < 10) {
    // runs inquirer and asks the user a series of questions whose replies are
    // stored within the variable answers inside of the .then statement
    inquirer.prompt([
      {
        name: "letter1",
        message: "Guess a letter!",
        value: ""
      }, {
        name: "letter2",
        message: "Guess a letter!"
      }, {
        name: "letter3",
        message: "Guess a letter!"
      }, {
        name: "letter4",
        message: "Guess a letter!"
      },
      { 
        name: "letter5",
        message: "Guess a letter!"
      }
    ]).  then(function(answers) {
      // initializes the variable newguy to be a programmer object which will take
      // in all of the user's answers to the questions above
      var guess = new Word(
        answers.name,
        answers.position,
        answers.age,
        answers.language);
      // printInfo method is run to show that the newguy object was successfully created and filled
      newGuy.printInfo();
      // add one to count to increment our recursive loop by one
      count++;
      // run the askquestion function again so as to either end the loop or ask the questions again
      askQuestion();
    });
    // else statement which prints "all questions asked" to the console
    // when the code has been run five times
  }
  else {
    console.log("All questions asked");
  }
}; 

// call askquestion to run our code
askQuestion();


