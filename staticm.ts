class ClassA {
    static lastTypeName: string;
    constructor(private typeName: string) {}

    run() {
        ClassA.lastTypeName = this.typeName;
    }
    // static getFullName() {
    //     return "ClassA " + ClassA.typeName;
    // }
}

const a = new ClassA("a");
const b = new ClassA("b");
a.run();
b.run();
console.log(ClassA.lastTypeName); // b

// const a = new ClassA();
// console.log(a.getFullName()); // error
// console.log(ClassA.getFullName());