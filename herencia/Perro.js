const Animal = require('./Animal');

// CLASE-HIJA
class Perro extends Animal{
    constructor(raza, dueno, color, nombre) {
        super(4, color, 2, nombre); // --> Construye al padre (ANIMAL)
        console.log('Se ejecutó el constructor de la clase PERRO');
        this.raza = raza;
        this.dueno = dueno;
        this.sonido = 'WAU'
    }

    ladrar(){
        return 'WAU WAU';
    }

}

module.exports = Perro;