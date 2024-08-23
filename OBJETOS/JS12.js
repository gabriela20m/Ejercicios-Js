//function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
    // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
    // Debes multiplicar este número por 5 y retornar el resultado.
    // Tu código:
 // }
  
 // module.exports = multiplicarNumeroDesconocidoPorCinco;
 function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
    // Acceder al valor de la propiedad "numeroMisterioso" y multiplicarlo por 5.
    const resultado = objetoMisterioso.numeroMisterioso * 5;
    
    // Retornar el resultado de la multiplicación.
    return resultado;
}

module.exports = multiplicarNumeroDesconocidoPorCinco;


const objetoMisterioso = {
    numeroMisterioso: 7
};

console.log(multiplicarNumeroDesconocidoPorCinco(objetoMisterioso)); // 35
