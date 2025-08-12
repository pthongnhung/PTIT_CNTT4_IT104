abstract class Animal{
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
    abstract makeNoise(): void;
    public printName(): void{
        console.log(`ten dong vat: ${this.name}`);
    }
}
class Cat extends Animal{
    makeNoise(): void {
        console.log(`meo meo`);
    }
}
class Dog extends Animal{
    makeNoise(): void {
        console.log(`gau gau`);
    }
}
const cat = new Cat("meo");
cat.printName();
cat.makeNoise();
const dog = new Dog("cho");
dog.printName();
dog.makeNoise();
