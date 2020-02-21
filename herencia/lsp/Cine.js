class Cine{
    constructor(nombreCine, salas){
        this.nombreCine = nombreCine;
        this.salas = salas;
    }

    // reproducirPeli(pelicula){
    //     console.log('Peli: ', pelicula);
    //     return 'Reproduciendo ' + pelicula.nombre
    // }

    // reproducirDocu(x){
    //     console.log('X: ', x);
    //     return 'Reproduciendo ' + x.nombre
    // }

    reproducirLargometraje(largometraje){
        return 'Reproduciendo ' + largometraje.getNombre();
    }
}

module.exports = Cine;
