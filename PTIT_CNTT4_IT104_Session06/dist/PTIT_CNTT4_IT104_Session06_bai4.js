class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return 3.14 * this.radius * this.radius;
    }
    calculatePerimeter() {
        return 2 * 3.14 * this.radius;
    }
}
class _Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return (this.height + this.width) * 2;
    }
}
const circle = new Circle(4);
const rectangle = new _Rectangle(3, 4);
console.log(` dien tich hinh tron ${circle.calculateArea()}`);
console.log(`chu vi hinh tron ${circle.calculatePerimeter()}`);
console.log(`dien tich hinh chu nhat ${rectangle.calculateArea()}`);
console.log(`chu vi hinh chu nhat ${rectangle.calculatePerimeter()}`);
