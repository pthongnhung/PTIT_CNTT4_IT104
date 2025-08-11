class Job {
    constructor(type) {
        this.type = type;
    }
    printType() {
        return this.type;
    }
}
class PartimeJob extends Job {
    constructor(type, workingHour) {
        super(type);
        this.workingHour = workingHour;
    }
    calculateSalary() {
        return 30.000 * this.workingHour;
    }
}
class FulltimeJob extends Job {
    constructor(type) {
        super(type);
    }
    calculateSalary() {
        return 10000000;
    }
}
const p = new PartimeJob("dev", 3);
console.log(`loai cong viec ${p.printType()}, luong: ${p.calculateSalary()}`);
const f = new FulltimeJob("tester");
console.log(`loai cong viec ${f.printType()}, luong: ${f.calculateSalary()}`);
