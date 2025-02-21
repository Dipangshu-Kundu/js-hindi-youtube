console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);

//while comparing try to keep the datatypes same
console.log("2">1);
console.log("02">1);
console.log("02">3);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
// the reason is that an equality check == and comparisons > < >= <= work differently
//comparisons convert null to a number treating it as 0.That's why null>=0 is true and null>0 is false


console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined >= 0);
// === strictly checks the values as well as their data types
 