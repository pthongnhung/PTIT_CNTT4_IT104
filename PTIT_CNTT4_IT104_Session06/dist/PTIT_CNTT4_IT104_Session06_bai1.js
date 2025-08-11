class Shape {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize() {
        console.log(`Chiều rộng: ${this.width}, Chiều dài: ${this.height}`);
    }
}
const rect = new Rectangle("HCN", 10, 5);
console.log(`Tên là ${rect.getName()}`);
rect.getSize();
