import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Theater configuration: 5 rows with 5 seats in each row
const theater: string[][] = Array(5).fill(null).map(() => Array(5).fill("Available"));

function displaySeats(): void {
    console.log("\nTheater Seat Status:");
    theater.forEach((row, rowIndex) => {
        console.log(`Row ${rowIndex + 1}: ${row.join(' | ')}`);
    });
    console.log();
}

// Book a seat
function bookSeat(row: number, seat: number): void {
    if (theater[row][seat] === "Available") {
        theater[row][seat] = "Booked";
        console.log(`Seat ${seat + 1} in row ${row + 1} has been booked.`);
    } else {
        console.log(`Seat ${seat + 1} in row ${row + 1} is already booked!`);
    }
}

// Cancel a seat booking
function cancelSeat(row: number, seat: number): void {
    if (theater[row][seat] === "Booked") {
        theater[row][seat] = "Available";
        console.log(`Booking for seat ${seat + 1} in row ${row + 1} has been canceled.`);
    } else {
        console.log(`Seat ${seat + 1} in row ${row + 1} is not booked!`);
    }
}

// Ask user what action they want to take
function askUserAction(): void {
    rl.question('Enter 1 to book a seat, 2 to cancel a seat, or 3 to exit: ', (option) => {
        if (option === '1') {
            bookASeat();
        } else if (option === '2') {
            cancelASeat();
        } else if (option === '3') {
            console.log("Exiting...");
            rl.close();
        } else {
            console.log("Invalid option. Please try again.");
            askUserAction();
        }
    });
}

// Function to book a seat
function bookASeat(): void {
    rl.question('Enter row number (1-5): ', (rowInput) => {
        const row = parseInt(rowInput) - 1;
        rl.question('Enter seat number (1-5): ', (seatInput) => {
            const seat = parseInt(seatInput) - 1;

            if (row >= 0 && row < 5 && seat >= 0 && seat < 5) {
                bookSeat(row, seat);
            } else {
                console.log("Invalid seat selection.");
            }
            displaySeats();
            askUserAction();
        });
    });
}

// Function to cancel a seat booking
function cancelASeat(): void {
    rl.question('Enter row number (1-5): ', (rowInput) => {
        const row = parseInt(rowInput) - 1;
        rl.question('Enter seat number (1-5): ', (seatInput) => {
            const seat = parseInt(seatInput) - 1;

            if (row >= 0 && row < 5 && seat >= 0 && seat < 5) {
                cancelSeat(row, seat);
            } else {
                console.log("Invalid seat selection.");
            }
            displaySeats();
            askUserAction();
        });
    });
}

// Display the initial seat arrangement and start user interaction
displaySeats();
askUserAction();

