function getDataFormAPI1(callback) {
    setTimeout(() => {
        console.log(`lay data API1 thanh cong`);
        callback();
    },1000)
}
function getDataFormAPI2(callback) {
    setTimeout(() => {
        console.log(`lay data API2 thanh cong`);
        callback();
    },1000)
}
function getDataFormAPI3() {
    setTimeout(() => {
        console.log(`lay API3 thanh cong`);
        console.log(`tat ca du lieu lay tren server thanh cong`);
        
    },1000)
}
function runAllTask() {
    getDataFormAPI1(() => {
        getDataFormAPI2(() => {
            getDataFormAPI3();
        })
    })
}
runAllTask();