const Largometraje = require('./Largometraje');

class Documental extends Largometraje{
    constructor(horario, precio, nombre, tipo){
        super(horario, precio, nombre);
        this.tipo = tipo;
    }
}

module.exports = Documental;
