/*hacer una funcion que me devuelva true o false si un elemento existe dentro del valor*/

function existeVector(vector,elemento) {
    for (let i = 0; i < vector.length; i++) {
        if (vector[i] === elemento)
        return true;
    }
    return false;
}

let v = ["daniela","zafiro","ana","gabriela"];
console.log(v);
let v2 = existeVector(v,"juan");
console.log(v2);

