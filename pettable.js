"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animals_1 = require("./animals");
function pet(animal) {
    animal.numberOfPets++;
    animal.isAGoodBoy = true;
}
var Elephant = (function () {
    function Elephant() {
        this.numberOfPets = 1;
        this.isAGoodBoy = true;
    }
    return Elephant;
}());
var Aardvark = (function () {
    function Aardvark() {
        this.numberOfPets = 1;
        this.isAGoodBoy = true;
        this.bla = 'blablabla';
    }
    return Aardvark;
}());
var e = new Elephant();
var a = new Aardvark();
pet(e);
var o = new animals_1.Otter();
var p = new animals_1.Panda();
pet(o);
pet(p);
