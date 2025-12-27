let elems = document.querySelectorAll(".elem");
elems.forEach(elem=>elem.addEventListener('mousemove',(event)=>{
    let image = elem.children[0];
    let x = event.x;
    image.style.opacity = 1;
    image.style.left = x+"px";   
    image.style.z = -1 
}))
elems.forEach(elem=>elem.addEventListener('mouseleave',(event)=>{
    let image = elem.children[0];
    image.style.opacity = 0;
}))
