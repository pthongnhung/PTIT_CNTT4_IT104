class Animal {
    constructor(name) {
        this.name = name;
    }
    // Method thường: logic chung cho tất cả động vật
    eat() {
        console.log(`${this.name} đang ăn.`);
    }
}
class Dog extends Animal {
    makeSound() {
        console.log(`${this.name} sủa: Gâu gâu!`);
    }
}
class Cat extends Animal {
    makeSound() {
        console.log(`${this.name} kêu: Meo meo!`);
    }
}
// Demo
const dog = new Dog("Chó");
const cat = new Cat("Mèo");
dog.eat(); // dùng method thường (chung)
dog.makeSound(); // dùng method abstract (riêng từng loài)
cat.eat();
cat.makeSound();
