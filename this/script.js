// this es6 me naya keyword aya hain . iski values bar bar change hoti hain according to the block or scope ya alag alag conditions , sari conditions ko jan jao to this ko samaj jayoge

// method - jo object ke andar function define hota hain vo method kehlata hain . 

// global scope me window hoti hain this is value 
// console.log(this)
// function - window
// function abcd(){
//     console.log(this)
// }
// abcd()
// method - object 
// const obj = {
//     fnc : function (){
//         console.log(this.age)
//     },
//     age : 19,
//     name : 'rahul',
// }
// obj.fnc()

// fnc inside method (es5) - window
// const obj = {
//     fnc : function (){
//             console.log("Method me this is value : ",this)
//         function abcd(){
//             console.log("Method ke andar this is value : ",this)
//         }
//         abcd()
//     },
//     age:19,
//     name:"XYZ"
// }
// obj.fnc();

// fnc inside method (es6) - object
// arrow function this is value apne parent se lete hain
// const obj = {
//     fnc: function abcd(){
//             console.log("method ke andar this is value",this)
//         const childFunction = ()=>{
//             console.log("array function me this is value method ke andar",this)
//         }
//         childFunction()
//     },
//     name:"Rahul",
//     role:"Web Developer"
// }
// obj.fnc();  
// constructor function mein this is value - new blank object
// function abcd(){
//     console.log(this)
// }
// const constructor = new abcd(); // new blank object bnata hain this ki value ko
// event listener mein this is value - that element jis par vo event listener lga ho
const btn = document.querySelector("button");
btn.addEventListener("click",function (){
    console.log(this);
}) 