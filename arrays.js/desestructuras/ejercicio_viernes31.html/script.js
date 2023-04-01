function facturar (){
    let estado = document.divestado.estado.value;
    const opcion = document.querySelector('#opcion');
    const opcion2 = document.getElementById('opcion2');
    let estrato = document.divestrado.estrato.value;
    let impulsoM = document.impulsoMes.value;
    if (estado == "Suspendido"){
      let tarifaBasica = 0;
      facturar = tarifaBasica + impulsoM;
    }
    else if (estado == "Activo"){
      if (estrato == 1){
        let tarifaBasica = 10000;
        facturar = tarifaBasica + impulsoM;
      }
      else if (estrato == 2){
        let tarifaBasica = 15000;
        facturar = tarifaBasica + impulsoM;
      }
      else if (estrato == 3){
        let tarifaBasica = 30000;
        facturar = tarifaBasica + impulsoM;
      }
      else if (estrato == 4){
        let tarifaBasica = 50000;
        facturar = tarifaBasica + impulsoM;
      }
      else{
        (estrato == 5)
        let tarifaBasica = 65000;
        facturar = tarifaBasica + impulsoM;
      }
      
    }
    
    // console.log(facturar);
  
  
  }


  console.log(estado);

  document.getElementById
  querySelector