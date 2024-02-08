// ! Classess, Acces Modifier Private&Public
// ! Private means Employees property in 7th line only accessible from inside the class: department1.addEmployees('A') NOT outside: department1.employees[2] = 'A'
// ! Public means accessible from outside and inside. All properties are public in default and you dont need to write
// ! Readonly force to NOT change properties values
// ! Protected is like Private, In protected properties are available in all class (base, inheritance) but unlike private is available only base class not inheritance
// ! Static Class-in properties kimi davranir onu yaratmaq ucun new acar sozunden istifade olunmur bir basa olaraq className.staticProperty yazaraq el catan olur
// * Singleton class is configured, you don't create it with "new" but by calling a method which then ensures that only one instance of the class exists at any time
class Department {
    readonly university: string;                                                     // ! after constructor this.university
    public faculty: string;
    private employees: string[] = [];
    protected worker: string[] = [];
    static weekday: string = 'Friday';                  // Todo: Static method is a method that you call directly on a class, not on an object created based on it.

    constructor(academy: string, branch: string) {
        this.university = academy;
        this.faculty = branch;
    }

    static createEmployee(firstname: string) {                               // Todo: Static bildirirki bu her yerden el catandir class-in propertiesi kimi
        return { name: firstname }
    }

    describe() {
        console.log('University: ' + this.university);
    }

    addEmployees(employee: string) {
        // this.university = 'ADNSU;                                        // ! Cannot assign to 'university' because it is a READONLY property.
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {                                      // Department-den miras alir yeni butun properties (constructors) bura kocur
    admins: string[];                                                        // Instead we write it into constructor (it is same)

    constructor(academy: string, admins: string[]) {
        super(academy, 'Backend');                                           // ! Super calls the constructor (properties) of base Department Class
        this.admins = admins
    }
}

class HelpDesk extends Department {
    constructor(academy: string, private reports: string[]) {
        super(academy, 'Kadrlar Sobesi');
    }

    addWorkers(name: string) {
        if (name === 'Elsen') {
            return;
        }
        this.worker.push(name);
    }

    addReports(text: string) {
        this.reports.push(text)
    }

    printReports() {
        console.log(this.reports);
    }
}

const department1 = new Department('ASOIU', 'Geophysical Engineering');     // ! This one goes to constructor because based on Department Class
console.log(department1);                                                   // Department {university: 'ASOIU', faculty: 'Geophysical Engineering'}
// const departmentIT1 = new ITDepartment('ASOIU', 'Computer Science');     // ! Inheritance olduqu ucun class ITDepartment ici bos olsada Department-i qebul edir
// console.log(departmentIT1);                                              // ITDepartment {university: 'ASOIU', faculty: 'Computer Science'}
department1.describe()                                                      // University: ASOIU

const department2 = { academy: department1.describe };                      // ! This one is NOT based on Department Class that's why yield to undefined
department2.academy();                                                      // University: undefined 

department1.addEmployees('Fuad');
department1.addEmployees('Rauf');
department1.printEmployeeInformation();                                     // 2 and (2) ['Fuad', 'Rauf']
department1.faculty = "GKF";                                                // ! facult in Department class is PUBLIC that's why we can manipulate it 
console.log(department1);                                                   // Department {university: 'ASOIU', faculty: 'GKF'}
// department1.employees[2] = 'Mecid';                                      // ! It works if it is not PRIVATE in front of employees property
// department1.printEmployeeInformation();                                  // 3 and (3) ['Fuad', 'Rauf', 'Mecid']

const departmentIT1 = new ITDepartment('ASOIU', ['Ali', 'Max', 'Rza']);     // ! ITDepartment class icinde deyisiklik oldu array artirildi
console.log(departmentIT1);          // ITDepartment {employees: Array(0), university: 'ASOIU', faculty: 'Backend', admins: (3) ['Ali', 'Max', 'Rza']}

const helpdesk1 = new HelpDesk('3rd Floor', []);
console.log(helpdesk1);              // HelpDesk {employees: Array(0), university: '3rd Floor', faculty: 'Kadrlar Sobesi', reports: []}
helpdesk1.addReports('All Reposts have been checked');
console.log(helpdesk1);              // HelpDesk {employees: Array(0), university: '3rd Floor', faculty: 'Kadrlar Sobesi', reports: [All Reposts have been checked]}
helpdesk1.printReports();            // ['All Reposts have been checked']
helpdesk1.addWorkers('Elsen');       // ! It does NOT go to worker
console.log(helpdesk1);              // HelpDesk {employees: Array(0), worker: [], university: '3rd Floor', faculty: 'Kadrlar Sobesi', reports: Array(1)}
helpdesk1.addWorkers('Eli');         // ! It go to worker
console.log(helpdesk1);              // HelpDesk {employees: Array(0), worker: ['Eli'], university: '3rd Floor', faculty: 'Kadrlar Sobesi', reports: Array(1)}

const newEmployee = Department.createEmployee('Turgut');        // ! createEmployee STATIC olduqu ucun new sozunden istifade etmeden birbasa Department elcatandir
console.log(newEmployee, Department.weekday);                   // {name: 'Turgut'} 'Friday'




// ! Interface: describe structure of objects or function types and force classes to have certain features. But can't store arbitrary types like union types
// ! Implements: Checks that the class can be treated as the interface type
// Todo: For interfaces you can inherit from multiple interfaces, but for classes you can inherit only one class
// Todo: Interface only accepts Readonly property not other ones (public, private, protected)
interface Person {
    firstname: string;
    lastName?: string;                   // ! Optional parameter (?) interfaceden toreyen interfacede diger propertiler kimi olmasi mecbur olmuyan parametr demekdir
    greet(text: string): void;
}

let person1: Person;
person1 = {
    firstname: 'Fuad',
    greet(text) {
        console.log(text + ' ' + this.firstname);
    }
}
console.log(person1);                   // {firstname: 'Fuad', greet: ƒ}
person1.greet('Hello');                 // Hello Fuad 

class Caucasian implements Person {           // Type 'Caucasian' is missing the following properties from type 'Person': firstname, age, greet
    firstname: string;
    age = 25;

    constructor(ad: string) {
        this.firstname = ad;
    }

    greet(text: string) {
        console.log(text + ' ' + this.firstname);
    }
}


// ! Function Types
type AddFn = (param1: number, param2: number) => number;
let addition: AddFn;
addition = (num1: number, num2: number) =>num1 + num2;
console.log(addition(5, 7));

interface AddFn2 {
    (param1: number, param2: number): number;
}
let plus: AddFn2;
plus = (num1: number, num2: number) => num1 + num2;
console.log(plus(6, 7));
