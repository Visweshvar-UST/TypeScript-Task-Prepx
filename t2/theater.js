"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var sceats = Array(5).fill(null).map(function () { return Array(5).fill('available'); });
function displaySeats() {
    sceats.forEach(function (seats, ind) {
        console.log(ind + 1 + "  " + seats.join(" | "));
    });
}
function bookticket() {
    rl.question('Enter row number (1-5): ', function (rowinp) {
        rl.question('Enter column number (1-5): ', function (clminp) {
            var row = parseInt(rowinp);
            var clm = parseInt(clminp);
            console.log(row + " " + clm);
            if (sceats[row - 1][clm - 1] === 'available') {
                sceats[row - 1][clm - 1] = 'booked';
                console.log("Ticket booked");
            }
            displaySeats();
        });
    });
}
function askUserAction() {
    rl.question('Enter row number (1-5): ', function (row) {
        rl.question('Enter column number (1-5): ', function (clm) {
            console.log(row + " " + clm);
        });
    });
}
displaySeats();
bookticket();
// askUserAction();
