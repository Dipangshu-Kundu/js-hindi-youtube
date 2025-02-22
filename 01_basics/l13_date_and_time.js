let mydate=new Date();
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(typeof mydate);

let newdate=new Date(2023,0,23,5,3);//year month date
console.log(newdate.toDateString());
console.log(newdate.toLocaleString());
let new1date=new Date("2023-01-14");
let new2date=new Date("01-14-2023");
console.log(new1date.toDateString());
console.log(new2date.toDateString());
 

let time=Date.now();
console.log(time);//millisecond
console.log(new2date.getTime());
console.log(Math.floor(Date.now()/1000));//comes in seconds


let new3date=new Date();
console.log(new3date);
console.log(new3date.getMonth() + 1);
console.log(new3date.getDay());

//string interpolation means backticks
console.log(new3date.toLocaleString('default',
    {
        weekday:"long"//or "short" that is "Sat" displays the name in short
    }
));
console.log(new3date.toLocaleString());







