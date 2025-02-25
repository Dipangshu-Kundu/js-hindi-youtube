function myname(){
    console.log("dipangshu");
    
}
// myname()

function add(num1,num2)
{
    let result=num1+num2;
// console.log(`The sum is ${num1+num2}`);
return result;//terminating statement of the function
}
let ans=add(5,6)
console.log(`The answer is ${ans}`);


function loginuser(username="dipangshu123")//default value
{
    if(username===undefined){
        console.log("please enter a username");
        return;  
    }
    return `${username} just logged in`
}
let ans1=loginuser("hitesh")
console.log(ans1);
console.log(loginuser());
//undefined is treated as false in js
