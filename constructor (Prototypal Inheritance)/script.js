// aise koi function jisme ap this ka use kr rhe or function ko call krte waqt new ka use kr kre ho to new apko blank object dete hain 
// constructor 
// ek function jo ki this ka use kr rha ho and new ke dware naya naya objects bna rha ho us function ko constructor kehte hain. 
function makeHuman(name,age){
    this.name = name; //window.name
    this.age = age;
    this.printMyName = function(){
        console.log(this.name)
    }
}
const human2 = new makeHuman('rahul','20'); // human1.name
const human1 = new makeHuman('prince','19'); // human1.name
