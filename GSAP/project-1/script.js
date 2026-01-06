var tl = gsap.timeline();
tl.from("nav div h3",{
    opacity:0,
    duration:0.5,
    // delay:0.2,
    y:-100,
    scale:0.9,
    stagger:0.5
})

tl.from("section h2",{
    opacity:0,
    duration:0.5,
    // delay:0.2,
    x:-100,
    stagger:0.5,
    scale:0.9

})
tl.from("section img",{
    opacity:0,
    x:100,
    duration:0.5,
    scale:0.9,
    rotate:45,
    stagger: {
    each: 0.5,
    from: "end"
  }
})