class Vehiclec{
    protected name: string;
    protected speed: number;
    protected id: number;
    constructor(name: string,  id: number,speed: number) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(amount: number): number{
       return  this.speed = Math.max(0, this.speed - amount);
 
    }
    speedUp(amount: number): number{
        return this.speed += amount;
    }
    showSpeed(): void{
        console.log(`toc do hien tai ${this.speed}`);
    }
}
class Bicycle extends Vehiclec{
    private gear: number;
    constructor(name: string, id: number, speed: number, gear: number) {
        super(name, id, speed);
        this.gear = gear;
    }
    showInfo(): void{
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



