// const coding=["js","ruby","java","python","cpp"]
// const values=coding.forEach((item)=>{
//     console.log(item);
//     // return item; does not gets returned
// })
// console.log(values);


// const mynums=[1,2,3,4,5,6,7,8,9,10]
// const values=mynums.filter((item)=>{
//     if(item>5)
//     {
//         console.log(item);
//         return item;
//     }
// })

// const newnums=[]
// mynums.forEach((item)=>{
//     if(item>5)
//     {
//         newnums.push(item)
//     }
// })
// console.log(newnums);

// console.log(values);

// const books=[
//     {
//         lang:"abc",
//         lang2:"xyz"
//     },
//     {
//         lang:"abc2",
//         lang2:"xyz2"
//     },
//     {
//         lang:"abc3",
//         lang2:"xyz3"
//     }
// ]
// const userbooks=books.filter((item)=>{
//     if(item.lang === "abc3")
//     {
//         return item;
//     }
// })
// console.log(userbooks);


// const mynums=[1,2,3,4,5,6,7,8,9,10]
// const newnums=mynums.map((num)=>{
//     return num+10;
// })
// console.log(newnums);

//chaining
// const newnums=mynums.map((num)=>{
//     return num*10
// }).map((item)=>{
//     return item+10
// })
// console.log(newnums);


// const nums=[1,2,3,4,5,6]
// const initial=1
// const newnums=nums.reduce((acc,curr)=>{
//     return acc+curr
// },initial)
// console.log(newnums);
//it returns the total value

const shopping=[
    {
        item:"js course",
        price:999
    },
    {
        item:"html course",
        price:9999
    },
    {
        item:"css course",
        price:1999
    },
    {
        item:"react course",
        price:9990
    },
    {
        item:"nodejs course",
        price:2999
    },
]
const total=shopping.reduce((acc,curr)=>{
    return acc+curr.price
},0)
console.log(total);

