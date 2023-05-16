var ClassA = /** @class */ (function () {
    function ClassA(typeName) {
        this.typeName = typeName;
    }
    ClassA.prototype.run = function () {
        ClassA.lastTypeName = this.typeName;
    };
    return ClassA;
}());
var a = new ClassA("a");
var b = new ClassA("b");
a.run();
b.run();
console.log(ClassA.lastTypeName); // b
// const a = new ClassA();
// console.log(a.getFullName()); // error
// console.log(ClassA.getFullName());
