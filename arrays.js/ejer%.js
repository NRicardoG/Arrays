//ARRAY CON FOR
function porcentajes (arr,por){
    let vec =[];
    for (let i = 0; i < arr.length; i++) {
        vec.push(Math.round(arr[i]*por));
    }
    return vec;
}


// FOREACH FUNCTION
const porcentajes1 = function(arr,por) {
    let vec = [];
    arr.forEach(Element =>{
        vec.push(Math.round(arr[i]*por));
    });
    return vec;
}


//MAP FUNCTION
const porcentajes2 = function(arr,por) {
    return arr.map(e=> Math.round(e*por));
}

const mimap = (arr,por) => arr.map(e=> Math.round(e*por));

let vec = [1000,656];
let p = 0.19
console.log(porcentajes(vec,p));
console.log(porcentajes1(vec,p));
console.log(porcentajes2(vec,p));
console.log(mimap(vec,p));



