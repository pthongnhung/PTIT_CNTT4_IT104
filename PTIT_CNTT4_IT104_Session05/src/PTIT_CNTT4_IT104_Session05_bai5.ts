class Rectangle{
    private width: number;
    private height: number;
    constructor(width: number, heigth: number) {
        this.width = width;
        this.height = heigth;
    }
    public getWidth() :number {
        return this.width;
    }
    public setWidth(width: number): void{
        if (width > 0) {
            this.width = width;
        } else {
            console.log(`chieu rong phai lon hon 0`);
        }
    }
    public getHeight(): number{
        return this.height;
    }
    public setHeight(height: number): void{
        if (height > 0) {
            this.height = height;
        } else {
            console.log(`do dai phai lon hon 0`);
            
        }
    }
    public getArea(): number{
        return this.height * this.width;
    }
    public getPerimeter(): number{
        return (this.height + this.width) * 2;
    }
}
const rect = new Rectangle(2, 6);
console.log(`dien tich: ${rect.getArea()}`);
console.log(`chu vi: ${rect.getPerimeter()}`);
rect.setWidth(3);
rect.setHeight(4);
console.log(`dien tich sau khi cap nhat: ${rect.getArea()}`);
console.log(`chu vi sau khi cap nhat: ${rect.getPerimeter()}`);

