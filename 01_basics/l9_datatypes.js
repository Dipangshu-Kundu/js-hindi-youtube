// datatypes are classified based on how data is stored and it is accessed either call by value or call by reference
//primitive and non-primitive

//primitive(call by value):
//7 types: String,Number,Boolean,null,undefined,Symbol,BigInt

//non-primitive(call by reference):
//object,arrays,functions

//js is dynamically typed(automatically converts the value entered to the required data type)

const id= Symbol('123')
const id2=Symbol('123')
console.log(id);
console.log(id2);
console.log(id === id2);//though we have passed the same value but symbol makes them unique

const bigNum = 487232323872737283782n;
//n symblised big number
console.log(bigNum);


const heroes=["dipangshu","ambuj","mohit"]//array
const ok={
    name1:'dipangshu',
    age:20
}//object

console.log(ok);

const myfunc=function(){
    console.log("hello");
    
}
console.log(typeof heroes)
console.log(typeof ok)
console.log(typeof myfunc);
console.log(typeof id)
