//function pasarUsuarioAPremium(objetoMuchosUsuarios) {
    // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
    // Cada usuario tiene una propiedad llamada "esPremium".
    // Define esta propiedad de todos los usuarios como true.
    // Retornar el arreglo.
    // Tu código:
 // }
  
  //module.exports = pasarUsuarioAPremium;

  function pasarUsuarioAPremium(objetoMuchosUsuarios) {
    // Iterar sobre cada usuario en el arreglo.
    for (let i = 0; i < objetoMuchosUsuarios.length; i++) {
        // Actualizar la propiedad "esPremium" a true.
        objetoMuchosUsuarios[i].esPremium = true;
    }
    
    // Retornar el arreglo actualizado.
    return objetoMuchosUsuarios;
}

module.exports = pasarUsuarioAPremium;


const usuarios = [
    { nombre: 'David', esPremium: false },
    { nombre: 'Ana', esPremium: false },
    { nombre: 'Luis', esPremium: false }
];

const usuariosActualizados = pasarUsuarioAPremium(usuarios);

console.log(usuariosActualizados);
// [{ nombre: 'David', esPremium: true },
//  { nombre: 'Ana', esPremium: true },
//  { nombre: 'Luis', esPremium: true }]
