//singleton objects

const tinder=new Object()
tinder.id="123abc"
tinder.name="sammy"
tinder.islogin=false

// console.log(tinder);

const regular={
   email: "some",
   fullname:{
    username:{
        firstname:"hitesh",
        lastname:"kundu"
    }
   } 
}
// console.log(regular.fullname.firstname);
// console.log(regular.fullname);

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"a",
    4:"b"
}
const obj3={obj1,obj2}
console.log(obj3);
const obj4=Object.assign(obj1,obj2)
console.log(obj4);
const obj5=Object.assign({},obj1,obj2)
console.log(obj5);
const obj6={...obj1,...obj2}
console.log(obj6);
const users=[
    {
        id:1,
        email:"some"
    },
    {
        id:2,
        email:"some1"
    },
    {
        id:3,
        email:"some2"
    },

]
users[1].email="ok"

console.log(tinder);
console.log(Object.keys(tinder));//returns an array of keys
console.log(Object.values(tinder));//returns an array of values
console.log(Object.entries(tinder));
//returns an array of array of key value
console.log(tinder.hasOwnProperty('islogin'));








