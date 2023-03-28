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

let prueba = "";