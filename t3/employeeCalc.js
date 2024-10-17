var employees = [
    { name: "viswa", department: "HR", salary: 3000 },
    { name: "axel", department: "IT", salary: 5000 },
    { name: "pjo", department: "IT", salary: 5000 },
];
function calculateSalariesByDep(dep) {
    var count = 0;
    employees.forEach(function (e) {
        if (e.department === dep) {
            count += e.salary;
        }
    });
    return count;
    // return employees
    //     .filter(
    //         employee => employee.department === dep)
    //     .reduce((acc, current) => acc + current.salary, 0);
}
console.log(calculateSalariesByDep('IT'));
