//Permite extrar informacion para utilizaro en otro arreglo.

//sintaxis [,]
const vector = [1,2,3];
const[a,b,c] = vector;
console.log(a);// 1
console.log(b);// 2
console.log(c);// 3

//sintaxis [...]
const[a,...b] = vector;
console.log(a);// 1
console.log(b);// [1,2]

//sintaxis funcion


