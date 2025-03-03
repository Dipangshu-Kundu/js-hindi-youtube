// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>HTML EVENTS</title>
// </head>
// <body style="background-color: #414141;color: aliceblue">
//     <h2>Amazing image</h2>
//     <div>
//         <ul id="images">
//             <li><img width="200px" id="photoshop" src="https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="photoshop"></li>
//             <li><img width="200px" id="japan" src="https://images.pexels.com/photos/3532553/pexels-photo-3532553.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt=""></li>
//             <li><img width="200px" id="river" src="https://images.pexels.com/photos/3532551/pexels-photo-3532551.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt=""></li>
//             <li><img width="200px" id="owl" src="https://images.pexels.com/photos/3532552/pexels-photo-3532552.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" ></li>
//             <li><img width="200px" id="prayer" src="https://images.pexels.com/photos/2522671/pexels-photo-2522671.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt=""></li>
//             <li><a style="color: aliceblue;" href="https://google.com" id="google">Google</a></li>
//         </ul>
//     </div>
// </body>
// <script>
//     // document.getElementById('#owl').onclick=()=>{
//     //     alert("owl clicked");
//     // }

//     const owl=document.getElementById('owl');
//     // owl.addEventListener('click',(e)=>{
//     //     // e.preventDefault();
//     //     alert("owl clicked");
//     //     console.log(e);
//     //     console.log(e.timeStamp);
        
//     // },false)


//     //eventpropagation is in two parts eventbubbling and eventcapturing
//     //false is the default value known as eventBubbling
//     //attachEvent
//     //jQuery-onEvent listener

//     //events 
//     // type
//     //timestamp
//     //preventdefault
//     //target
//     //toElement
//     //srcElement
//     //currentTarget
//     //clientX,clientY,screenX,screenY
//     //altkey,ctrlkey,shiftkey,keyCode
    
//     //eventbubbling - going from inside to outside when the dafault value is false
// //     owl clicked
// // index1.html:100 PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
// // index1.html:101 2214.600000023842
// // index1.html:91 clicked inside the ul
// // index1.html:92 PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
// // index1.html:93 2214.600000023842



//     //but when it is true it is known as event capturing
//     //that is from outside to inside
// //     clicked inside the ul
// // index1.html:92 PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
// // index1.html:93 2375.2999999523163
// // index1.html:99 owl clicked
// // index1.html:100 PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
// // index1.html:101 2375.2999999523163


// //when the dafault value is false and we use 
// //e.stopPropagation() inside the owl then it displays
// // owl clicked
// // index1.html:100 PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
// // index1.html:101 1403.5

// // document.getElementById('images').addEventListener('click',(e)=>{
// //         // e.preventDefault();
// //         console.log("clicked inside the ul");
// //         console.log(e);
// //         console.log(e.timeStamp);
        
// //     },false)

// //     document.getElementById('owl').addEventListener('click',(e)=>{
// //         // e.preventDefault();
// //         console.log("owl clicked");
// //         console.log(e);
// //         console.log(e.timeStamp);
// //         e.stopPropagation();
// //     },false)

// //     document.getElementById('google').addEventListener('click',(e)=>{
// //         e.preventDefault();
// //         e.stopPropagation();
// //         //just to stop the bubbling
// //         console.log('google clicked');
// //     },false)

// document.querySelector('#images').addEventListener('click',(e)=>{
//     // console.log(e.target.parentNode);
//     console.log(e.target.tagName);
//     if(e.target.tagName === 'IMG'){
//         console.log(e.target.id);
//         let removeIt=e.target.parentNode;
//         // removeIt.remove();
//         removeIt.parentNode.removeChild(removeIt);
//     }

// },false)

// </script>
// </html>