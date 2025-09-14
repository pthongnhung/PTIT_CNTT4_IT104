function getDataFormAPI1() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(`lay du lieu tu API1 tai len giao dien thanh cong`);
            resolve()
        },1000)
    })
}
function getDataFormAPI2() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(`lay du lieu tu API2 tai len giao dien thanh cong`);
            resolve()
        },1000)
    })
}
function getDataFormAPI3() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(`lay du lieu tu API3 tai len giao dien thanh cong`);
            resolve()
        },1000)
    })
}
function runAllTask() {
    getDataFormAPI1()
        .then(() => getDataFormAPI2())
        .then(() => getDataFormAPI3())
        .then(()=>console.log(`tat ca cac tac vu da duoc hoan thanh`))
         .catch((error)=>console.log(`loi: `,error))
}
runAllTask()