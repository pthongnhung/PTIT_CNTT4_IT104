interface ChangeSpeed {
    speedUp(): number;
    slowDown(): number;
    stop(): number;
}

class Vehicle implements ChangeSpeed {
    private speed: number;

    constructor(speed: number) {
        this.speed = speed;
    }

    speedUp(): number {
        this.speed++;
        console.log(`Tăng tốc: ${this.speed} km/h`);
        return this.speed;
    }

    slowDown(): number {
        this.speed = Math.max(0, this.speed - 1);
        console.log(`Giảm tốc: ${this.speed} km/h`);
        return this.speed;
    }

    stop(): number {
        this.speed = 0;
        console.log(`Dừng xe! Tốc độ: ${this.speed} km/h`);
        return this.speed;
    }
}

const vehicle$ = new Vehicle(5);
vehicle$.speedUp();   
vehicle$.slowDown();  
vehicle$.stop();      
