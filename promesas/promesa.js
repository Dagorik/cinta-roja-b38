function miPrimeraPromesa(numero){
    return new Promise((resolve, reject)=> {
        if (numero > 5){
            resolve('SI paso');
        } else {
            reject('NO paso');
        }
    });
}

miPrimeraPromesa(2)
    .then((respuesta) => {
        console.log('THEN', respuesta);
    })
    .catch((error) => {
        console.log('CATCH', error);
    })
