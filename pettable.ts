import { Panda, Otter, stray } from "./animals";

interface Pettable {
	numberOfPets: number;
	isAGoodBoy: boolean;
}

function pet(animal: Pettable) {
	animal.numberOfPets++;
	animal.isAGoodBoy = true;
}

class Elephant {
  public numberOfPets: number = 1;
  public isAGoodBoy: boolean = true;
}

 class Aardvark {
   public numberOfPets: number = 1;
   public isAGoodBoy: boolean = true;
   public bla = 'blablabla';
 }
// in order for the elephant to be pettable/ to run pet(elephant)
// need both properties in the interface
let e = new Elephant();
let a = new Aardvark();
pet(e);

const o = new Otter();
const p = new Panda();
pet(o)
pet(p)
