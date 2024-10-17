"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter employee ID: ', function (empId) {
    rl.question('Enter employee name: ', function (empName) {
        rl.question('Enter employee email: ', function (email) {
            var EmployeeObject = {
                empId: empId,
                empName: empName,
                email: email
            };
            console.log(EmployeeObject);
            rl.close();
        });
    });
});
