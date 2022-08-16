"use strict";
// Implements the Payload interface
// Properties
//      massKg should be a number.
//      name should be a string.
// Constructor
//      Parameter massKg should be a number.
//      Parameter name should be string.
//      Sets value of this.massKg and this.name.
exports.__esModule = true;
exports.Astronaut = void 0;
var Astronaut = /** @class */ (function () {
    function Astronaut(massKg, name) {
        this.name = name;
        this.massKg = massKg;
    }
    return Astronaut;
}());
exports.Astronaut = Astronaut;
