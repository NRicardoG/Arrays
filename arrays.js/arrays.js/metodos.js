//metodo PUSH
let arr = [1,2,3];
arr.push(4);
console.log(arr);

//metodo POP
let arr1 = [1,2,3];
let lastElement = arr1.pop();
console.log(lastElement);
console.log(arr);

//metodo SHIFT

let arr2 = [1,2,3];
let lastElement1 = arr2.shift();
console.log(lastElement1);
console.log(arr);

//metodo UNSHIFT

let arr3 = [1,2,3];
arr.unshift(0,-1);
console.log(arr3);

//metodo SLICE

let arr4 = [1,2,3,4,5];
let slicedArr = arr4.slice(1,4);
console.log(slicedArr);
console.log(arr4);

//metodo SPLICE

let arr5 = [1,2,3,4,5];
let removedElements = arr4.splice(1,2);
console.log(removedElements);
console.log(arr5);

//metodo CONCAT

let arr6 = [1,2,3];
let arr7 = [4,5,6];
let newArr = arr6.concat(arr7);
console.log(newArr);

//metodo JOIN

let arr8 = ['apple','banana','orange'];
let str = arr8.join(',');
console.log(str);

//metodo INDEXOF

let arr9 = ['apple','banana','orange'];
let index = arr9.indexOf('banana');
console.log(index);

//metodo FOREACH
//Ejecuta una funcion para cada elemento del array.

let arr10 = [1,2,3];
arr10.forEach(function(element) {
    console.log(element);
});

//metodo MAP
//Crea un nuevo array con los resultados de llamar una funcion para cada elemento del array.

let arr11 = [1,2,3];
let mappedArr = arr11.map(function(element) {
    return element * 2;
});
console.log(mappedArr); //[2,4,6]

//metodo FLITER
//Crea un nuevo array con todos los elementos que cumplan una condicion especifica en una funcion.

let arr12 = [1,2,3,4,5];
let filteredArr = arr12.filter(function(element) {
    return element % 2 === 0;
});
console.log(filteredArr); //[2,4]

//metodo REDUCE 
//Reduce el array a un único valor mediante la ejecución de una función para cada elemento del array.

let arr13 = [1,2,3,4,5];
let sum = arr13.reduce(function(acumulator, currentValue) {
    return acumulator + currentValue;
});
console.log(sum); //15

let arr14 = [5,10,2,8,3];
let maxNumber = arr14.reduce(function(acumulator, currentValue) {
    return Math.max(acumulator , currentValue);
});
console.log(maxNumber); //10

let arr15 = [5,10,2,8,3];
let sum = arr15.reduce(function(acumulator, currentValue) {
    return acumulator + currentValue;
});
let average = sum / arr15.length; 
console.log(average); //5.6

