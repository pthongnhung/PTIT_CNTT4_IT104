const insertArray = (arr1, arr2, pos) => {
    if (
        typeof pos !== "number" ||
        !Number.isInteger(pos) ||
        pos < 0 ||
        pos > arr1.length
    ) {
        console.log("vi tri khong hop le");
        return;
    }
    const result = [
        ...arr1.slice(0, pos),
         ...arr2,
        ...arr1.slice(pos)
    ];
console.log(result);
}
insertArray([1, 2, 3, 7, 8], [4, 5, 6], 3);
