class Auto{
    constructor(llantas, motor, frenos, modelo){
        // ATRIBUTO = PARAMETRO
        this.llantas = llantas;
        this.motor = motor;
        this.frenos = frenos;
        this.anio = modelo;
    }        
    
    //  METODO
    arrancar(){
        return 'RUN RUN'
    }

    acelerar(nivelDeAcelerado) {
        if (nivelDeAcelerado === 1){
            return '20KM/H'
        }
        if (nivelDeAcelerado === 2){
            return '60KM/H'
        }
        if (nivelDeAcelerado === 3 ){
            if (this.anio === '68'){
                return 'EXPLOTA'
            }
            return '120KM/H'
        }
    }

    getMotor(){
        return this.motor;
    }
    
    setLlantas(nuevoNoLlantas){
        this.llantas = nuevoNoLlantas;
    }

}

var bocho = new Auto(4, '1600', 'abs', '68');
var chevy = new Auto(4, 'V4', 'abs', '00');


console.log(bocho);
console.log(bocho.setLlantas(3));
console.log(bocho);

// console.log(chevy.setLlantas(2));