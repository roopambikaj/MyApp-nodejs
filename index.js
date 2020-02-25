const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000
var myData = [];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.json(myData));

app.get('/:name', (req, res) => {

    res.json(myData.filter(v => v.name === req.params.name))
});

app.get('/find/users', (req, res) => {
    res.json(myData.filter(v => 
        v.name === req.query.name &&
        v.age === '30'
        ))
});

app.post('/', (req, res) => {
    myData.push(req.body);
    res.json(req.body)
})

app.listen(port, () =>
    console.log(`Example app listening on port ${port}!`))