"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stray = {
    numberOfPets: 0,
    isAGoodBoy: true,
    legs: 3
};
exports.stray = stray;
var Panda = (function () {
    function Panda() {
        this.numberOfPets = 1;
        this.isAGoodBoy = true;
        this.eatsBamboo = 'nomnomnom';
    }
    return Panda;
}());
exports.Panda = Panda;
var Otter = (function () {
    function Otter() {
        this.numberOfPets = 1;
        this.isAGoodBoy = true;
        this.holdHands = 'ZZZ';
    }
    return Otter;
}());
exports.Otter = Otter;
