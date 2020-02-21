const Cine = require('./Cine');
const Documental = require('./Documental');
const Pelicula = require('./Pelicula');
const Partido = require('./Partido');

const nuestroPlaneta = new Documental('8:30AM', 50, 'Nuestro Planeta','GEOGRAFIA');

const parasitos = new Pelicula('7:00PM', 60, 'Parasitos', 'Bjow', 'SUSPENSO');


const cinePedregal = new Cine('Cine pedregal', 10);

const superBowl = new Partido('12:00', 100, 'SUPER BOWL', 'EQUIP1 VS EQUIPO 2');

console.log(cinePedregal.reproducirLargometraje(parasitos));
console.log(cinePedregal.reproducirLargometraje(nuestroPlaneta));

console.log(cinePedregal.reproducirLargometraje(superBowl));