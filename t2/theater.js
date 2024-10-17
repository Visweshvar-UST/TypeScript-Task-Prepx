"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function askUserAction() {
    rl.question('Enter row number (1-5): ', function (row) {
        rl.question('Enter column number (1-5): ', function (clm) {
            console.log(row + " " + clm);
        });
    });
}
askUserAction();
