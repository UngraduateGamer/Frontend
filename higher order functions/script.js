// higher order function vo function hote hain jo ek function return kre ya arguments me ek function accept karein 

const namaste = ()=>{
   console.log( "Namaste");
}
//higher order function with passes function as an argument
function higherOrder(namaste){
    namaste()
}

higherOrder(namaste);

function higher(){
    return function newHigher(){
        console.log("Hello")}

}
const res = higher()
console.log(res)