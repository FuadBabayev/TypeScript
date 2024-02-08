"use strict";
const firstName = "Murat";
const age = 55;
const isActive = true;
const firstNames = ["Murad", "Vuranok"];
const ages = [1, 2, 3, 4, 5];
const mixValues2 = ["Murat", "Vuranok", 777];
let newObject;
newObject = [1, 2, 3];
let newObject2;
newObject2 = { name: "Fuad", surname: "Babayev", age: 25 };
const person = {
    firstName: 'Fuad',
    age: 25,
    isEmployee: false,
    friends: ['Rauf', 'Ayhan', 'Elsen'],
    tuple: ['Baku', 'Ahkmedli', 19]
};
console.log(person);
console.log(person.firstName);
for (const friend of person.friends) {
    console.log(friend);
}
person.tuple[1] = 'Neapol';
console.log(person);
function add(param1, param2) { return param1 + param2; }
function warnUser() { console.log('This is my warning message'); }
warnUser();
function warnUser2(name) { console.log(name); return; }
console.log(warnUser2('Ali'));
function greetUser(name) { console.log('Hello ' + name); }
;
greetUser('Fuad');
function getName() { return "Murat"; }
console.log(getName());
function error(message) { throw new Error(message); }
function infiniteLoop() { while (true) { } }
function total(param1, param2, param3, param4) {
    const result = param1 + param2;
    if (param3) {
        console.log(param4 + result);
    }
    return result;
}
total(5, 2.8, true, 'Result : ');
function sum(n1, n2) { return n1 + n2; }
;
function show(n1) { console.log(n1); }
;
let combineValues;
combineValues = sum;
console.log(combineValues(3, 5));
combineValues = show;
console.log(combineValues(3));
let combineValues2;
combineValues2 = sum;
console.log(combineValues2(3, 5));
function getFunction(int1, int2, callback) {
    let result = int1 + int2;
    callback(result);
}
console.log(getFunction(10, 30, function (result) { console.log(result); }));
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role["AUTHOR"] = "integer";
    Role[Role["REFERENCE"] = 100] = "REFERENCE";
    Role[Role["REFERENCE2"] = 101] = "REFERENCE2";
})(Role || (Role = {}));
console.log(Role);
const person2 = {
    firstName: 'Rauf',
    favoriteNumber: Role.REFERENCE2,
    number1: Role.READ_ONLY,
    string: Role.AUTHOR
};
console.log(person2);
let stringOrNumber;
stringOrNumber = 777;
console.log(stringOrNumber);
stringOrNumber = 'ZZZ';
console.log(stringOrNumber);
const unionArray = [];
unionArray.push('Ronaldo');
unionArray.push(7);
unionArray.push(true);
console.log(unionArray);
function combine(param1, param2) {
    let result;
    if (typeof param1 === 'number' && typeof param2 === 'number')
        result = param1 + param2;
    else if (typeof param1 === 'boolean' && typeof param2 === 'boolean')
        result = Number(param1) + Number(param2);
    else
        result = param1.toString() + param2.toString();
    return result;
}
console.log(combine(10, 77));
console.log(combine('Hello', 'World'));
console.log(combine(true, false));
console.log(combine(10, true));
let notSure = 777;
notSure = "maybe a string instead";
notSure = false;
let uncertain = 4;
uncertain = "maybe a string instead";
uncertain = false;
if (typeof uncertain === "boolean")
    console.log('Boolean');
else if (typeof uncertain === "number")
    console.log('number');
else if (typeof uncertain === "string")
    console.log('string');
function combine2(param1, param2, param3) {
    if (typeof param1 === 'number' && typeof param2 === 'number' || param3 === 'as-number')
        return +param1 + +param2;
    else
        return param1.toString() + param2.toString();
}
console.log(combine2(10, 77, 'as-number'));
console.log(combine2('10', 77, 'as-number'));
console.log(combine2('10', '77', 'as-number'));
console.log(combine2(10, 77, 'as-text'));
console.log(combine2('10', 77, 'as-text'));
console.log(combine2('10', '77', 'as-text'));
let idontknow = 'Something';
idontknow = 'Hello';
console.log(idontknow);
idontknow = 1998;
console.log(idontknow);
idontknow = true;
console.log(idontknow);
const button = document.querySelector('button');
button.addEventListener('click', function () {
    console.log('I have clicked once');
});
console.log('------TypeScript Basics Part Finished------');
