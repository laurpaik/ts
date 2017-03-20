var Bunny = (function () {
    function Bunny(name, pregnant) {
        this.name = name;
        this.pregnant = pregnant;
        this.isAGoodBoy = false;
        this.numberOfPets = 0;
    }
    // Because pregnant is private, you can't access it without this function
    Bunny.prototype.isPregnant = function () {
        return this.pregnant;
    };
    Bunny.prototype.eatIceCream = function () {
        if (this.isPregnant()) {
            console.log('NOM NOM NOM');
        }
    };
    return Bunny;
}());
Bunny.numberOfLegs = 4;
var max = new Bunny('Max', true);
max.eatIceCream();
console.log(Bunny.numberOfLegs);
