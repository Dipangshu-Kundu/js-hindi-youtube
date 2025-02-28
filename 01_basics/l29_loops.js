//for of

const arr=[1,2,3,4,5]
for (let i of arr) {
    console.log(i);
}
const greetings="hellow orlld"
for(let g of greetings)
{
    console.log(g);   
}

//maps-key value pair and rememebers the original insertion of the pairs and contains unique values
const map=new Map()
map.set('IN',"INdia")
map.set('USA','UNited States')
map.set('Fr','France')
map.set('IN',"INdia")
console.log(map);

for(let [key,value] of map)
{
    console.log(`${key} and ${value}`);
}

const obj={
    name:"hitesg",
    price:"999"
}
//this way is incorrect for iteration
// for(let [key,value] of obj)
// {
//     console.log(`${key} and ${value}`);
    
// }

//for in iterates over the index while for of iterates over the elements and in objects keys are the indexes
for(let i in obj)
{
    console.log(i);
    console.log(obj[i]);
    
}

const myarr=[1,2,3,4,5]
for(let i in myarr)
{
    console.log(`${i} and ${myarr[i]}`);
}

for(let i in map)
{
    console.log(i);
}

const coding=["js","ruby","java","python","cpp"]

//callback function does not have any name when passed as a parameter
coding.forEach(function (i){
    console.log(i);
    
})

coding.forEach((item)=>{
    console.log(item);
    
})

function printme(item)
{
    console.log(item);
}
coding.forEach(printme)

//original parameter which is actually passed as parameter,but normally we use item parameter only
coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})


const mycoding=[
    {
        lang:"js",
        lang2:"jsvascript"
    },
    {
        lang:"python",
        lang2:"py"
    },
    {
        lang:"c++",
        lang2:"cpp"
    }
]
mycoding.forEach((item)=>{
    console.log(item["lang"]);
    console.log(item["lang2"]);
    console.log("----------------");
    
})