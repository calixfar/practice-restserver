require('./config/config')
const  express = require('express')
const  app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json())

app.get('/usuarios', function (req, res) {
    res.json('Hello')
})

app.post('/usuarios', function (req, res) {
    let body = req.body;
    if( body.nombre === undefined ) res.status(400).json({ok: false, message: 'Nombre no definido'})
    else res.status(200).json({ok: true, persona: body})
    res.json({body})
})

app.put('/usuarios/:id', (req, res) => {
    let id = req.params.id;
    res.json({id})
})

app.delete('/usuarios', (req, res) => {
    res.json('delete')
})

app.listen(process.env.PORT, () => {
    console.log('Listening for the port: ' +process.env.PORT)
})