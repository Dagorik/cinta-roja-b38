const mongoose = require('mongoose');

const schemaUser = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    apellidos: {
        type: String,
        required: true,
    },
    telefono: {
        type: Number,
        required: true,
    },
    genero: {
        type: String,
        enum: ['M','H','SN']
    },
});

const User = mongoose.model('user', schemaUser);

module.exports = User;