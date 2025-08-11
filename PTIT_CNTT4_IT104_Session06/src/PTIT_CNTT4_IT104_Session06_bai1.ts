abstract class Shape{
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    getName(): string{
        return this.name;
    }
    abstract getSize(): void;
}
class Rectangle extends Shape{
    width: number;
    height: number;
    constructor(name: string, width: number, height: number) {
        super(name);
        this.width = width;
        this.height = height;
    }
     public getSize(): void {
        console.log(`Chiều rộng: ${this.width}, Chiều dài: ${this.height}`);
    }
}
const rect = new Rectangle("HCN", 10, 5);
console.log(`Tên là ${rect.getName()}`);
rect.getSize();
