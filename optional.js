var Optional;
(function (Optional) {
    var Automobile = /** @class */ (function () {
        function Automobile(wheels) {
            this.wheels = wheels;
        }
        return Automobile;
    }());
    var bmw = new Automobile({ count: undefined });
    console.log(bmw);
    console.log(bmw.wheels);
    console.log(bmw.wheels.count);
})(Optional || (Optional = {}));
