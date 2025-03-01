//these all are done in console
console.log(document.getElementById("title").id)
console.log(document.getElementById("title").className)
console.log(document.getElementById("title").getAttribute('id'))
console.log(document.getElementById("title").setAttribute('class','test heading'))//then it will not overwrite
const title=document.getElementById("title").id
title.style.backgroundColor="green"
title.style.padding="15px"
title.style.boredrRadius="15px"
console.log(title.textContent)
// also shows the hidden texts
console.log(title.innerHTML)
//if any html also written then that is also shown
console.log(title.innerText)
//only shows the unhidden texts


console.log(document.getElementsByClassName('heading'));
console.log(document.querySelector('h1'));
//only gives the first h1
console.log(document.querySelector('h2'));
console.log(document.querySelector('#title'));
console.log(document.querySelector('.heading'));
console.log(document.querySelector('input[type="password"]'));
console.log(document.querySelector('p:first-child'));

const myul=document.querySelector('ul')
const turngreen=myul.querySelector('li')
//only selects the first li
turngreen.style.backgroundColor="green"
turngreen.style.padding="10px"
turngreen.innerText="five"


const templilist=document.querySelectorAll('li')
//it returns a kind of array not entirely kind array

// templilist.style.color="green"//not in this way
templilist[0].style.color="green"

const myh1=document.querySelectorAll('h1')
myh1[0].style.color="red"


templilist.forEach((item)=>{
    item.style.backgroundColor="yellow"
})

const tempclasslist=document.getElementsByClassName('list-item')
//it returns an HTML collection of all the elements having the same class name and it is not an array and thus we have to convert it into an array

const arr=Array.from(tempclasslist)
myarr.forEach((item)=>{
    item.style.color="blue"
})


const myh3=document.querySelectorAll('h3')
console.log(myh3[0].innerText)

myh3.forEach((h)=>{
 h.style.color="red";
 h.style.backgroundColor="green";
 h.style.padding="10px";
 h.innerText="Hitesh";
})








