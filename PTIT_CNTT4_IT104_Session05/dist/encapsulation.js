class Student {
    constructor(value_fullName, value_age, address) {
        this.fullName = value_fullName;
        this.age = value_age;
        this.address = address;
    }
    getInfo() {
        return `xin chao ${this.fullName},${this.age} tuoi!`;
    }
    setAge(new_Age) {
        this.age = new_Age;
    }
}
