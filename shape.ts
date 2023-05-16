// class Person{
//     name: string;
// }

// const tomek: {name: string} = {
//     name: 'Tomek'
// };

// const person: Person = tomek;
// console.log(person);

class Person{
    constructor(
        private readonly msg: string,
        private age: number){}
    // #msg: string;
    speak(){
        // this.msg = 'Hello!!!';
        console.log(this.msg, this.age);
    }
}
const tomek = new Person('Hello',23);
const alex = new Person('Hi',33);
const aneta = new Person('Witaj',23);
// tomek.msg = 'Hello';
// alex.msg = 'Hi';
// aneta.msg = 'Witaj';
tomek.speak();
alex.speak();
aneta.speak();
