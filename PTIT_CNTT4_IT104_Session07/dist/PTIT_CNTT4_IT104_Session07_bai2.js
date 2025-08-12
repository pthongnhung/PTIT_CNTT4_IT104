class Vehiclec {
    constructor(name, id, speed) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(amount) {
        return this.speed = Math.max(0, this.speed - amount);
    }
    speedUp(amount) {
        return this.speed += amount;
    }
    showSpeed() {
        console.log(`toc do hien tai ${this.speed}`);
    }
}
class Bicycle extends Vehiclec {
    constructor(name, id, speed, gear) {
        super(name, id, speed);
        this.gear = gear;
    }
    showInfo() {
        console.log(`ten xe: ${this.name}`);
        console.log(`toc do hien tai ${this.speed}`);
        console.log(`id: ${this.id}`);
        console.log(`so banh rang: ${this.gear}`);
    }
}
const bicycle = new Bicycle("xe dap", 1, 5, 10);
console.log(`giam toc do: ${bicycle.slowDown(2)}`);
console.log(`tang toc do: ${bicycle.speedUp(1)}`);
bicycle.showSpeed();
bicycle.showInfo();
