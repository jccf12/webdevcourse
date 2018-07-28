// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
*/


(function () {

    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    var byeSpeaker = {};
    byeSpeaker.speak = function (name) {
      console.log("Good Bye " + name)
    }

    var helloSpeaker = {};
    helloSpeaker.speak = function (name) {
      console.log("Hello " + name)
    }
  for (name in names) {

    var firstLetter = names[name].charAt(0).toLowerCase()

    if (firstLetter == 'j') {
      byeSpeaker.speak(names[name])
    } else {
      helloSpeaker.speak(names[name])
    }
  }

})();

