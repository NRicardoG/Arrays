let vNombre = new Array();
function ordenar(){

    let nombre = document.miformulario.nombre.value;
    vNombre.push(nombre);
    vNombre.sort();
    document.miformulario.ordenados.value = vNombre.join("\n");

    document.miformulario.nombre.value = "";
}

function ordenar2(){

    let nombre = document.miformulario.nombre.value;
    
    let vnombre2 = document.miformulario.ordenados.value.split("\n");
    vnombre2.push(nombre);
    vnombre2.sort();

    document.miformulario.ordenados.value = vNombre.join("\n");

    document.miformulario.nombre.value = "";

}


function limpiarTextArea(){
    document.miformulario.ordenados.value = "";
}