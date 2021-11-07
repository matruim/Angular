// Primatives
let age: number; // lowercase is the primative type
age = 12;
age = 12.5;
// age = '12'; // errors because string isn't an number

let givenName: string;
givenName = "Jared";
givenName = "Danell";
// givenName = 2  //errors because a number isn't a string

let isTeacher: boolean;
isTeacher = false;
isTeacher = true;


// Complex Types
let hobbies: string[] //array of strings
let hobby: string //single string not an array
hobbies = ['Computers', "Video Games"]

let person: {
    name: string;
    age: number;
};
person = {
    name: 'Jared',
    age: 39
}
person = {
    name: "Danell",
    age: 40,
    // isTeacher: true // errors because it wasn't defined in the type
}
let people: {
    name: string;
    age: number;
}[]

people = [{
    name: "Jared",
    age: 39
},{
    name: "Danell",
    age: 40
}]

let stuff: any //can shove anything in this like it is default javascript

// Type inference
let course = "Test"
// course = 1234 //errors because it was inferred as a string

//Union Type
let course2: string | number = 'Test'
course2 = 1234

// aliases
type Person = {
    name: string;
    age: number
}
let person3: Person
let person4: Person[]
person3 = {
    name: 'Jared',
    age: 39
}
person4 = [{
    name: "Jared",
    age: 39
},{
    name: "Danell",
    age: 40
}]

//Functions and Types
function add(a:number, b:number) : number{ return a+b} //parameters and return type defined
function printString(value: any){ console.log(value)} // return type is void

// Generics
function insertAtBeginning(array: any[], value: any){return [value, ...array]} //return type is any[]

function insertAtBeginningGeneric<T>(array: T[], value: T){return [value, ...array]} //returns type is what you passed in as the generic


