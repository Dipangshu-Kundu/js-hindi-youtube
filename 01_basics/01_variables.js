const accountId=144553
let accountEmail="abc@google.com"
var accountPassword="12345"
accountCity="jaipur"
let accountState;//by default undefined
// const cannot be changed
//for variable declaration we use let and var
//and we should we use let and not var because of the scope resolution problem
// accountId=2
//var is dependent on a functional scope and it can't be accessed outside the functional scope
//while let is dependent on a block scope...that is it can't be accessed outside a block..
//while var can be accessed outside a block.but not outside a function
accountEmail="hc@hc.com"
accountPassword="1313132"
accountCity="bengaluru"
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
