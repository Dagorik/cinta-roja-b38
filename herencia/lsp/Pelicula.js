const Largometraje = require('./Largometraje');

class Pelicula extends Largometraje{
    constructor(horario, precio, nombre, director, genero){
        super(horario, precio, nombre);
        this.director = director;
        this.genero = genero;
    }
}

module.exports = Pelicula;