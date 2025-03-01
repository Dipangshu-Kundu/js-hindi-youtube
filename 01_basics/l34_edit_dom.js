// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Edit elements in DOM</title>
//     <style>
         
//     </style>
// </head>
// <body style="background-color: #212121; color: #fff">
//     <ul class="language">
//         <li>Javascript</li>
//     </ul>
// </body>
// <script>
//     function addlanguage(langname){
//         const li=document.createElement('li')
//         li.innerHTML=`${langname}`
//         const ul=document.querySelector('ul')
//         ul.appendChild(li)
//     }
//     addlanguage('python')
//     addlanguage('typescript')
//     function addoptilanguage(langname)
//     {
//         const li=document.createElement('li')
//         li.appendChild(document.createTextNode(`${langname}`))
//         const ul=document.querySelector('ul')
//         ul.appendChild(li)
//     }
//     addoptilanguage('golang')

//     //edit
//     const secondlang=document.querySelector("li:nth-child(2)")
//     // secondlang.innerHTML="Mojo"
//     const newli=document.createElement('li')
//     newli.textContent="Mojo"
//     secondlang.replaceWith(newli)

//     //edit
//     const firstlang=document.querySelector("li:first-child")
//     firstlang.outerHTML="<li>MongoDB</li>"
//     //outer html means full html

//     //remove
//     const lastlang=document.querySelector("li:last-child")
//     lastlang.remove()
// </script>
// </html>