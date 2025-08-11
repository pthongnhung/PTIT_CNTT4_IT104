abstract class Job{
    type: string;
    constructor(type: string) {
        this.type = type;
    }
    printType():string{
        return this.type;
    }
    abstract calculateSalary(): number;
}
class PartimeJob extends Job{
    workingHour: number;
    constructor(type:string,workingHour: number) {
        super(type);
        this.workingHour = workingHour;
    }
    calculateSalary(): number {
        return 30.000 * this.workingHour;
    }
}
class FulltimeJob extends Job{
    constructor(type: string) {
        super(type)
    }
    calculateSalary(): number {
        return 10000000;
    }
}
const p = new PartimeJob("dev", 3);
console.log(`loai cong viec ${p.printType()}, luong: ${p.calculateSalary()}`);
const f = new FulltimeJob("tester");
console.log(`loai cong viec ${f.printType()}, luong: ${f.calculateSalary()}`);
