const request = require('request');

function getPeopleById(peopleId){
    request.get(`https://swapi.co/api/people/${peopleId}/`, (err, response, body) => {
        console.log(err);
        console.log(response.statusCode);
        const json = JSON.parse(body)
        console.log(json.name);
    });
}


console.log(1);
getPeopleById(14);
console.log(2);


// PARA BUSCAR LOS METEORITOS
// json.near_earth_objects --> obj
// json["near_earth_objects"] --> obj

// json.2020-12-02
// json["2020-12-02"]

// json.primer nombre
// json["primer nombre"]

// Object.keys()