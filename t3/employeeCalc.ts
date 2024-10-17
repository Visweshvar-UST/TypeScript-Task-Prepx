interface employee {
    name: string;
    department: string;
    salary: number;
}

const employees: employee[] = [
    { name: "viswa", department: "HR", salary: 3000 },
    { name: "axel", department: "IT", salary: 5000 },
    { name: "pjo", department: "IT", salary: 5000 },
];

function calculateSalariesByDep(dep: string): number {
    let count: number = 0;
    employees.forEach((e) => {
        if(e.department === dep){
            count+=e.salary;
        }
    });

    return count;

    
    // return employees
    //     .filter(
    //         employee => employee.department === dep)
    //     .reduce((acc, current) => acc + current.salary, 0);
}

console.log(calculateSalariesByDep('IT'));