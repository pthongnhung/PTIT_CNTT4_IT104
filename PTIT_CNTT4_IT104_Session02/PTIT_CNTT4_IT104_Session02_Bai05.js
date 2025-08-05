let phoneBooks = [];
function addContact(name, sdt, email) {
   return {
        name: name,
        sdt: sdt,
        email:email
    }
}
phoneBooks.push(addContact("nhung", "12345678", "nhung@gmail.com"));
function display(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(`ten: ${arr[i].name}`);
        console.log(`sdt: ${arr[i].sdt}`);
        console.log(`email: ${arr[i].email}`);
    }
}
display(phoneBooks);