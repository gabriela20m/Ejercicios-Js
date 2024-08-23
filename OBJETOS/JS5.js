//const listarPropiedades = (objeto) => {
    // Lista y retorna todas las propiedades que posee el objeto recibido por la función.
    // PISTA: Puedes usar el método Object.keys().
    // Tu código:
 // };
  
  //module.exports = listarPropiedades;

  const listarPropiedades = (objeto) => {
    // Lista y retorna todas las propiedades que posee el objeto recibido por la función.
    return Object.keys(objeto);
};
  
module.exports = listarPropiedades;


const objeto = { nombre: 'David', edad: 30, ocupacion: 'Desarrollador' };

console.log(listarPropiedades(objeto)); // ['nombre', 'edad', 'ocupacion']
