// call apply bind ye 3 tarike(ways) hain function ko call krne ke . kisi object ko this maan kar

function abcd(){
    console.log(this);
}
const obj = {
    name:"Rahul",
    role:"Web Developer"
}
// isse ham this ko object bna sakte hain 
// abcd.call(obj)

function xyz(a,b,c){
    console.log(this,a,b,c)
}
const object = {
    name:"Rahul",
    role:"Web Developer"
}
// isse bhi ham this ko object bna sakte hain. or isme ham us function ke paramete bhi access kr sakte hian
// xyz.apply(obj,[1,2,3]);


const objj = {
    name:"Rahul",
    role:"Web developer"
}
function ab(){
    console.log(this)
}
// this ko object bnata hai . pr yeh value ko store krta hain print nai krta. isliye isko dusre variable me store krna hota hain or bad me uska call krna hota hain .
let res = ab.bind(objj);
res();