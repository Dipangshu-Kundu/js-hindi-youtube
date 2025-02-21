//stack(primitive) memory and heap(non primitve) memory
let myYoutubeName="name1"
let myOtherName="name2"
let userOne={
    email:"email1",
    upi:"user@ybl"
}
let userTwo=userOne//the reference of userOne goes to UserTwo
userTwo.email="change"

console.log(userOne);
console.log(userTwo);
