// Employee interface
interface Employee {
    name: string;
    department: string;
    salary: number;
}

// Array of Employees
const employees: Employee[] = [
    { name: "Alice", department: "HR", salary: 3000 },
    { name: "Bob", department: "IT", salary: 5000 },
    { name: "Charlie", department: "HR", salary: 3500 },
    { name: "David", department: "IT", salary: 4500 },
    { name: "Eva", department: "Finance", salary: 4000 },
    { name: "Frank", department: "Finance", salary: 3800 }
];

// Function to group employees by department and calculate total salary
function calculateSalariesByDep(employees: Employee[]): { [key: string]: number } {
    const salaryByDept: { [key: string]: number } = {};

    employees.forEach((employee) => {
        if (salaryByDept[employee.department]) {
            salaryByDept[employee.department] += employee.salary;
        } else {
            salaryByDept[employee.department] = employee.salary;
        }
    });

    return salaryByDept;
}

// Get the total salary per department
const totalSalariesByDept = calculateSalariesByDep(employees);

// Display the results
console.log("Total Salaries by Department:");
Object.keys(totalSalariesByDept).forEach((dept) => {
    console.log(`${dept}: $${totalSalariesByDept[dept]}`);
});
