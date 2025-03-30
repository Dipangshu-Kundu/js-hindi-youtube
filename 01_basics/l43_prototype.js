//prototypial behaviour is that it goes up and above ..i.e., to the parent,grandparents,and more until it gets the null value

//new keyoword is because of the prototype
//this is because of prototype

//prototypial inheritance

//array->object->null
//string->object->null
//function->object->null

function multipleby5(num){
    return num*5;
}
//since function also behaves as an object
multipleby5.power=2
console.log(multipleby5(5));
console.log(multipleby5.power)
console.log(multipleby5.prototype)//that is why null since object refers to it


function createuser(username,score){
    this.username=username;
    this.score=score;
}
//we are creating userdefined object attributes
createuser.prototype.increment=function(){
    this.score++;
}
createuser.prototype.printMe=function(){
    console.log(`score is ${this.score}`);
}
const chai=new createuser("chai",25);
const tea=new createuser("tea",250);

console.log(chai.username);
console.log(chai.score);

chai.increment()
chai.printMe()

tea.increment()
tea.printMe()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

let myName="hitesh    "

console.log(myName.truelength);


let myHeros=["thor","spiderman"]
let heroPower={
    thor:"hammer",
    spiderman:"sling",
    getSpiderPower: function(){
        console.log(`sipdy power is ${this.spiderman}`);
    }
}

//since everything will pass through object that is why we are doing this..so everyone can access the object
Object.prototype.hitesh=function(){
    console.log(`hitesh is present in all objects`);
}
heroPower.hitesh()
myHeros.hitesh()

Array.prototype.heyhitesh=function(){
    console.log(`hitesh says hello`);
    
}
myHeros.heyhitesh()
// heroPower.heyhitesh() this is not accessible because of the hierarchy


//inheritance
const user={
    name: "chai",
    email:"amsma"
}
const teacher={
    makevideos:true,
    
}
const support={
    isavailable:true
}
const ta={
    makeassignment: 'js assignment',
    fulltime: true,
    __proto__: support
}

teacher.__proto__=user;


//modern syntax(same thing as above)
Object.setPrototypeOf(support,teacher)

let anotherusername="chai aur code"
String.prototype.truelength=function(){
    console.log(`${this}`);
    console.log(`true length is ${this.trim().length}`);
    
}
anotherusername.truelength();