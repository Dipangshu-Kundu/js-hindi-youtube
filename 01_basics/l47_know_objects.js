const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descriptor);


// console.log(Math.PI);
// Math.PI=5;
// console.log(Math.PI);

const chai={
    name:'ginger chai',
    price: 250,
    isavailable: true,
    orderchai:function(){
        console.log(`chai nahi bani`);
        
    }
}
console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai));
console.log(Object.getOwnPropertyDescriptor(chai,"name"));


// Object.defineProperty(chai,"name",{
//     writable: false,
//     enumerable: false
// })

// console.log(Object.getOwnPropertyDescriptor(chai,'name'));


//enumerable means we can loop it over
for(const [key,value] of Object.entries(chai)){
    if(typeof value !== 'function'){
        console.log(`${key}:${value}`);
    }
}
console.log("-------------------------");

Object.defineProperty(chai,"name",{
    enumerable: false
})
for(const [key,value] of Object.entries(chai)){
    if(typeof value !== 'function'){
        console.log(`${key}:${value}`);
    }
}
