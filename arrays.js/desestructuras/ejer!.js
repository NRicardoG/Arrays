let v = ["uno","dos","tres","cuatro"]
let x = ["lun","mar","mier","juev"]

funcion prueba([param1,param2,otro1],[param3,otro2]) {
    console.log(`primera entrada ${param1} ${param2}${otro1}`);
    console.log(`primera entrada ${param3} ${otro2}`);
}
prueba(v,x);
console.log(prueba);

const vector = [1,[2,3],4];
const [a,b,c] = vector;
console.log(a);
console.log(b);
console.log(c);


const vector = [1,[2,3],4];
const [a,...b] = vector;
console.log(a);
console.log(b);

const vector = [1,[2,3],4];
const [...f] = vector;
console.log(...f);

const vector = [1,[2,3],4];
const [g,,h] = vector;
console.log(g);
console.log(h);


