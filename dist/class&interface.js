"use strict";
class Department {
    constructor(academy, branch) {
        this.employees = [];
        this.worker = [];
        this.university = academy;
        this.faculty = branch;
    }
    static createEmployee(firstname) {
        return { name: firstname };
    }
    describe() {
        console.log('University: ' + this.university);
    }
    addEmployees(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.weekday = 'Friday';
class ITDepartment extends Department {
    constructor(academy, admins) {
        super(academy, 'Backend');
        this.admins = admins;
    }
}
class HelpDesk extends Department {
    constructor(academy, reports) {
        super(academy, 'Kadrlar Sobesi');
        this.reports = reports;
    }
    addWorkers(name) {
        if (name === 'Elsen') {
            return;
        }
        this.worker.push(name);
    }
    addReports(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
}
const department1 = new Department('ASOIU', 'Geophysical Engineering');
console.log(department1);
department1.describe();
const department2 = { academy: department1.describe };
department2.academy();
department1.addEmployees('Fuad');
department1.addEmployees('Rauf');
department1.printEmployeeInformation();
department1.faculty = "GKF";
console.log(department1);
const departmentIT1 = new ITDepartment('ASOIU', ['Ali', 'Max', 'Rza']);
console.log(departmentIT1);
const helpdesk1 = new HelpDesk('3rd Floor', []);
console.log(helpdesk1);
helpdesk1.addReports('All Reposts have been checked');
console.log(helpdesk1);
helpdesk1.printReports();
helpdesk1.addWorkers('Elsen');
console.log(helpdesk1);
helpdesk1.addWorkers('Eli');
console.log(helpdesk1);
const newEmployee = Department.createEmployee('Turgut');
console.log(newEmployee, Department.weekday);
let person1;
person1 = {
    firstname: 'Fuad',
    greet(text) {
        console.log(text + ' ' + this.firstname);
    }
};
console.log(person1);
person1.greet('Hello');
class Caucasian {
    constructor(ad) {
        this.age = 25;
        this.firstname = ad;
    }
    greet(text) {
        console.log(text + ' ' + this.firstname);
    }
}
let addition;
addition = (num1, num2) => num1 + num2;
console.log(addition(5, 7));
let plus;
plus = (num1, num2) => num1 + num2;
console.log(plus(6, 7));
