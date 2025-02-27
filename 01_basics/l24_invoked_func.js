//Immediately invoked function expression(IIFE)
(function chai(){
    console.log("DB connected");
})
();
//to prevent from the global scope pollution since global scope can sometimes affect our code and thus we use IIFE

(()=>{
    console.log("DB connected 2");
    
})();
//semicolon is important since for the IIFE it is important to end the context there immediately otherwise it will not allow other IIFE to execute
((name)=>{
    console.log(`my name is ${name}`);
    
})("hitesh");