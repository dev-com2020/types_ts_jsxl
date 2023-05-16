// let obj: {name:string, age:number} = {
//     name: "Bill",
//     age: 25
// };
let obj: {name:string} & {age:number} & {plec: string} = {
    name: "Bill",
    age: 25,
    plec: "m"
};

let union: null | {name:string} = null;
// union = {name: "Bill"};

let literal: "Jan" |"Tomek"|"Aneta"| "Kowalski" = "Jan";
literal = "Kowalski"
literal = "Tomek"

type Points = 1 | 2 | 3 | 4 | 5;
let score: Points = 1;
console.log(score);

type ComplexPerson = {
    name: string,
    age: number,
    birth: Date,
    married: boolean,
    address: string
}
let person: ComplexPerson = {
    name: "Bill",
    age: 25,
    birth: new Date(),
    married: false,
    address: "ul. Kolorowa 12"
}

console.log(literal);
console.log(union);
console.log(obj);