const request = require('request');

// // Imprimir el nombre de el personaje y su primera pelicula
// function getPeopleByIdVersionFea(idPeople){
//     request.get(`https://swapi.co/api/people/${idPeople}/`, (err, response, body) => {
//         console.log(err);
//         console.log(response.statusCode);
//         const json = JSON.parse(body);
//         console.log(json.name);
        
//         request.get(json.films[0], (err, response, body) => {
//             console.log(err);
//             console.log(response.statusCode);
//             const json = JSON.parse(body);
//             console.log(json.title);
//         })
//     })
// }


// getPeopleByIdVersionFea(20);


// --> Se ejcuta ---> Main --> PRESENTE
//     --> Se va a la cola
//         --> Pila
//         <-- Pila - Callback ---> FUTURO
//     --> callback se ejecuta - Se ejecuta la segunda peticion
//         -->  Pila
//         <-- Pila - Callback ---> MAS FUTURO
//     Se imprime




// Definición de la función
function getPeopleById(idPeople) {
    // Definición de la promesa
    return new Promise((resolve, reject) => {
        request.get(`https://swapi.co/api/people/${idPeople}/`, (err, response, body) => {
            if (response.statusCode === 200){
                const json = JSON.parse(body);
                resolve(json);
            } else {
                reject('Petición incorrecta');
            }
        })
    });
}


function getMovieByUrl(urlMovie){
    return new Promise((resolve, reject) => {
        request.get(urlMovie, (err, response, body) => {
            if (response.statusCode === 200){
                const json = JSON.parse(body);
                resolve(json)
            } else {
                reject('Error en tu petición de movies');
            }
        })
    });
}

getPeopleById(2)
    .then((people) => {
        console.log('THEN', people.name);
        return getMovieByUrl(people.films[0])
    })
    .then((movie) => {
        console.log(movie.title);
    })
    .catch((err) => {
        console.log('CATCH', err);
    })





// function getPeopleById(idPeople) {
//     return new Promise((resolve, reject) => {
//         request.get(`https://swapi.co/api/people/${idPeople}/`, (err, response, body) => {
//             if (response.statusCode === 200){
//                 const json = JSON.parse(body);
//                 resolve(json)
//             } else {
//                 reject('Error en tu petición de people');
//             }
//         })
//     });
// }


// function getMovieByUrl(urlMovie){
//     return new Promise((resolve, reject) => {
//         request.get(urlMovie, (err, response, body) => {
//             if (response.statusCode === 200){
//                 const json = JSON.parse(body);
//                 resolve(json)
//             } else {
//                 reject('Error en tu petición de movies');
//             }
//         })
//     });
// }

// getPeopleById(20)
//     .then((people) => {
//         console.log(people.name);
//         return getMovieByUrl(people.films[0])
//     })
//     .then((movie) => {
//         console.log(movie.title);
//     })
//     .catch((err) => {
//         console.log('CATCH', err);
//     })


//     // Version resumida
// getPeopleById(20)
//     .then((people) => getMovieByUrl(people.films[0]))
//     .then((movie) => console.log(movie.title))
//     .catch((err) => console.log('CATCH', err))
