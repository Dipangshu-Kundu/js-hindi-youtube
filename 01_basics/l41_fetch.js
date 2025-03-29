
fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>{
    console.log(error);
})

//The fetch() method takes one mandatory argument, the path to the resource you want to fetch. It returns a Promise that resolves to the Response to that request — as soon as the server responds with headers — even if the server response is an HTTP error status. You can also optionally pass in an init options object as the second argument (see Request).
//A fetch() promise only rejects when the request fails, for example, because of a badly-formed request URL or a network error. A fetch() promise does not reject if the server responds with HTTP status codes that indicate errors (404, 504, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.
//becuase of microtaskqueue/priority queue we get the output of fetch sometimes before other outputs

//fetch is done in two ways:
//web browser and the other is DATA(on fulfilled[]..(resolve) and on Rejection[]..(reject))...these two fields fulfilled and rejection cannot be handled directly

//web browser based api or the node based api sends a network request and the data will go either go to network request or not go and followed by either resolve or reject

//the data we get after writing fetch is not directly accessible




