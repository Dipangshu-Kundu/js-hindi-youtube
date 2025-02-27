// if(true){

// }
// if(false){

// }

//<,>,<=,>=,==,===,!=,!==
if(2=='2'){
    console.log("executed");
}
if(2==='2'){
    console.log("executed");
}
if(2!=='2'){
    console.log("done");
}
const score=200
if(score>100){
    const power="fly"
}
// console.log(`User power ${power}`);
// if(){

// }
// else if(){

// }
// else{

// }

// const month=3
//also we can use other type for comparison
// switch(month){
//     case 1:
//         console.log("january");
//         break;
//     case 3:
//         console.log("march");
//     case 4:
//         console.log("june");
//     case 5:
//         console.log("june");
//     case 6:
//         console.log("june");  
//     default:
//         console.log("nothing");
// }

const useremail="hitesh@gmail"
if(useremail){
    console.log("dine");
}
else{
    console.log("not done");
    
}
//false values-false,0,-0,BigInt 0n,"",null,undefined,NaN

//true values- true,"0","false"," ",[],{},function(){},.....etc

const emptyobj={}
if(Object.keys(emptyobj).length==0)
{
    console.log("empty object");
}
console.log(false==0);
console.log(false=='');
console.log(0=='');


//nullish coalescing operator(??): null undefined

// let val1;
// val1=5 ?? 10
// val1=null ?? 10
// val1=undefined ?? 15
// val1=null ?? 10 ?? 15
// console.log(val1);


//ternary operator
const price=100
price>=80?console.log("more than 80"):console.log("less than 80");


