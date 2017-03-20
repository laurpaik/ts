class Bunny {
  static numberOfLegs = 4;
  public name: string;
  public isAGoodBoy: boolean;
  public numberOfPets: number;
  private pregnant: boolean;
  constructor(name: string, pregnant: boolean) {
    this.name = name;
    this.pregnant = pregnant;
    this.isAGoodBoy = false;
    this.numberOfPets = 0;
  }
  // Because pregnant is private, you can't access it without this function
  isPregnant(): boolean {
    return this.pregnant;
  }
  eatIceCream(): void{
    if (this.isPregnant()) {
      console.log('NOM NOM NOM');
    }
  }
}

let max = new Bunny('Max', true);

max.eatIceCream();

console.log(Bunny.numberOfLegs)
