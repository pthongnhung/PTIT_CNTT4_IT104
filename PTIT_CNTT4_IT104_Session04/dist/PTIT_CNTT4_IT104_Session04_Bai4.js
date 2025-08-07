function handleUnionType(value) {
    if (typeof (value) == "string") {
        console.log(`${value.length} ky tu`);
    }
    else {
        if (value % 2 == 0) {
            console.log("day la so chan");
        }
        else {
            console.log(`Day la so le`);
        }
    }
}
handleUnionType("demo123");
handleUnionType(10);
handleUnionType(9);
