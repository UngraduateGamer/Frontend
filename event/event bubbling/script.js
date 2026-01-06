// event Bubbling - event bubbling ek process hota hain jisme jab kisi child element pr event hota to vo trigger hota hain fhir uske bad uske parent or uske bad uske parents ka eese hi age age chlta rehata hain. 
// matlab - andar se bahar ki tarah jata hain

let parent = document.querySelector("#parent");
let child1 = document.querySelector("#child1");
// parent.addEventListener("click",()=>{
//     console.log("hello this is parent")
// })
// child1.addEventListener("click",()=>{
//     console.log("hello this is child 1")
// })

// ye ek bug sa hain kyunki hamne child ko click kiya hain pr child ke sath sath parent ka bhi event listener execute hogya hain isko solve krne ke event.stopPrepogation();

//Event delegation ek process hai jisme hum har child element par alag-alag event listener lagane ke bajay,
// parent element par ek hi event listener lagate hain.
//      Event bubbling ki madad se hum ye pehchaan lete hain ki kaunsa child click hua hai,
// aur sirf usi child ka code execute hota ha
parent.addEventListener("click",function (event){
    if(event.target.id === 'child1'){
        console.log("Child 1 clicked");
    }
    else if(event.target.id === 'child2'){
        console.log("Child 2 clicked");
    }
    else{
        console.log("Parent Clicked");
    }
})
