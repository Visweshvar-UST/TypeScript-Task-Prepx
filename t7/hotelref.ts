// Room Interface
interface Room {
    roomNumber: number;
    roomType: string;
    pricePerNight: number;
    isBooked: boolean;
}

// Hotel Class to manage room bookings
class Hotel {
    private rooms: Room[] = [];

    // Add rooms to the hotel
    addRoom(roomNumber: number, roomType: string, pricePerNight: number) {
        const room: Room = {
            roomNumber: roomNumber,
            roomType: roomType,
            pricePerNight: pricePerNight,
            isBooked: false
        };
        this.rooms.push(room);
    }

    // Check if the room is available
    checkAvailability(roomNumber: number): boolean {
        const room = this.rooms.find(r => r.roomNumber === roomNumber);
        if (!room) {
            console.log(`Room number ${roomNumber} does not exist.`);
            return false;
        }
        return !room.isBooked;
    }

    // Book the room for a number of days and calculate total cost
    bookRoom(roomNumber: number, stayDays: number): void {
        const room = this.rooms.find(r => r.roomNumber === roomNumber);
        if (room && !room.isBooked) {
            room.isBooked = true;
            const totalCost = room.pricePerNight * stayDays;
            console.log(`Room number ${roomNumber} is booked for ${stayDays} days. Total cost: $${totalCost}`);
        } else if (room) {
            console.log(`Room number ${roomNumber} is already booked.`);
        } else {
            console.log(`Room number ${roomNumber} does not exist.`);
        }
    }

    // List all available rooms
    listAvailableRooms(): void {
        const availableRooms = this.rooms.filter(room => !room.isBooked);
        if (availableRooms.length > 0) {
            console.log("Available Rooms:");
            availableRooms.forEach(room => {
                console.log(`Room Number: ${room.roomNumber}, Type: ${room.roomType}, Price per Night: $${room.pricePerNight}`);
            });
        } else {
            console.log("No rooms available.");
        }
    }
}

// Create a hotel instance
const myHotel = new Hotel();

// Add rooms to the hotel
myHotel.addRoom(101, "Single", 100);
myHotel.addRoom(102, "Double", 150);
myHotel.addRoom(103, "Suite", 300);
myHotel.addRoom(104, "Single", 100);

// Check available rooms before booking
console.log("Checking room availability before booking:");
myHotel.listAvailableRooms();

// Booking a room
console.log("\nBooking room 101 for 3 days:");
myHotel.bookRoom(101, 3);

// Try booking the same room again
console.log("\nTrying to book room 101 again:");
myHotel.bookRoom(101, 2);

// Check available rooms after booking
console.log("\nChecking room availability after booking:");
myHotel.listAvailableRooms();

// Booking another room
console.log("\nBooking room 102 for 5 days:");
myHotel.bookRoom(102, 5);

// Check available rooms after booking multiple rooms
console.log("\nFinal room availability:");
myHotel.listAvailableRooms();
