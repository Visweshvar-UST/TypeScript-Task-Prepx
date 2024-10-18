let employeeObject = {
    empId : "EMP12",
    empName : "visweshvar",
    email : "viswa@gmail.com"
};
console.log(employeeObject);

// tsc employee-obj.ts
// node employee-obj.js

class a {
    name : string;
    age : number;
}

interface empInterface {
    id : number,
    name : string
};

const  employeeObject : empInterface = {
    id : 12,
    name : "visweshvar"
}
console.log(employeeObject);

