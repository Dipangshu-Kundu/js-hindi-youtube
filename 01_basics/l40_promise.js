// the promise object represents eventual completion(or failure) of an asynchronous operation and its resulting value

// Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

//creating a promise
const promiseOne=new Promise(function(resolve,reject){
    //do an async taks
      //db calls,cryptography,network call
    setTimeout(() => {
       console.log("assync task is completed");
        resolve();
    }, 1000);
})

promiseOne.then(function(){
    console.log("promise consumed");
    
})//connection with resolve

new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("async task 2 completed");
        resolve();
    }, 1000);
}).then(()=>{
    console.log("async 2 resolved");
    
});


const promiseThree=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve({usernmae:"chai",email:"adada"})
    }, 1000);
})

promiseThree.then((user)=>{
    console.log(user);
})


const promiseFour=new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error=true;
        if(!error)
        {
            resolve({username:"hitesh",password:"sdasd"})
        }
        else{
            reject('error happened')
            // resolve({userasd:"asdasd"})
        }
    }, 1000);
})

//we cannot store this returned value in a variable...it will throw an error
promiseFour
.then((user)=>{
    console.log(user);
    return user.username;
})
.then((username)=>{
    console.log(username);
    
})
.catch((error)=>{
    console.log(error+"ok");
    
})
.finally(()=>{
   console.log("the promise is either resolved or rejected");
    
})


const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error=true;
        if(!error)
        {
            resolve({username:"js",password:"123"})
        }
        else{
            reject('error js went wrong')
            // resolve({userasd:"asdasd"})
        }
    }, 1000);
})

//it directly does not handle error.
async function consume(){
    try{
        const response=await promiseFive;
    console.log(response);
    }
    catch(error){
        console.log(error);
        
    }
}
consume()


//FETCHING OUTSIDE DATA

// async function getAllUsers(){
//     try{
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')

//     //the data coming is in the form of string..so we will convert it into json
//     const data=await response.json()
//     console.log(data);

//     // console.log(response);
//     }catch(error){
//         console.log("E: ",error);
        
//     }
// }

// getAllUsers();

console.log("chcekcing");

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>{
    console.log(error);
})