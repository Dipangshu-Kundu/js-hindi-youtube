const myarr=[0,1,2,3,4,5,]
console.log(myarr[4]);
//shallow copy and deep copy
const myhero=["abc","xyz","def"]
const myarr2=new Array(1,2,3,5,6);

// myarr.push(6)
// myarr.push(7)
// myarr.push()

// myarr.unshift(9)
// myarr.shift()

// console.log(myarr.includes(9));
// console.log(myarr.indexOf(9));//-1 since not present

// const newarr=myarr.join()
// console.log(myarr);
// console.log(typeof myarr);
// console.log(newarr);
// console.log(typeof newarr);


console.log("A ",myarr);
const myn1=myarr.slice(1,3)
console.log(myn1);
console.log("B",myarr);

const myn2=myarr.splice(1,3)
console.log(myn2);
console.log("C",myarr);




