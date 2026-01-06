// scroll trigger eke plugin hai . isse ap scrolling ke base par animations perform kr sakte ho. 
gsap.from("#box-1 .circle",{
    opacity:0,
    scale:0,
    duration:2,
    delay:0,
    rotate:720
})
gsap.from("#box-2 .circle",{
    opacity:0,
    scale:0,
    duration:2,
    delay:0,
    rotate:720,
    // use sccroll trigger
    scrollTrigger:{
        trigger:"#box-2 .circle", // vo element jisko animate karna hain 
        // markers:true, // markers line show hongi
        start:"top 80%", // start se top se 80%
        end:"top 50%", // end ho jayega top se 50%
        scrub:5 , //smooth-animation hoga(1-5) . scrolling ke base par chalega
    }
})

gsap.from("#box-3 .circle",{
    opacity:0,
    scale:0,
    rotate:720,
    duration:2,
    scrollTrigger:{
        trigger: "#box-3 .circle",
        markers:true,
        top:"top 50%",
        end:"top 40%",
        scrub:true,  // scrolling ke basis pe animation chalega jitna scroll kroge utna animation ayega 
    }
})