// class _Vehicle{
//     readonly id: number;
//     public name: string;
//     protected year: number;
//     private company: string;
    
//     constructor(id: number, name: string, year: number, company: string) {
//         this.id = id;   
//         this.name = name;
//         this.year = year;
//         this.company = company;
//     }
// }
// const _vehicle1 = new _Vehicle(1, "civic", 20, "honda");
// console.log(`Tên: ${_vehicle1.name}, Năm: ${_vehicle1.year}, Hãng: ${_vehicle1.company}`);
// year là protected → chỉ truy cập được trong class và class con, không truy cập trực tiếp bên ngoài.

// company là private → chỉ truy cập được bên trong chính class đó, bên ngoài không thể gọi.