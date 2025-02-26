function one(){
    const username="hitesh"

    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()
if(true)
{
    const username="hitesh"
    if(username==="hitesh")
    {
        const website="youtube"
        console.log(username+website);
    }
    console.log(website);//not accessible
    
}
console.log(username);//not accessible


//++++++++++++++++++++++++interesting+++++++++++++++++++++

function addone(num){
    return num+1;
}
addone(5)

const addtwo=function(num){
    return num+2;
}
addtwo(5)