const employees = [];

class Employee {
    constructor(name, id, email, department) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.department = department;
    }

    startDate (startDate){
        this.startDate = startDate;
        employees.push(this);
    }

    static getAll() {
        employees.forEach(emp => console.log(emp));
    }
}

const Jane = new Employee('Jane Gondall', '56342', 'jgodal@ciccc.com', 'acconting');
Jane.startDate('12/04/2020');
const John = new Employee('John Smith', '56344', 'jsmith@ciccc.com', 'teacher');
John.startDate('12/03/2020');


// console.log(Jane);x
// console.log(employees);

Employee.getAll();