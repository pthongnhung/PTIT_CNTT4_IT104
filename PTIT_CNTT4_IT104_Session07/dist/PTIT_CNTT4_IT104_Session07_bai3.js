class Animal {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(`ten dong vat: ${this.name}`);
    }
}
class Cat extends Animal {
    makeNoise() {
        console.log(`meo meo`);
    }
}
class Dog extends Animal {
    makeNoise() {
        console.log(`gau gau`);
    }
}
const cat = new Cat("meo");
cat.printName();
cat.makeNoise();
const dog = new Dog("cho");
dog.printName();
dog.makeNoise();
