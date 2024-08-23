//const contarPropiedades = (objeto) => {
    // Cuenta y retorna el total de propiedades que tiene el objeto.
    // PISTA: Puedes iterarlo usando el bucle for-in.
    // Tu código:
  //};
  
  //module.exports = contarPropiedades;

  const contarPropiedades = (objeto) => {
    // Inicializa un contador en 0.
    let contador = 0;
    
    // Itera sobre cada propiedad del objeto usando un bucle for...in.
    for (let propiedad in objeto) {
        // Incrementa el contador por cada propiedad encontrada.
        contador++;
    }
    
    // Retorna el número total de propiedades.
    return contador;
};
  
module.exports = contarPropiedades;



const objeto = { nombre: 'David', edad: 30, ocupacion: 'Desarrollador' };

console.log(contarPropiedades(objeto)); // 3

