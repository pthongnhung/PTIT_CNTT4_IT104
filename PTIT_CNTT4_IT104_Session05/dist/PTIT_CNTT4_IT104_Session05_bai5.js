class Rectangle {
    constructor(width, heigth) {
        this.width = width;
        this.height = heigth;
    }
    getWidth() {
        return this.width;
    }
    setWidth(width) {
        if (width > 0) {
            this.width = width;
        }
        else {
            console.log(`chieu rong phai lon hon 0`);
        }
    }
    getHeight() {
        return this.height;
    }
    setHeight(height) {
        if (height > 0) {
            this.height = height;
        }
        else {
            console.log(`do dai phai lon hon 0`);
        }
    }
    getArea() {
        return this.height * this.width;
    }
    getPerimeter() {
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
