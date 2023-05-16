"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractNamespace = void 0;
var AbstractNamespace;
(function (AbstractNamespace) {
    var Vehicle = /** @class */ (function () {
        function Vehicle(whellCount) {
            this.whellCount = whellCount;
        }
        Vehicle.prototype.showNumberOfWhells = function () {
            console.log("moved ".concat(this.whellCount, " whells"));
        };
        return Vehicle;
    }());
    var Motorcycle = /** @class */ (function (_super) {
        __extends(Motorcycle, _super);
        function Motorcycle(czyMaKufer) {
            var _this = _super.call(this, 2) || this;
            _this.czyMaKufer = czyMaKufer;
            _this.updateWhellCount = function (newWhellCount) {
                _this.whellCount = newWhellCount;
                console.log("updated whell count ".concat(_this.whellCount));
            };
            return _this;
        }
        return Motorcycle;
    }(Vehicle));
    AbstractNamespace.Motorcycle = Motorcycle;
    var Automobile = /** @class */ (function (_super) {
        __extends(Automobile, _super);
        function Automobile() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.updateWhellCount = function (newWhellCount) {
                _this.whellCount = newWhellCount;
                console.log("updated whell count ".concat(_this.whellCount));
            };
            return _this;
        }
        Automobile.prototype.showID = function () {
            console.log("IDs ".concat(this.marka, " car"));
        };
        return Automobile;
    }(Vehicle));
    var motor = new Motorcycle(true);
    motor.showNumberOfWhells();
    var auto = new Automobile(4);
    auto.showNumberOfWhells();
    auto.marka = "BMW";
    auto.showID();
})(AbstractNamespace = exports.AbstractNamespace || (exports.AbstractNamespace = {}));
