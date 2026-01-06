// changing html element using js (dom)

// change html element - hum 3 tariko se html elements change kr sakte hain 
// element.innerText -- isse sirf us tag me kush text lekh sakte ho. yeh css ko follow krta hai. agar css me text ko hide kiya hian to show nai hoga text
// element.textContent -- isse sirf us tag me kush text lekh sakte ho . yeh css ko follow nai krta . sara text show hota hian , hidden bhi.
// element.innerHTML -- isse us tag me html likh sakte ho

// kisi bhi elements ko change krne se pehle usko select krna hota hain 
// selection
let btn = document.querySelector("button");
// change
btn.textContent = "Downloaded"

// btn.textContent += "download" --  isse hum previous text me new text ko concat(Add) kr sakte hain. 