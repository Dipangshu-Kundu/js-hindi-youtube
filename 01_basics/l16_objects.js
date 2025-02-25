//singleton object when object is constructed through constructor
//and object literals


const mysymb=Symbol("key1")
console.log(mysymb);

//object literals
const jsuser={
    name:"hitesh",
    "full name":"hiteshchoudhary",
    age:18,
    [mysymb]:"mykey1",
    location:"jaipur",
    email: "dipangshurnj@gmail.com",
    isLoggedIn: false,
    lastLogIn: ["monday","saturday"]
}
console.log(jsuser.email);
console.log(jsuser["full name"]);
console.log(jsuser["email"]);
console.log(jsuser[mysymb]);
console.log(jsuser[mysymb]);
console.log(typeof mysymb);


jsuser.email="xyz@gmail.com"
// Object.freeze(jsuser)
jsuser.email="abc@gmail.com"
console.log(jsuser["email"]);
console.log(jsuser);


jsuser.greeting=function(){
    console.log("hello");
    
}
jsuser.greeting2=function(){
    console.log(`hello js user ${this.name}`);
}
jsuser.greeting()
console.log(jsuser.greeting);
jsuser.greeting2();



