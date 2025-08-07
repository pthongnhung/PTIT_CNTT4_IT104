type student ={
    name: string,
    age: number,
    email: string
};
function displayInfor(Student:student):void{
    console.log(`ten toi la ${Student.name}.Toi ${Student.age} tuoi. Email toi la ${Student.email}`); 
}
const sv1: student={
    name:"nhung",
    age:19,
    email:"nhung@gmail.com"
};
displayInfor(sv1);