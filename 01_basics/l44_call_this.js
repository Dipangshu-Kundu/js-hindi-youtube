//window={this=window}
//node={}

function setname(username){
    this.username=username;
    console.log("called");
    
}
function createuser(username,email,password){
    setname.call(this,username);
    this.email=email; 
    this.password=password;
}

const chai=new createuser("chai","adad","adfvv");
console.log(chai);
