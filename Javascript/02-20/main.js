var num = 1;

class car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.start = (key) => {};
        this.go = (speed) => {};
    }
}

class dealer {
    constructor(brand, address, ...cars) {
        this.brand = brand;
        this.address = address;
        this.cars = cars;
    }
}

class task{
    constructor(name, description){
        this.name = name;
        this.description = description;
        this.editTask = (name, description) => {};
        this.cancelTask = () =>{};
    }
}
class list {
    constructor(name, ...tasks) {
        this.name = name;
        this.tasks = tasks;
        this.deleteTask = (task) => {};
        this.addTask = (task) => {
            tasks.push(task);
        };
    }
}





function Person(name, address){
    this.name = name;
    this.address = address;
}

function Employee(name, address, badgeId, position){
    Person.call(this, name, address);
    this.badgeId = badgeId;
    this.position = position;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

function Company(name, address, employees){
    this.name = name;
    this.address = address;
    this.employees = employees;
    this.provideService = (employee, customer) =>{};
    this.addEmployee = (employee) => {
        if(employee.badgeId){
            this.employees.push(employee);
        }
    }
}



function Car(make, model, year, engine){
    this.make = make;
    this.model = model;
    this.year = year;
    this.engine = engine;
}

function Engine(cylinders, engineProp2, engineProp3){
    this.cylinders = cylinders;
    this.engineProp2 = engineProp2;
    this.engineProp3 = engineProp3;
}
let v6turbo = new Engine(2, 'i dont know anything about cars', 'need for speed');
let myCar = new Car('nissan', 'Gt-R', 2015, v6turbo)
console.log(myCar);

