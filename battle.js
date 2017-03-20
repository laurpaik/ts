var Warrior = (function () {
    function Warrior(fullName) {
        this.fullName = fullName;
        this.health = 100;
        this.wearingUnderwear = true;
    }
    Warrior.prototype.fight = function (target) {
        var _this = this;
        this.fightId = setTimeout(function () {
            _this.weapon.swing(target);
        }, this.weapon.secondsBetweenSwings);
    };
    Warrior.prototype.isWearingUnderwear = function () {
        return this.wearingUnderwear;
    };
    return Warrior;
}());
var Sword = (function () {
    function Sword() {
        this.shiny = true;
        this.sharp = true;
        this.damage = 10;
        this.secondsBetweenSwings = 5;
    }
    Sword.prototype.swing = function (target) {
        target.health -= this.damage;
        console.log(target.fullName + " is down to " + target.health + " health.");
    };
    return Sword;
}());
var Mace = (function () {
    function Mace() {
        this.pointy = true;
        this.numberOfPoints = 12;
        this.damage = 30;
        this.secondsBetweenSwings = 3;
    }
    Mace.prototype.swing = function (target) {
        target.health -= this.damage;
        console.log(target.fullName + " is down to " + target.health + " health.");
    };
    return Mace;
}());
var leeroy = new Warrior('Leeroy Jenkins');
leeroy.weapon = new Sword();
var lebron = new Warrior('Lebron James');
lebron.weapon = new Mace();
leeroy.wearingUnderwear = false;
lebron.fight(leeroy);
leeroy.fight(lebron);
