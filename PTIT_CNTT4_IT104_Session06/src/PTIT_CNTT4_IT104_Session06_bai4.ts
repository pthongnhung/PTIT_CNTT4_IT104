interface Geometry{
    calculateArea(): number;
    calculatePerimeter(): number;
}
class Circle implements Geometry{
    private radius:number;
    constructor(radius: number) {
        this.radius = radius;
    }
    calculateArea(): number {
        return 3.14 * this.radius * this.radius;
    }
    calculatePerimeter(): number {
        return 2 * 3.14 * this.radius;
    }
}
class _Rectangle implements Geometry{
    private width: number;
    private height: number;
    constructor(width:number,height:number) {
        this.width = width;
        this.height = height;
    }
    calculateArea(): number {
        return this.width * this.height;
    }
    calculatePerimeter(): number {
        return (this.height + this.width) * 2;
    }
}
const circle = new Circle(4);
const rectangle = new _Rectangle(3, 4);
console.log(` dien tich hinh tron ${circle.calculateArea()}`);
console.log(`chu vi hinh tron ${circle.calculatePerimeter()}`);
console.log(`dien tich hinh chu nhat ${rectangle.calculateArea()}`);
console.log(`chu vi hinh chu nhat ${rectangle.calculatePerimeter()}`);



