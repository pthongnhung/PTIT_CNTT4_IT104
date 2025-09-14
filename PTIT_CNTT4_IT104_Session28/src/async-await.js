function getDataFormAPI1() {
    setTimeout(() => {
        console.log(`lay data API1 thanh cong`)
    },1000)
}
function getDataFormAPI2() {
    setTimeout(() => {
        console.log(`lay data API2 thanh cong`);
    
    },1000)
}
function getDataFormAPI3() {
    setTimeout(() => {
        console.log(`lay API3 thanh cong`);
        console.log(`tat ca du lieu lay tren server thanh cong`);
        
    },1000)
}
async function runAllTask() {
    try {
        await getDataFormAPI1();
        await getDataFormAPI2();
        await getDataFormAPI3();
    } catch (error) {
        console.log("error",error);
        
    }
}
runAllTask();