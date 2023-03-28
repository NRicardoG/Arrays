/*Escibir una función que eleve al cuadrado todos los numeros impares de un vector*/

function elevarIcuadrados(vector){
    /*crear una copia del vector original */
    let[,...vector2]= vector;
   
    for(let i=0;i<vector2.length;i++){
        //preguntar si es impar
        if(vector2[i]%2!=0){
            //elevarlo al cuadrado
            vector2[i] = vector2[i]**2;
                    
            
        }
    }
    //retornar nuevo vector
    return vector2;
}

let vector = [2,5,6,7,-1];
console.log(vector);
let vector2 = elevarIcuadrados(vector);
console.log(vector2);
console.log(vector);


let [f,s,...t]= vector
console.log(f,t);

/*solicitar por posiciones
let [f,s] = vector;
console.log(f,s);

meter totos los datos en una posicion
let [f,...t]= vector
console.log(f,t);
salida = 2 [6,7,-1]
*/ 

//funcion en javascript que reciba un vector y devuelva el elemento mayor

let mayorElemt = (vector) => {
    if (vector.length == 0)
        return null;
    
    let mayor = vector[0];
    for (let i = 1; i < vector.length; i++) {
        if (vector[i] > mayor) 
            mayor = vector[i];
        
    }
    return mayor;
    
}
// let v = [2,5,6,7,-1];
// console.log(v);
// let v2 = mayorElemt(v);
// console.log(v2);

// //funcion en javascript que reciba un vector y devuelva el elemento menor

// let mayorElemt = (vector) => {
//     if (vector.length == 0)
//         return null;
    
//     let mayor = vector[0];
//     for (let i = 1; i < vector.length; i++) {
//         if (vector[i] >mayor) 
//             mayor = vector[i];
        
//     }
//     return mayor;
    
// }
// let v = ["15","ana","Carlos","271"];
// console.log(v);
// let v2 = mayorElemt(v);
// console.log(v2);

// //ordenar