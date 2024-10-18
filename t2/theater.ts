import * as readline from "readline";

const rl  = readline.createInterface({
     input: process.stdin,
     output: process.stdout
});

const sceats: String[][] = Array(5).fill(null).map(() => Array(5).fill('available'))

function displaySeats(){
    sceats.forEach((seats,ind)=>{
        console.log(ind+1+"  "+seats.join(" | "));
    });
}

function bookticket(){
    rl.question('Enter row number (1-5): ', (rowinp) => {
        rl.question('Enter column number (1-5): ', (clminp) => {
            let row = parseInt(rowinp);
            let clm = parseInt(clminp);
            console.log(row+" "+clm);
            if(sceats[row-1][clm-1] === 'available'){
                sceats[row-1][clm-1] = 'booked'
                console.log("Ticket booked");
            }
            displaySeats();
        });
    });
}

function askUserAction(): void {
    rl.question('Enter row number (1-5): ', (row) => {
        rl.question('Enter column number (1-5): ', (clm) => {
            console.log(row+" "+clm);
        });
    });
}

displaySeats();
bookticket();
// askUserAction();