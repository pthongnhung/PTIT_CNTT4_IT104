class Vehicle {
    constructor(speed) {
        this.speed = speed;
    }
    speedUp() {
        this.speed++;
        console.log(`Tăng tốc: ${this.speed} km/h`);
        return this.speed;
    }
    slowDown() {
        this.speed = Math.max(0, this.speed - 1);
        console.log(`Giảm tốc: ${this.speed} km/h`);
        return this.speed;
    }
    stop() {
        this.speed = 0;
        console.log(`Dừng xe! Tốc độ: ${this.speed} km/h`);
        return this.speed;
    }
}
const vehicle$ = new Vehicle(5);
vehicle$.speedUp();
vehicle$.slowDown();
vehicle$.stop();
