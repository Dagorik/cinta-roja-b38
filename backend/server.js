const express = require('express');
const { User } = require('./models');

const app = express();

// Configuración extra para poder obtener el body del request(req)
app.use(express.urlencoded({extended: true}));
app.use(express.json());



app.get('/', (request, response) => {
    response.send('Hola desde express');
});

// http://localhost:3000/users
app.get('/users', (req,res) => {
    User.find().exec()
        .then((users) => {
            res.send(users);
        })
        .catch((err) => {
            res.status(409).send(err);
        })
});

// PARAMS
// http://localhost:3000/user/1
app.get('/user/:idUser', (req, res) => {
    console.log(req.params);
    const idUser = req.params.idUser;
    User.findOne({ _id: idUser }).exec()
        .then((user) => {
            if (user) res.send(user);
            else res.status(404).send({mensaje: 'USUARIO NO ENCONTRADO'})
        }).catch((err) => {
            res.status(409).send(err);
        });
});

// QUERYS
// http://localhost:3000/search?q=perros&p=gatos
app.get('/search', (req, res) => {
    console.log(req.query);
    res.send({ message: 'search' });
});

//BODY
// http://localhost:3000/user
app.post('/user', (req, res) => {
    console.log(req.body);

    const newUser = User({
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        telefono: req.body.phone,
        genero: req.body.genero
    })

    newUser.save((err, user) => {
        if (err) res.status(400).send(err)
        else res.status(201).send(user);
    });
});

app.patch('/user/:idUser', (req, res) => {
    const idUser = req.params.idUser;

    User.findOneAndUpdate({ _id: idUser }, req.body, { new: true }).exec()
        .then((userUpdated) => {
            res.send(userUpdated);
        }).catch((err) => {
            res.status(409).send(err);
        });
});

app.listen(3000, () => {
    console.log('Server on');
});
