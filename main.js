const express = require("express");
const app = express();
app.use(express.json());

const port = 3000;

const usuarioFernando = {
    id: 1,
    nome: 'Fernando',
    idade: 27
};

const usuarios = [usuarioFernando];

app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});

app.post('/usuarios', (req, res) => {
    const { nome, idade } = req.body;
    const id = usuarios.length;

    const novoUsuario = {
        id,
        nome,
        idade
    };

    usuarios.push(novoUsuario);
    res.json(novoUsuario);


});


app.listen(port, () => {
    console.log('Server is up and running on port ${port}');
});