// add elements / remove element 

// add element
// 1. element bnao
let h1 = document.createElement("h1"); // h1 create huya hai bs body par append nai huya 
h1.textContent = 'Heading 1'; 
// 2. ab us element ko append krwado jaha pr vo element chahiye
let body = document.querySelector("body");
// console.log(body)
body.appendChild(h1); // body ke last me h1 ko add kro as a child
// body.prepend(h1); // body ke starting me h1 ko add kro 


// remove element
// 1. element ko select kro 
let btn = document.querySelector("button");
// 2. ab us element ko remove krdo
btn.remove(); // btn ko remove krdo abh