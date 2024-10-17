import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter employee ID: ', (empId: string) => {
    rl.question('Enter employee name: ', (empName: string) => {
        rl.question('Enter employee email: ', (email: string) => {
            let EmployeeObject = {
                empId: empId,
                empName: empName,
                email: email
            };
            console.log(EmployeeObject);
            rl.close();
        });
    });
});
