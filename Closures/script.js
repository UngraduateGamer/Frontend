// closures - jab ek function kisi dusre function ko return kre aur child function parent functions ke variables ko use krein usko closures kehte hain. yeh basically apne parent ke variable ko yad rakhta hain . chahiye vo parent function execute kyu nai ho gya ho tab bhi . 

function parent(){
    let num = 10;
    return function child(){
        num++; // num me 1 add hoga 10 se 11 hoga 
        console.log(num) // num ki value ko yad rkhega
    }
}
let result = parent();
result() // 11
result() // 12 kyunki child function num ki value ko yad rakhega 