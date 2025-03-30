// class user{
//     constructor(username,email,password){
//         this.username=username;
//         this.email=email;
//         this.password=password;
//     }

//     //it is function pnly,here we do not write the function keyword
//     encryptPassword(){
//         return `${this.password}abc`;
//     }
//     changeusername(){
//         return`${this.username.toUpperCase()}`
//     }
// }

// const chai=new user("hitesh","adad","123");
// console.log(chai.encryptPassword());
// console.log(chai.changeusername());


// //behid the scene
// function User(username,email,password){
//     this.username=username;
//         this.email=email;
//         this.password=password;
// }

// User.prototype.encryptPassword=function(){
//     return `${this.password}abc`;
// }

// User.prototype.changeusername=function(){
//     return `${this.username}abc`
// }

// const tea=new User("dipangsu","dmsmss","456");
// console.log(tea.encryptPassword());
// console.log(tea.changeusername());

//inheritance
// class user{
//     constructor(username){
//         this.username=username;
//     }
//     logMe(){
//         console.log(`userame is ${this.username}`);
//     }

// }

// class teacher extends user{
//     constructor(username,email,password){
//         //super automatically take 'this'
//         super(username);
//         this.email=email;
//         this.password=password;
//     }
//     addCourses(){
//         console.log(`a new course was added by ${this.username}`);       
//     }
// }
// const chai=new teacher("chai","gamil","982");
// chai.logMe()
// chai.addCourses();
// const masalaChai=new user("masala");
// masalaChai.logMe()

// console.log(chai === masalaChai);
// console.log(chai === teacher);
// console.log(chai instanceof teacher);
// console.log(chai instanceof user);




//static
class user{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`username is ${this.username}`);
    }
    //it's access will be restricted
    static createId(){
        return `123`;
    }
}
const hitesh=new user("hitesh")
// console.log(hitesh.createId()); it is not accessible since the function is static


class teacher extends user{
    constructor(username,email){
        super(username);
        this.email=email;
    }
}
const iphone=new teacher("iphone","gmail.com");
iphone.logMe();
//iphone.createId(); it is not accessible
