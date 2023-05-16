// class Person{
//     name: string;
// }
// const tomek: {name: string} = {
//     name: 'Tomek'
// };
// const person: Person = tomek;
// console.log(person);
var Person = /** @class */ (function () {
    function Person(msg) {
        this.msg = msg;
    }
    // msg: string;
    Person.prototype.speak = function () {
        console.log(this.msg);
    };
    return Person;
}());
var tomek = new Person('Hello');
var alex = new Person('Hi');
var aneta = new Person('Witaj');
// tomek.msg = 'Hello';
// alex.msg = 'Hi';
// aneta.msg = 'Witaj';
tomek.speak();
alex.speak();
aneta.speak();
