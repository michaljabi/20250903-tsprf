import { debuglog } from "util";

class Dog {
  name: string = "b";

  voice() {
    console.log(this);
  }
}

class Cat {
  name: string = "a";
  age: number = 10;

  voice() {
    console.log(this);
    console.log('?@');
  }
}

const myDog: Dog = new Cat();

console.log(myDog);

function makeAnimalAction(animal: Dog | Cat) {
  if (animal instanceof Cat) {
    animal.age;
    (animal as Dog).voice()
  } else {
    animal;
  }
}

makeAnimalAction(myDog);
makeAnimalAction(new Cat());
makeAnimalAction(new Dog());

export {};
