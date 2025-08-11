abstract class Animal {
    constructor(public name: string) {}

    // Method thường: logic chung cho tất cả động vật
    eat(): void {
        console.log(`${this.name} đang ăn.`);
    }

    // Abstract method: bắt buộc mỗi loài phải tự định nghĩa cách kêu
    abstract makeSound(): void;
}

class Dog extends Animal {
    makeSound(): void {
        console.log(`${this.name} sủa: Gâu gâu!`);
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log(`${this.name} kêu: Meo meo!`);
    }
}

// Demo
const dog = new Dog("Chó");
const cat = new Cat("Mèo");

dog.eat();       // dùng method thường (chung)
dog.makeSound(); // dùng method abstract (riêng từng loài)

cat.eat();
cat.makeSound();
