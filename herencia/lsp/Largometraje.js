class Largometraje{
    constructor(horario, precio, nombre) {
        this.horario = horario;
        this.precio = precio;
        this.nombre = nombre;       
    }

    getNombre(){
        return this.nombre;
    }

}

module.exports = Largometraje;
