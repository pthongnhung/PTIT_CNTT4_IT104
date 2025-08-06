// Khai báo hai biến với kiểu dữ liệu khác nhau
let strValue: string = "2";   // Biến kiểu string, giá trị là chuỗi "2"
let numValue: number = 2;     // Biến kiểu number, giá trị là số 2

// So sánh bằng toán tử == (so sánh lỏng)
console.log(Number(strValue) == numValue);  
// Kết quả: true
// Giải thích: Toán tử == cho phép ép kiểu ngầm => "2" được chuyển thành số 2 => 2 == 2 → true

// So sánh bằng toán tử === (so sánh chặt)
console.log(strValue === numValue.toString());  
// Kết quả: true
// Giải thích: Toán tử === yêu cầu cả giá trị và kiểu phải giống nhau
// strValue là "2" (string), numValue.toString() cũng là "2" (string) → giống kiểu và giá trị => true
