// dom manupulation - html elements ko select kro then change kro

// select html element

// id se select 
let h3 = document.getElementById('h3'); // isse bas ap ek hi element select kr sakte ho 
console.log(h3)

// class se select
let img1 = document.getElementsByClassName('img')[0]; // isse sabhi classes ke elements select ho jayega pr array me store honge
let img2 = document.getElementsByClassName('img')[1]; // isse sabhi classes ke elements select ho jayega pr array me store honge
console.log(img1)
console.log(img2)

// tags se selct 
let heading = document.getElementsByTagName('h3'); // isse hum sabhi tags ko select kr sakte hain . isme bhi elements arrays me store honge 
console.log(heading[0])

// querySelector(Single Element) se select 
let btn = document.querySelector("button"); // isse hum koi bhi first html element select kr sakte hain (id,class,tag).
console.log(btn)

// querySelector(All Element) se select 
// let btn = document.querySelector("button"); // isse hum koi bhi html element select kr sakte hain (id,class,tag). isme elemeents array me store hote hain. 
