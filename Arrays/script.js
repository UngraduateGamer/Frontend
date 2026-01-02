const arr = [120,23,4,6,7,8,456];

// how to loop an array 
// forEach loop array ke har element ke liye chalta hai,
// aur forEach ke andar jo callback function likhte hain
// wo har element ke saath execute hota hai.
arr.forEach(function (val){
    console.log(val)
})

// how to loop and array and do something with each element
arr.forEach(function (val){
    console.log(val*2)
})