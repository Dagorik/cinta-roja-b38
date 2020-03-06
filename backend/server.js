const express = require('express');

const app = express();

// Configuración extra para poder obtener el body del request(req)
app.use(express.urlencoded({extended: true}));
app.use(express.json());



app.get('/', (request, response) => {
    response.send('Hola desde express');
});

// http://localhost:3000/users
app.get('/users', (req,res) => {
    const users = [
        {id:1, name: 'User 1'},
        {id:2, name: 'User 2'},
        {id:3, name: 'User 3'},
        {id:4, name: 'User 4'},
    ]
    res.send(users);
});

// PARAMS
// http://localhost:3000/user/1
app.get('/user/:idUser', (req, res) => {
    console.log(req.params);
    const idUser = req.params.idUser;
    if (idUser === '3') {
        const user = {id:3, name: 'User 3'}
        res.send(user);
    } else {
        res.status(404).send({ message: 'NO ENCONTRADO' })
    }
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
    res.send({ mensajito: 'EL POST' });
});

app.listen(3000, () => {
    console.log('Server on');
});
