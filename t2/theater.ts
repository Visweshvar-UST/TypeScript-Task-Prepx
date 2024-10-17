import * as readline from "readline";

const rl  = readline.createInterface({
     input: process.stdin,
     output: process.stdout
});

const sceats: String[][] = Array(5).fill(null).map(() => Array(5).fill('available'))




function displaySeats(){
    sceats.forEach((rowIndex,rowInput)=>{
        
    });
}

function askUserAction(): void {
    rl.question('Enter row number (1-5): ', (row) => {
        rl.question('Enter column number (1-5): ', (clm) => {
            console.log(row+" "+clm);
        });
    });
}

askUserAction();