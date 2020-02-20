const Animal = require('./Animal');

// CLASE-HIJA
class Gato extends Animal{
    constructor(karen, noVidas, color, nombre) {
        super(4, color, 2, nombre);
        console.log('Se ejecutó el constructor de la clase GATO');
        this.bigotes = true;
        this.karen = karen;
        this.noVidas = noVidas;
    }

    maullar(){
        return 'MIAU MIAU';
    }
}

module.exports = Gato;