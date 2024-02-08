// ! TypeScript Data Types (By specifying the data types, type safety is ensured)
// ! Type Basics: In TypeScript declared data TYPES never change but their values can be change. Yeni ilkin olaraq string data type vermisense hec zaman deyismiyecek
// Todo: Main Types      : string, number, boolean, null and undefined
// Todo: Array Types     : Array<type>, Type[]
// Todo: Any and Unknown : Both accept any type of data but Unknown have strong security
// Todo: Void and Never  : Void doesnt return anything, Never comes with throw new Error()
// Todo: Enum            : Enumarasyon türleri ve kullanım senaryoları


// ! String, Number, Boolean
const firstName: string = "Murat";
const age: number = 55;
const isActive: boolean = true;


// ! Array
const firstNames: string[] = ["Murad", "Vuranok"];
const ages: Array<number> = [1, 2, 3, 4, 5];
// const mixValues: Array<string> = ["Murat", "Vuranok", 777];         // Todo: Yield to error
const mixValues2: Array<any> = ["Murat", "Vuranok", 777];              // Todo: Eliminating error


// ! Objetcs
// Todo: Obyektlerde ilkin olaraq hansi KEY-ler verilibse onlar deyisdirmek silmke ya da artirmaq olmaz
let newObject: object | {};
newObject = [1, 2, 3];                          // Todo: Bu halda problem yaratmir cunki Array ozude bir Obyektkdir

let newObject2: { name: string, surname: string, age: number };
// newObject2 = [1, 2, 3]                       // Todo Bu halda problem yaradir
newObject2 = { name: "Fuad", surname: "Babayev", age: 25 };


// ! Tuple: [string, string, number] icerisindeki deyerleri ancaq gosterildiyi veziyyetde olmalidir ['Hello', 'World', 7] 
// Todo: eger 3 deyer gosterilibse 3 deyer olmalidir. Eslinde burada push edende ERROR vermir ve Tuplenin lengthi deyisir ama bu yazilis usulu duzgub hesab edilmir
// Todo: Ancaq [string, number] bu tuplelerin icindeki deyerler deyisdiriler biler ama DATA TYPEs ilkin veziyyetdeki kimi olmalidir
const person: {
    firstName: string,
    age: number,
    isEmployee: boolean,
    friends: string[],
    tuple: [string, string, number]
} = {
    firstName: 'Fuad',
    age: 25,
    isEmployee: false,
    friends: ['Rauf', 'Ayhan', 'Elsen'],
    tuple: ['Baku', 'Ahkmedli', 19]
}
console.log(person);                                         // {firstName: 'Fuad', age: 25, isEmployee: false, friends: Array(3), tuple: 'Baku', 'Ahkmedli', 19]}
console.log(person.firstName);                               // Fuad
for (const friend of person.friends) { console.log(friend) } // Rauf      Ayhan        Elsen
person.tuple[1] = 'Neapol';
console.log(person);                                         // {firstName: 'Fuad', age: 25, isEmployee: false, friends: Array(3), tuple: 'Baku', 'Neapol', 19]}


// ! Functions
// ! Void and Never
// ! Funksiyalara Data type vermek yaxsi seydir amma calisin funksiyanin parametrlerine data type verinki bu TypeScript avtomatik ozu funksiyaya data Type versin
// ! Void metodun (funksiyanin) geriye herhansi deyer donmeyeceyini gosterir. Eslinde Void evezine undefined gostere bilerdik ama bu mentiqsizdir 
// Todo: Geriye deyer donen metodlarda ise gerie donen deyerin tipini qeyd edirik, eger geriye donen deyerin tipini bilmirikse yad HECNE yazilmir yada ANY yazilir
// Todo: Never metodu geriye hec bir zaman deyer dondermiyeceyini (sonsuzluqunu) bildirir. Return etsek error verecek. Esasen throw new Error()-da istifade olunur
function add(param1: number, param2: number) { return param1 + param2 }           //* Uzerinde hover etsek function add(param1: number, param2: number): NUMBER-dir
function warnUser(): void { console.log('This is my warning message') } warnUser();                          // * function warnUser(): VOID
function warnUser2(name: string): undefined { console.log(name); return } console.log(warnUser2('Ali'));     // * function warnUser2(): UNDEFINED
function greetUser(name: string) { console.log('Hello ' + name) }; greetUser('Fuad');                        // * function greetUser(name: string): VOID
function getName(): string { return "Murat"; } console.log(getName());
function error(message: string): never { throw new Error(message) }
function infiniteLoop(): never { while (true) { } }

function total(param1: number, param2: number, param3: boolean, param4: string) {
    const result = param1 + param2;      // Todo: Otherwise in console.log() it will string concatenate and Result : 52.8 
    if (param3) {
        console.log(param4 + result);    // Todo: We do calculation beforehan in order to not to concatebate and Result : 7.8 
    }
    return result;
}
total(5, 2.8, true, 'Result : ');

// ! Function Data Types
function sum(n1: number, n2: number) { return n1 + n2 };
function show(n1: number) { console.log(n1) };
let combineValues: Function;          // Todo: bu cur yazilis normaldir ama biz bura istenilen data type geri donduren Funksiyalari yaza bilerik deye prablem olacaq
combineValues = sum;                  // Todo: Meselen burada combineValues-nin Data type-sini Function-dir 2 parametr qebul edib deyer RETURN edir
console.log(combineValues(3, 5));     // Todo: Normal olaraq isleyib 8 cavabini qaytaracaq
combineValues = show;                 // Todo: Burada da Data type Function-dir. Ama problem o zaman yaranirki biz yuxarida Funksiyanin data typesini vermekdik VOID
console.log(combineValues(3));        // Todo: Buna gorede burada sadece Function olaraq qebul edib RETURN etmeli olduqu ucun cavabda 3 ve undefined verir

//* Yuxaridaki Error qarsisini almaq ucun her funksiyanin data type-sini vermek lazimdir Ve calis her zaman bu sekilde yaz
let combineValues2: (n1: number, n2: number) => number;  // Todo: Burada ise teyin etdikki Function olacaq 2 number parameter alacaq ve number RETURN edecek
combineValues2 = sum; console.log(combineValues2(3, 5));                   // Todo: Bu halda normal olaraq isleyecek
// combineValues2 = show; console.log(combineValues2(3, 5));               // ! It definitely gives as an Error below
// Type '(n1: number) => void' is not assignable to type '(n1: number, n2: number) => number'. Type 'void' is not assignable to type 'number'

// ! Function Types & Callbacks
function getFunction(int1: number, int2: number, callback: (num: number) => void) {
    let result = int1 + int2;
    callback(result);
}
console.log(getFunction(10, 30, function (result) { console.log(result) }));


// ! ENUMS
// Todo: Default writing: enum ... {UPPERCASE (most of the time )} ve bu deyerlerin qarisini bos qoyduqda ozu avtomatik olaraq ardicil reqemlerle dolduracaq
enum Role {
    ADMIN,                  // 0
    READ_ONLY,              // 1
    AUTHOR = 'integer',     // 'integer'
    REFERENCE = 100,        // 100
    REFERENCE2              // 101
}
console.log(Role);   // {0: 'ADMIN', 1: 'READ_ONLY', 100: 'REFERENCE', 101: 'REFERENCE2', ADMIN: 0, READ_ONLY: 1, AUTHOR: 'integer', REFERENCE: 100, REFERENCE2: 101}

const person2: {} = {
    firstName: 'Rauf',
    favoriteNumber: Role.REFERENCE2,
    number1: Role.READ_ONLY,
    string: Role.AUTHOR
}
console.log(person2);           // {firstName: 'Rauf', favoriteNumber: 101, number1: 1, string: 'integer'}


// ! Union Types
// Todo: Eger ferqli data tipler alacaqsa Union typesden istifade olunur
let stringOrNumber: string | number;
stringOrNumber = 777; console.log(stringOrNumber);          // 777
stringOrNumber = 'ZZZ'; console.log(stringOrNumber);        // ZZZ

const unionArray: (string | number | boolean)[] = [];
unionArray.push('Ronaldo');
unionArray.push(7);
unionArray.push(true);
// unionArray.push(undefined);                              // Todo: Because we dont set undefined above
console.log(unionArray);                                    // (3) ['Ronaldo', 7, true]

function combine(param1: number | string | boolean, param2: number | string | boolean) {
    let result;
    if (typeof param1 === 'number' && typeof param2 === 'number') result = param1 + param2;
    else if (typeof param1 === 'boolean' && typeof param2 === 'boolean') result = Number(param1) + Number(param2);
    else result = param1.toString() + param2.toString();
    return result;
}
console.log(combine(10, 77));                   // 87
console.log(combine('Hello', 'World'));         // HelloWorld
console.log(combine(true, false));              // 1 + 0 = 1
console.log(combine(10, true));                 // 10true                                


// ! Any and Unknown
// Todo: Istenilen zaman data typelerini deyise bilerler
// Todo:  ANY TIP kontrolu etmir guvenliyi zeifdir (Unable type checking)
// Todo:  Unknown TIP kontrolu edir guvenliyi gucludur
let notSure: any = 777;                     // * Number
notSure = "maybe a string instead";         // * String
notSure = false;                            // * Boolean

let uncertain: unknown = 4;
uncertain = "maybe a string instead";
uncertain = false;

if (typeof uncertain === "boolean") console.log('Boolean');
else if (typeof uncertain === "number") console.log('number');
else if (typeof uncertain === "string") console.log('string');


// ! Literal Types
function combine2(
    param1: number | string,
    param2: number | string,
    param3: 'as-number' | 'as-text'
) {
    if (typeof param1 === 'number' && typeof param2 === 'number' || param3 === 'as-number') return +param1 + +param2;
    else return param1.toString() + param2.toString();
}
console.log(combine2(10, 77, 'as-number'));                  // 87
console.log(combine2('10', 77, 'as-number'));                // 87
console.log(combine2('10', '77', 'as-number'));              // 87
console.log(combine2(10, 77, 'as-text'));                    // 87
console.log(combine2('10', 77, 'as-text'));                  // 1077
console.log(combine2('10', '77', 'as-text'));                // 1077


// ! Aliases/Custom Types (using with type keyword). Type aliases can be used to "create" your own types
// Todo: type Customname (with Capitalize)
type Combinable = number | string | boolean;
type ConversionDescription = 'as-number' | 'as-text';

// * let idontknow: number | string | boolean;  
let idontknow: Combinable = 'Something';
idontknow = 'Hello'; console.log(idontknow);   // Hello
idontknow = 1998; console.log(idontknow);      // 1998
idontknow = true; console.log(idontknow);      // true


// ! Exclamation mark (!) basically tells to TypeScripts that such button will exist while compilation
const button = document.querySelector('button')!;   
button.addEventListener('click', function(){
    console.log('I have clicked once');    
});

console.log('------TypeScript Basics Part Finished------');