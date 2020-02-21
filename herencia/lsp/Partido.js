const Largometraje = require('./Largometraje');

class Partido extends Largometraje{
    constructor(horario, precio, nombre, equipos){
        super(horario, precio, nombre);
        this.equipos = equipos;
    }
}

module.exports = Partido;
