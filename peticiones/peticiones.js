const request = require('request');

function getPeopleById(peopleId){
    request.get(`https://swapi.co/api/people/${peopleId}/`, (err, response, body) => {
        console.log(err);
        console.log(response.statusCode);
        const json = JSON.parse(body)
        console.log(json.name);
    });
}



getPeopleById(14);