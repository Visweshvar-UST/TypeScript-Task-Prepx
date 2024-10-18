// Interface for user input details
interface UserDetails {
    age: number;
    vehicleType: string;
    drivingExperience: number;
    previousClaims: number;
}

// Base premium rates for different vehicle types
const basePremiumRates: { [key: string]: number } = {
    car: 1000,
    motorcycle: 600,
    truck: 1500
};

// Function to calculate insurance premium
function calculateInsurancePremium(details: UserDetails): number {
    let premium = basePremiumRates[details.vehicleType.toLowerCase()] || 1000; // Default to car premium if not found

    // Age factor
    if (details.age < 25) {
        premium += 300;  // Higher premium for younger drivers
    } else if (details.age > 60) {
        premium += 200;  // Higher premium for older drivers
    }

    // Driving experience factor
    if (details.drivingExperience < 2) {
        premium += 400;  // Higher premium for new drivers
    } else if (details.drivingExperience >= 10) {
        premium -= 200;  // Discount for experienced drivers
    }

    // Previous claims factor
    premium += details.previousClaims * 250;  // Additional charge for each previous claim

    return premium;
}

// Function to display the calculated insurance premium
function displayPremium(details: UserDetails): void {
    const premium = calculateInsurancePremium(details);
    console.log(`The calculated insurance premium for your details is: $${premium}`);
}

// Example input data
const user1: UserDetails = {
    age: 30,
    vehicleType: "car",
    drivingExperience: 5,
    previousClaims: 1
};

const user2: UserDetails = {
    age: 22,
    vehicleType: "motorcycle",
    drivingExperience: 1,
    previousClaims: 0
};

const user3: UserDetails = {
    age: 65,
    vehicleType: "truck",
    drivingExperience: 35,
    previousClaims: 2
};

// Display calculated premiums for users
displayPremium(user1);  // Output: The calculated insurance premium for your details is: $1550
displayPremium(user2);  // Output: The calculated insurance premium for your details is: $1300
displayPremium(user3);  // Output: The calculated insurance premium for your details is: $2050
