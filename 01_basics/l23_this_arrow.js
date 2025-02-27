//this is used to refer to current context
const user={
    username:"hitesh",
    price:"999",
    welcome: function(){
        console.log(`${this.username} welcome to website`);
        console.log(this);
        
    }

}
// user.welcome()
// user.username="sam"
// user.welcome()

// console.log(this);

// function chai(){
//     let username="hitesh"
//     console.log(this);
    
//     console.log(this.username);//undefined since it works on objects
    
// }
//here this will print all the predefined objects present

// const chai=()=>{
//     let username="hitesh"
//     console.log(this);
//     console.log(this.username);
// }
// here this will print {} only

const addtwo=(num1,num2)=>{
    return num1+num2;
}
console.log(addtwo(3,4));


const add=(num1,num2)=>num1+num2;

const addthree=(num1,num2)=>(num1+num2);


//returning object
const obj=()=>(
    {
        username:"hitehs",
        price:"999"
    }

)
console.log(obj());



