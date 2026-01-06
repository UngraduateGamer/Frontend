// gsap.to("#page2 img",{
//     width:"100%",
//     scrollTrigger:{
//         trigger:"#page2",
//         markers:true,
//         scrub:3,
//         start:" top 0%",
//         end:"top -100%",
//         pin:true
//     }
// })

// horizontal scrolling using pin
gsap.to("#page-2 h1",{
    x:'-55%',
    start:"top 0",
    end:"top -100%",
    scrollTrigger:{
        trigger:"#page-2",
        scroller:"body", // body ke basis pe scroll ho
        pin:true,
        markers:true,
        scrub:5,
    }
})