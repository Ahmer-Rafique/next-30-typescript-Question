"use strict";
exports.__esModule = true;
var guestList = ['Hammad', 'Bilal', 'Farhan', 'Umer', 'Abdullah', 'Ahsan', 'Tayyab', 'Arsal', 'Asad', 'Rehaan', 'Salman'];
console.log(guestList);
//Add a new line that prints a message saying that you can invite only two people for dinner.
console.log("I'm sorry to inform you that my new dinner table won't arrive in time and I can invite only two guests.");
/*
Remove guests from your list one at a time until only two names remain in your list.
Each time you pop a name from your list,
print a message to that person letting them know you’re sorry you can’t invite them to dinner.
*/
var reserveSeat = 2;
var bookedSeat = guestList.length;
while (reserveSeat < bookedSeat) {
    var skipGuest = guestList.pop();
    console.log("".concat(skipGuest, "! I'm really sorry that due to space issue I can't invite you for dinner."));
    bookedSeat--;
}
// Print a message to each of the two people still on your list, letting them know they’re still invited.
for (var i = 0; i < guestList.length; i++) {
    console.log("Hi ".concat(guestList[i], ", I am happy to inform you that you are still invited."));
}
/*
Remove the last two names from your list, so you have an empty list.
Print your list to make sure you actually have an empty list at the end of your program.
*/
for (var j = 0; j < guestList.length; j++) {
    var am = guestList.pop();
}
console.log(guestList);
