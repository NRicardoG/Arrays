// let matriz = [["salmon", "halibut", ],
//                 ["coral","reef"]];

// console.log(matriz); //[["salmon", "halibut", ],["coral","reef"]]

// console.log(matriz[1][0]); // coral

// //funcion con matrices
// function crearmatriz(matriz1,fils,cols) {
//     for (let i = 0; i < fils;i++)
//     matriz1[i] =[i] = new Array(cols);
//     return matriz1; //
// }

// let matriz1 =[];
// //Dimensiones
// let fils = 2,cols = 3;
// matriz1 = crearmatriz(matriz1,fils,cols);
// console.log(matriz1);

// //como recorrer (filas o columnas )

// function impMatriz (matriz) {
//     for (let f = 0; f < matriz.length; f++){
//         let fila = "";
//         for (let c = 0; c < matriz[f].length ; c++) {
//             fila+=matriz[f][c]+"\t\t"; //
//         }
//         console.log(fila);
//     }
// }

// let manga = [["papa","yuca"],["maiz","pero"],["sancocho",["mute"]]];
// impMatriz(manga);

//solicitar parametros en matriz
// function crearMatriz(matriz, fil, col) {
//     for(let i=0; i<fil; i++)
//         matriz[i] = new Array(col);

//     return matriz;
// }

// function imprimirMatriz(matriz) {
//     for(let f=0; f < matriz.length; f++) {
//         let fila = "";
//         for(c=0; c < matriz[f].length; c++) {
//             fila += matriz[f][c] + "\t\t";
            
//         }
//         console.log(fila);
//         // console.log(matriz[f].join("\t\t"));
//     }
// }

// const llenarMatriz = function(m) {
//     for(let f=0; f < m.length; f++) {
//         for(let c=0; c < m[f].length; c++) {
//             m[f][c] = prompt(`Ingrese el dato para m[${f+1}][${c+1}]`)
//         }
//     }
// }

// let matriz = [];
// let fil= 2, col =3;

// fil = Number(prompt("Ingrese el número de filas"));
// col = Number(prompt("Ingrese el número de columnas"));
// matriz = crearMatriz(matriz, fil, col);
// llenarMatriz(matriz);
// imprimirMatriz(matriz)

/////////////////////
//recorrer y sumar filas

// function sumaFila(m) { 
//      let vsum = [];
//      for (let f = 0;f < m.length; f++) {
//         //  vsum[f] = 0;
//         //  for (let c = 0;c < m[f].length; c++){
//         //      vsum[f] += m[f][c];
//         //  }
//             vsum[f] = m[f].reduce((acumulador,elemento) => {
//                 return acumulador + elemento;
//             });
        
//      }
//      return vsum;
// }

// matriz = [[4,6,9],
//          [7,2,-1],
//          [5,8,13],
//          [2,0,8]]; //4X3

// let sumFila = sumaFila(matriz);
// console.log(sumFila); //[19, 8, 26, 10]

//recorrer y sumar columnas ( el vector inicial debe declararse en cero v [0,0,0])

function sumaColumna(m) { 
    let vcol = m[0].map(()=>0);
    for (let f = 0;f < m.length; f++) {
        for (let c = 0;c < m[f].length; c++){
            vcol[c] += m[f][c];
        }
        
    }
    return vcol;
}

matriz = [[4,6,9],
        [7,2,-1],
        [5,8,13],
        [2,0,8]]; //4X3

let sumColum = sumaColumna(matriz);
console.log(sumColum); //[18, 16, 29]