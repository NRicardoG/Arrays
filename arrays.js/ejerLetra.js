function solo4(vec) {
    let vecresp = [];
    for (let i = 0; i < vec.length; i++) {
      if (vec[i].length >= 4)
        vecresp.push(vec[i])
    }
    return vecresp;
  }
  function solo4_2(vec) {
    let vecresp = [];
    vec.forEach(function(element) {
      if (element.length >= 4)
        vecresp.push(element)
    });
    return vecresp;
  }
  const solo4_3 = vec => vec.map(element => {
    if (element.length >= 4) {
      return element
    }
  
  });
  
  const solo4_4 = vec => vec.filter(function(e) {
    return e.length >= 4
  })
  
  let palabras = ['amor', 'sol', 'piedra', 'día', 'rosa', 'gol', 'pez', 'dia', 'gafas'];
  console.log(solo4(palabras));
  console.log(solo4_2(palabras));
  console.log(solo4_3(palabras));
  console.log(solo4_4(palabras));


