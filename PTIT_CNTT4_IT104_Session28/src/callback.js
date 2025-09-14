function askForPhoneNumber(callback) {
    let phoneNumber;
    console.log("alo alo alo");
    console.log("nghe day");
    setTimeout(() => {
        console.log("tim thay so roi");
        phoneNumber = 123456;
        callback(phoneNumber)
        
    }, 3000)
}
function processPhoneNumber(sdt) {
    console.log(` ok goi cho t bang so ${sdt}`);
    
}
askForPhoneNumber(processPhoneNumber)