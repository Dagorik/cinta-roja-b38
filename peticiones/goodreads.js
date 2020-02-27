const request = require('request');

function createAuthor(nombre, last_name, nacionalidad, gender, age, biography) {
    const jsonQueSeEnvia = {
        name: nombre,
        last_name: last_name,
        nacionalidad: nacionalidad,
        gender: gender,
        age: age,
        biography: biography,
        is_alive: false,
    }
    const URL = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/';
    request.post({ url: URL, form: jsonQueSeEnvia },(err, response, body) => {
        console.log(err);
        console.log(response.statusCode);
        const json = JSON.parse(body)
        console.log(json);
    });
}

createAuthor("Nombre desde js", "last name", "MX", "M", 30, "La bio");


// Ahora hacer el patch

const updateAuthorById = (idAuthor, jsonQueSeEnvia) => {
    const URL = `https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/${idAuthor}/`;
    request.patch({ url:URL, form: jsonQueSeEnvia }, (err, response, body) => {
        console.log(err);
        console.log(response.statusCode);
        const json = JSON.parse(body)
        console.log(json);
    })
}


// SWAPI
// Hacer una funcion que pida como parametro el idPeople
// y me devuelva el nombre del personaje y el titulo de la primera pelicula.