const estaEnRango = require('../ejercicios/11');
0
test('Debe retornar True si num está en el rango', function () {
  expect(estaEnRango(35.5)).toBe(true);
  expect(estaEnRango(40)).toBe(true);
  expect(estaEnRango(49)).toBe(true);
  expect(estaEnRango(21)).toBe(true);
});

test('Debe retornar False si num está fuera de rango', function () {
  expect(estaEnRango(10)).toBe(false);
  expect(estaEnRango(20)).toBe(false);
  expect(estaEnRango(50)).toBe(false);
  expect(estaEnRango(100)).toBe(false);
});



function estaEnRango(num) {
    // Retorna true si num es mayor o igual a 21 y menor o igual a 49, de lo contrario, retorna false
    return num >= 21 && num <= 49;
  }
  
  module.exports = estaEnRango;
  