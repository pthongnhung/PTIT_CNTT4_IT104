let score = [8.5, 7.2, 9.0, 6.8, 7.5, 8.0, 6.9, 9.2, 7.8, 8.3];
let total = score.reduce((sum, value) => sum + value, 0);
let average = (total / score.length).toFixed(2);
console.log(`diem trung binh: ${average}`);
