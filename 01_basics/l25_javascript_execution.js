//javascript execution context
//js runs code in two phases
//code->global execution context(this)
//    ->function execution context
//    ->eval execution context
//code->memory creation phase(only memory is being allocated)
//    ->execution phase
// let val1=10
// let val2=5
// function add(){

// }
//let result1=addnum()...;
//let result2=addnum()....
//1. GEC(global execution context)
//2. MCP(memory creation phase)
// (val1->undefined,....,result1->undefined,result2->undefined)
//3.Execution phase(val1->10(given value))
//  in the last two lines it will be consisting of two phases, the memory creation phase(for the passed arguments) and the execution phase of the function(num1->val1,num2->val2,total->num1+num2)
//and the total value is returned in the global executional context
//once the above combination gets executed then it gets deleted
//basically NVE(new variable environment)+ thread(execution part)


//+++++++++call stack+++++++++++
//from below to up:
//global execution
//once a function gets executed then it gets erased from the top of the stack
//(LIFO)

