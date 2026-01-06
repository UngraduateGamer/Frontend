// // gsap - js ka animation library hai jo ki basically use ki jati hain moving animations bnane ke liye

// // how to use Gsap
// // 1. link the gsap cdn with our index page
// // 2. select the html element using gsap jaise agar class hai to ".element" or agar id hain to "#element" or agar tag ho to "element" hum element ko js ke thorugh bhi access kr sakte hain 

// // syntax: gsap.position("element",{
//     // gsap body 
// // })

// // 2 tariko se animations laga sakte ho 
// //1. agar animation initial state se final state tk lgana hai to gsap.to() ka use kro
//     gsap.to("#box-1",{
//         x:500, // x se 500px dur
//         y:100, // y se 100px dur
//         duration:3, // animation 3s chalega
//         delay: 1, // 1s ka baad animation chalega
//         rotate:90, // 90 deg ka rotate hoga element
//         backgroundColor: "blue"

//     })
// // agar animation final state se initial state tk lgana hain to gsap.from() ka use kro
// gsap.from("#box-2",{
//     x:500, //x se 500px 
//     duration:2, //2s animation chalega
//     delay:1, // 1s ke bad aniamtion chelage
//     backgroundColor:"blue", // bgCOlor blue hain 
//     opacity:0 // opacity 0 hain
//     ,rotate:20 // 20 deg rotate hoga 
// })


// // agar animations ko ek ke bad ek chalana hain to timeline ka use kro . esse 1st vala animation chalega uske bad hi second vala start hoga
// // syntax: var tl = gsap.timeline();
// // ab gsap ki jagah timeline ka use kro eg: tl.to() 
// var tl = gsap.timeline();
// // pehle ye chalega uske bad hi next vala animation chalega
// tl.from("#box-3",{
//     x:500,
//     rotate:30,
//     opacity:0,
//     duration:3, // bina duration ke animation nai chalega
//     backgroundColor:'green'
// })
// tl.from("#box-4",{
//     x:500,
//     rotate:30,
//     opacity:0,
//     duration:2,
//     backgroundColor:"red"
// })

// jo bhi element ko "box" class hogi vo sab element select ho jayega 
// agar tum chahte ho ki har element ek ke bad ek aye to tum stagger ka use kro 
gsap.from(".box",{
    x:500,
    rotate:20,
    scale:0.9,
    duration:2,
    delay:1,
    opacity:0,
    stagger:1 // 1s ke bad dusra element ayega jiski bhi class box hogi

})