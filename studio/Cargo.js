"use strict";
// Defined in Cargo.ts
// Implements the Payload interface
// Properties
//      massKg should be a number.
//      material should be a string.
// Constructor
//      Parameter massKg should be a number.
//      Parameter material should be a string.
//      Sets value of this.massKg and this.material
exports.__esModule = true;
exports.Cargo = void 0;
var Cargo = /** @class */ (function () {
    function Cargo(massKg, material) {
        this.massKg = massKg;
        this.material = material;
    }
    return Cargo;
}());
exports.Cargo = Cargo;
