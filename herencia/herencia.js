const Gato = require('./Gato');
const Perro = require('./Perro');

const snoopy = new Perro('Beagle', 'Charly', 'Blanco y Negro', 'Snoopy');
console.log(snoopy.getNombre());
const garfield = new Gato(true, 7, 'Naranja', 'Garfield');
console.log(garfield.getNombre());
