// javascript and classes
// OOP

//Object
//a collection of proper properties and methods

// why use OOP
//parts of OOP
//Object literal

//Constructor function
//Prototypes
//Classes
//Instances (new,this)


//4 pillars 
//abstraction(e.g., fetch)
//encapsulation
//inheritance
//polymorphism

//object literal
// const user={
//     username:"hitehs",
//     loginCount:8,
//     signedIn: true,
//     getUserDetails: function(){
//         console.log("got details");
//         // console.log(username); will not work
//         //JavaScript first looks for username in the local function scope, then in the global scope. Since it doesn’t find it in either, it throws a ReferenceError.
//         console.log(this.username);
        
//     }
// }
// console.log(user.username);
// console.log(user["loginCount"]);
// console.log(user.getUserDetails());


function user(username,loginCount,isloggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isloggedIn=isloggedIn;
    this.greeting=function(){
        console.log(`Welcome ${this.username}`);
    }
    return this;
}

const userOne=new user("hitesh",12,true)
const userTwo=new user("chaiaurcode",11,false)//this will overwrite the this values and thus we use new keyword 
console.log(userOne);
console.log(userTwo);
console.log(userOne.constructor);
console.log(userOne instanceof user);
console.log(userTwo instanceof user);

//if we do not return this then also it will give the output as this

