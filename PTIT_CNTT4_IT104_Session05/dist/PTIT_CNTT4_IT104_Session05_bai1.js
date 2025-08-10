class Vehicle {
    constructor(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
}
const vehicle1 = new Vehicle("civic", 20, "honda");
const vehicle2 = new Vehicle("model", 20, "tesla");
console.log(`Tên: ${vehicle1.name}, Năm: ${vehicle1.year}, Hãng: ${vehicle1.company}`);
console.log(`Tên: ${vehicle2.name}, Năm: ${vehicle2.year}, Hãng: ${vehicle2.company}`);
