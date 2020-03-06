const mongoose = require('mongoose');
const User = require('./User');

const URL_MONGO = 'mongodb+srv://prueba:timZEOg8eTVnhcyq@cluster0-in5es.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(URL_MONGO, (err) => {
    if (!err) console.log('Conexión exitosa');
    else console.log(err);
})

module.exports = {
    User
}