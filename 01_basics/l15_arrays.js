const marvel=["thor","ironman","spiderman"]
const dc=["superman","flash","batman"]

// marvel.push(dc)

// console.log(marvel);
// console.log(marvel[3][2]);

// const allhero=marvel.concat(dc)//since concat returns a new array
// console.log(allhero);


// const allnew=[...marvel,...dc]//spreads the values of the arrays
// console.log(allnew);


// const another=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

// const real=another.flat(Infinity)//takes the depth upto which you want to consider
// console.log(real);

console.log(Array.isArray("hitesh"))
console.log(Array.from("hitesh"))
console.log(Array.from({name:"hitesh"}))


let score=100
let score2=200
let score3=300

console.log(Array.of(score,score2,score3));




